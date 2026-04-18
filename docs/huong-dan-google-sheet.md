# Hướng dẫn tích hợp Google Sheet cho website SIGE

Tài liệu này hướng dẫn cách vận hành hệ thống mới gồm:

1. **Quản lý nội dung homepage bằng Google Sheet**
2. **Nhận form “Đăng ký tư vấn nhanh” vào Google Sheet**

---

## 1) Kiến trúc tổng quan

### Luồng nội dung homepage
- `app/page.tsx` gọi `getHomeContent()` trong `lib/google-sheet-content.ts`
- `getHomeContent()` gọi `GOOGLE_CONTENT_WEBHOOK_URL` (GET)
- Dữ liệu được cache server-side **5 phút** (`revalidate: 300`)
- Nếu endpoint lỗi / timeout / JSON sai format: tự động fallback về `DEFAULT_HOME_CONTENT` trong `lib/home-content.ts`

### Luồng form tư vấn
- Form client ở `components/QuickConsultationForm.tsx` gửi `POST /api/consultation`
- API route `app/api/consultation/route.ts`:
  - Validate dữ liệu bằng Zod (`lib/consultation-schema.ts`)
  - Forward sang `GOOGLE_SUBMIT_WEBHOOK_URL`
  - Gắn thêm metadata: `submittedAt`, `source`
  - Trả trạng thái thành công/thất bại để hiển thị tại chỗ trên UI

---

## 2) Biến môi trường cần cấu hình

Thêm vào `.env.local` (local) và Environment Variables (Vercel):

```env
GOOGLE_CONTENT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
GOOGLE_SUBMIT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
GOOGLE_APPS_SCRIPT_SECRET=your_random_secret_32_chars_or_more
```

> Có thể dùng **cùng 1 URL Apps Script** cho cả content + submit (doGet/doPost).

### Ý nghĩa
- `GOOGLE_CONTENT_WEBHOOK_URL`: endpoint GET trả dữ liệu content
- `GOOGLE_SUBMIT_WEBHOOK_URL`: endpoint POST nhận form
- `GOOGLE_APPS_SCRIPT_SECRET`: secret gửi qua header `x-sige-secret` (nếu có khai báo)

---

## 3) Cấu trúc Google Sheet cho content

Tạo 1 sheet (ví dụ: `content`) với 2 cột:
- Cột A: `key`
- Cột B: `value`

Website giờ hỗ trợ **key dạng phẳng** (dot-notation), dễ đọc và chỉnh sửa trực tiếp trên Google Sheets.

## 3.1 Cách đặt key

- Dùng dấu `.` để phân cấp
- Ví dụ: `home.news.title` → text section "Tin tức - Sự kiện"
- Ví dụ: `home.services.featured.title` → "Thông tin học bổng"

## 3.2 Danh sách key (định dạng phẳng)

