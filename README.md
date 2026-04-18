# SIGE — Website tuyển sinh du học Đài Loan

Landing page tiếng Việt cho **SIGE** (Viện Khoa Học Giáo Dục Toàn Cầu) — tổ chức hỗ trợ du học sinh Việt Nam tại Đài Loan.

## Stack

- **Next.js** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix UI)
- **Google Sheets + Apps Script** — quản lý nội dung & nhận form đăng ký
- Deploy trên **Vercel**

## Cài đặt

```bash
pnpm install
pnpm dev
```

## Biến môi trường

Tạo file `.env.local`:

```env
GOOGLE_CONTENT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
GOOGLE_SUBMIT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
GOOGLE_APPS_SCRIPT_SECRET=your_secret
```

> Có thể dùng **cùng 1 URL Apps Script** cho cả content (GET) và form submit (POST).

## Lệnh thường dùng

| Lệnh | Mô tả |
|---|---|
| `pnpm dev` | Chạy dev server |
| `pnpm build` | Build production |
| `pnpm lint` | Kiểm tra lint |

## Cấu trúc thư mục

```
app/
  page.tsx              # Trang chủ (Server Component)
  layout.tsx            # Root layout + PromoModal
  api/consultation/     # POST endpoint nhận form đăng ký
  globals.css           # CSS variables (oklch)

components/
  ActivitySlider.tsx
  ContactBubbles.tsx
  PartnerSchools.tsx
  ProcessTimeline.tsx
  PromoModal.tsx
  QuickConsultationForm.tsx
  ui/                   # shadcn/ui primitives

lib/
  home-content.ts           # DEFAULT_HOME_CONTENT (fallback)
  google-sheet-content.ts   # Fetch nội dung từ Google Sheets
  consultation-schema.ts    # Zod validation cho form
  utils.ts                  # cn() helper

docs/
  huong-dan-google-sheet.md     # Hướng dẫn vận hành (tiếng Việt)
  sheet-content-template.csv    # Template import nội dung
  sheet-leads-template.csv      # Template import leads
```

## Quản lý nội dung qua Google Sheets

Toàn bộ nội dung trang chủ (tiêu đề, mô tả, menu, CTA, ...) có thể chỉnh sửa qua Google Sheets mà không cần deploy lại.

**Cách hoạt động:**
1. Nội dung lưu trong sheet `content` theo dạng key-value phẳng (dot-notation)
2. Server fetch về mỗi request (`cache: "no-store"`) → thay đổi có hiệu lực ngay
3. Nếu Apps Script lỗi → tự động fallback về nội dung mặc định trong `lib/home-content.ts`

**Ví dụ:**
| key | value |
|---|---|
| `home.header.nav.about` | Giới thiệu |
| `home.heroSlides.0.title` | Du học Đài Loan 2026 |

Xem đầy đủ tại `docs/huong-dan-google-sheet.md`.

## Form đăng ký tư vấn

Form gửi `POST /api/consultation` → validate bằng Zod → forward sang `GOOGLE_SUBMIT_WEBHOOK_URL` → ghi vào sheet `leads`.

**Fields bắt buộc:** `name`, `phone`, `email`, `education`

## Hướng dẫn triển khai trên Vercel

1. Import `docs/sheet-content-template.csv` vào sheet `content`
2. Import `docs/sheet-leads-template.csv` vào sheet `leads`
3. Deploy Apps Script Web App (quyền: **Anyone**)
4. Thêm 3 env vars vào Vercel
5. Push lên `main` → Vercel tự build & deploy

Xem chi tiết trong `docs/huong-dan-google-sheet.md`.

## Tự build trên server (VPS / máy chủ riêng)

### Yêu cầu

- **Node.js** >= 18
- **pnpm** (`npm install -g pnpm`)

### Các bước

**1. Clone và cài dependencies**

```bash
git clone <repo-url> sige
cd sige
pnpm install
```

**2. Tạo file biến môi trường**

```bash
cp .env.local.example .env.local   # hoặc tạo tay
```

Nội dung `.env.local`:

```env
GOOGLE_CONTENT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
GOOGLE_SUBMIT_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
GOOGLE_APPS_SCRIPT_SECRET=your_secret
```

**3. Build**

```bash
pnpm build
```

**4. Chạy production server**

```bash
pnpm start
# Mặc định chạy trên port 3000
# Đổi port: PORT=8080 pnpm start
```

### Dùng PM2 (khuyến nghị — tự restart khi crash)

```bash
npm install -g pm2

pm2 start "pnpm start" --name sige
pm2 save
pm2 startup   # tự chạy khi reboot server
```

Các lệnh quản lý:

```bash
pm2 status          # xem trạng thái
pm2 logs sige       # xem log
pm2 restart sige    # restart
pm2 stop sige       # dừng
```

### Cấu hình Nginx (reverse proxy)

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Sau đó reload nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### Cập nhật code mới

```bash
git pull
pnpm install
pnpm build
pm2 restart sige
```