| Key | Mô tả |
|---|---|
| `home.header.nav.about` | Menu: Giới thiệu |
| `home.header.nav.programs` | Menu: Chương trình |
| `home.header.nav.activities` | Menu: Hoạt động |
| `home.header.nav.news` | Menu: Tin tức |
| `home.header.nav.contact` | Menu: Liên hệ |
| `home.header.topBar.hotlineNumber` | Hotline |
| `home.header.ctaText` | Nút CTA header |
| `home.heroSlides.0.title` | Slide 1: tiêu đề |
| `home.heroSlides.0.subtitle` | Slide 1: phụ đề |
| `home.heroSlides.0.badge` | Slide 1: badge |
| `home.heroSlides.0.description` | Slide 1: mô tả |
| `home.heroSlides.0.buttonText` | Slide 1: nút bấm |
| `home.heroSlides.1.*` | Slide 2 (tương tự) |
| `home.heroSlides.2.*` | Slide 3 (tương tự) |
| `home.programs.badge` | Section programs: badge |
| `home.programs.title` | Section programs: tiêu đề |
| `home.programs.description` | Section programs: mô tả |
| `home.differentiators.badge` | Section khác biệt: badge |
| `home.differentiators.title` | Section khác biệt: tiêu đề |
| `home.differentiators.description` | Section khác biệt: mô tả |
| `home.differentiators.items` | Array 3 items (giữ JSON) |
| `home.services.badge` | Section dịch vụ: badge |
| `home.services.title` | Section dịch vụ: tiêu đề |
| `home.services.featured.title` | Card lớn: tiêu đề |
| `home.services.featured.description` | Card lớn: mô tả |
| `home.services.profileSupport.title` | Card 2: tiêu đề |
| `home.services.profileSupport.description` | Card 2: mô tả |
| `home.services.roadmap.title` | Card 3: tiêu đề |
| `home.services.roadmap.description` | Card 3: mô tả |
| `home.services.network.title` | Card 4: tiêu đề |
| `home.services.network.description` | Card 4: mô tả |
| `home.activities.badge` | Section hoạt động: badge |
| `home.activities.title` | Section hoạt động: tiêu đề |
| `home.activities.description` | Section hoạt động: mô tả |
| `home.activities.linkUrl` | Link hoạt động |
| `home.testimonials.badge` | Section cảm nghĩ: badge |
| `home.testimonials.title` | Section cảm nghĩ: tiêu đề |
| `home.testimonials.description` | Section cảm nghĩ: mô tả |
| `home.testimonials.featureTitle` | Ảnh feature: tiêu đề |
| `home.testimonials.featureCaption` | Ảnh feature: phụ đề |
| `home.process.badge` | Section lộ trình: badge |
| `home.process.title` | Section lộ trình: tiêu đề |
| `home.process.description` | Section lộ trình: mô tả |
| `home.process.steps` | Array 10 bước (giữ JSON) |
| `home.trust.items` | Array 4 số liệu (giữ JSON) |
| `home.partners.badge` | Section đối tác: badge |
| `home.partners.title` | Section đối tác: tiêu đề |
| `home.partners.description` | Section đối tác: mô tả |
| `home.news.badge` | Section tin tức: badge |
| `home.news.title` | Section tin tức: tiêu đề |
| `home.news.description` | Section tin tức: mô tả |
| `home.news.viewAllText` | Nút "Xem toàn bộ" |
| `home.news.detailText` | Link "Chi tiết" |
| `home.bottomCta.title` | CTA cuối: tiêu đề |
| `home.bottomCta.description` | CTA cuối: mô tả |
| `home.bottomCta.buttonText` | CTA cuối: nút bấm |
| `home.bottomCta.buttonLink` | CTA cuối: link |
| `home.contact.badge` | Section liên hệ: badge |
| `home.contact.title` | Section liên hệ: tiêu đề |
| `home.contact.description` | Section liên hệ: mô tả |
| `home.contact.highlights` | Array 3 highlights (giữ JSON) |
| `home.contact.privacyPrefix` | Text chính sách (prefix) |
| `home.contact.privacyLinkText` | Text link chính sách |
| `home.contact.privacyLinkHref` | URL chính sách |
| `home.consultationForm.*` | Tất cả label/placeholder/form text |
| `home.activityItems` | Array 8 activity cards (giữ JSON) |
| `home.testimonialsItems` | Array 3 testimonials (giữ JSON) |
| `home.footer.*` | Tất cả nội dung footer |

> **Lưu ý:** Những key chứa array/object phức tạp (`items`, `steps`, `activities`, `testimonials`, `highlights`) phải giữ nguyên format **JSON string** trong cột `value`.

## 3.3 Mẫu CSV import sẵn

Dùng file **`docs/sheet-content-template.csv`** — đã export sẵn 168 dòng theo định dạng phẳng, có thể import thẳng vào Google Sheets.

---

## 4) Dữ liệu form gửi sang Apps Script

Khi user bấm **Gửi yêu cầu**, payload forward sang `GOOGLE_SUBMIT_WEBHOOK_URL` gồm:

```json
{
  "name": "...",
  "phone": "...",
  "email": "...",
  "education": "...",
  "major": "...",
  "message": "...",
  "submittedAt": "2026-03-24T10:00:00.000Z",
  "source": "sige-homepage"
}
```

## 4.1 Validate đang áp dụng ở server (`consultationSchema`)
- `name`: bắt buộc, 1-120 ký tự
- `phone`: bắt buộc, regex `^[0-9+\-\s().]{8,20}$`
- `email`: bắt buộc, đúng format email, tối đa 120
- `education`: bắt buộc
- `major`: optional, tối đa 200
- `message`: optional, tối đa 1000

## 4.2 Header gửi sang Apps Script
- `Content-Type: application/json`
- `Accept: application/json`
- `x-sige-secret: <GOOGLE_APPS_SCRIPT_SECRET>` (chỉ gửi khi có cấu hình)

---

## 5) Gợi ý cấu trúc sheet nhận lead

Tạo sheet (ví dụ: `leads`) với header:

1. `createdAt`
2. `submittedAt`
3. `source`
4. `name`
5. `phone`
6. `email`
7. `education`
8. `major`
9. `message`

Dùng file **`docs/sheet-leads-template.csv`** để import header + 1 dòng mẫu.

---

## 6) Mẫu Apps Script tối thiểu (tham khảo)

```javascript
const CONTENT_SHEET = 'content';
const LEADS_SHEET = 'leads';

function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(CONTENT_SHEET);
  if (!sheet) return jsonError('Sheet content not found');

  const rows = sheet.getDataRange().getValues();
  const data = {};
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0]) data[String(rows[i][0]).trim()] = rows[i][1];
  }
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse((e.postData && e.postData.contents) || '{}');
  } catch (_) {
    return jsonError('Invalid JSON');
  }

  const required = ['name', 'phone', 'email', 'education'];
  for (const f of required) {
    if (!payload[f] || !String(payload[f]).trim()) {
      return jsonError('Missing field: ' + f);
    }
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(LEADS_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(LEADS_SHEET);
    sheet.appendRow(['createdAt','submittedAt','source','name','phone','email','education','major','message']);
  }

  sheet.appendRow([
    new Date(), payload.submittedAt || '', payload.source || 'sige-homepage',
    payload.name || '', payload.phone || '', payload.email || '',
    payload.education || '', payload.major || '', payload.message || ''
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonError(msg) {
  return ContentService.createTextOutput(JSON.stringify({ ok: false, message: msg }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 7) Checklist triển khai thực tế

1. Import `docs/sheet-content-template.csv` vào sheet `content`
2. Import `docs/sheet-leads-template.csv` vào sheet `leads`
3. Deploy Apps Script Web App (quyền: **Anyone**)
4. Set đủ 3 env vars ở local + Vercel
5. Restart dev server:
   ```bash
   pnpm dev
   ```
6. Test content: sửa 1 key trong sheet → refresh website
7. Test form: submit → kiểm tra sheet `leads`
8. Build check:
   ```bash
   pnpm build
   ```

---

## 8) Lỗi thường gặp

### 8.1 Attempted to execute myFunction, but it was deleted
Nguyên nhân: Apps Script đang chạy hàm mặc định `myFunction` nhưng đã bị xóa.

Cách xử lý:
1. Save script.
2. Chọn đúng function ở dropdown cạnh **Run**.
3. Vào **Triggers** xóa trigger cũ trỏ tới `myFunction`.
4. Deploy lại với **New version**.

### 8.2 Endpoint trả redirect đăng nhập (302)
- Dùng URL public: `https://script.google.com/macros/s/.../exec`

### 8.3 Nội dung không đổi ngay
- Cache server: **5 phút** (`revalidate: 300`)

### 8.4 Form báo lỗi kết nối
- Kiểm tra `GOOGLE_SUBMIT_WEBHOOK_URL`
- Kiểm tra Apps Script nhận POST và ghi sheet thành công

### 8.5 `POST /api/consultation` trả 500 `Thiếu cấu hình submit endpoint`
Thiếu env `GOOGLE_SUBMIT_WEBHOOK_URL`. Thêm vào `.env.local`:
```env
GOOGLE_SUBMIT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
```

### 8.6 `next dev` lỗi lock `.next/dev/lock`
Instance khác đang chạy. Tắt đi hoặc dùng port khác.

### 8.7 Apps Script lỗi `Cannot read properties of null (reading 'appendRow')`
Sheet `leads` chưa tồn tại. Xem mục **6)** để tạo đúng tên tab.

### 8.8 Bấm submit thấy thành công nhưng sheet không có dữ liệu
Apps Script trả HTML lỗi thay vì JSON `{ ok: true }`. Kiểm tra:
```bash
curl -X POST "YOUR_WEBAPP_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"0912345678","email":"test@example.com","education":"thpt"}'
```
Kỳ vọng: `Content-Type: application/json` + body có `"ok": true`.

---

## 9) File liên quan trong codebase

- `lib/home-content.ts` — cấu trúc dữ liệu chuẩn
- `lib/google-sheet-content.ts` — parser key phẳng
- `components/QuickConsultationForm.tsx`
- `lib/consultation-schema.ts`
- `app/api/consultation/route.ts`
- `app/page.tsx`

