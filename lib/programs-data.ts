export interface SubProgram {
  name: string
  whyChoose: string
  programInfo: string[]
  fieldsOfStudy: string[]
  admissionRequirements: string[]
  specialRules?: string[]
  scholarships: string[]
  tuitionAndFees: string[]
  notes?: string[]
  interviewSchedule?: { field: string; round1: string; round2: string }[]
  incomeTable?: { year: string; source: string; calculation: string; estimated: string }[]
  careerPathway?: { year: string; title: string; description: string }[]
  partnerInfo?: { name: string; description: string; highlights: string[] }
  documentsRequired?: string[]
}

export interface AdmissionsInfo {
  universityIntro: string
  notablePoints?: string[]
  subPrograms: SubProgram[]
}

export interface Program {
  slug: string
  name: string
  shortName: string
  country: string
  heroImage: string
  thumbnailImage: string
  brochurePages: string[]
  summary: string
  fieldsOfStudy: string[]
  duration: string
  requirements: string
  scholarships: string
  programTypes: string[]
  highlights: string[]
  relatedSlugs: string[]
  admissionsInfo: AdmissionsInfo
}

export const programs: Program[] = [
  {
    slug: "minh-truyen-mcu",
    name: "Đại học Minh Truyền (MCU)",
    shortName: "MCU",
    country: "Đài Loan",
    heroImage: "/university-photos/mcu-campus.jpg",
    thumbnailImage: "/university-photos/mcu-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p4_19.png",
      "/extracted_images/img_p5_24.png",
      "/extracted_images/img_p6_29.png",
      "/extracted_images/img_p7_34.png",
    ],
    summary:
      "Đại học Minh Truyền (Ming Chuan University) là trường đại học tư thục hàng đầu tại Đài Loan với các chương trình giảng dạy bằng tiếng Anh. Trường có nhiều cơ sở tại Đài Bắc và Đào Viên, cung cấp môi trường học tập quốc tế đa dạng.",
    fieldsOfStudy: ["Quản trị kinh doanh", "Công nghệ thông tin", "Truyền thông", "Du lịch"],
    duration: "4 năm (hệ đại học)",
    requirements: "Tốt nghiệp THPT, hồ sơ năng lực",
    scholarships: "Học bổng lên đến 100% học phí",
    programTypes: ["Hệ đại học", "Hệ thạc sĩ"],
    highlights: [
      "Chương trình giảng dạy bằng tiếng Anh",
      "Cơ sở vật chất hiện đại tại Đài Bắc & Đào Viên",
      "Cơ hội thực tập tại doanh nghiệp lớn",
      "Học bổng hấp dẫn cho sinh viên quốc tế",
    ],
    relatedSlugs: ["trung-tin-ctbc", "ky-nam-ncnu"],
    admissionsInfo: {
      universityIntro: "Trường Đại học Minh Truyền là trường tổng hợp cao cấp có bề dày lịch sử tại Đài Loan: với 05 cơ sở trường (Đài Bắc, Cơ Hà, Kim Môn, Đào Viên và 01 cơ sở tại Mỹ). 12 Học viện, 42 Khoa ngành, khoảng 20.000 sinh viên đến từ hơn 100 quốc gia và vùng lãnh thổ, hơn 400 trường liên kết trên thế giới, là cánh cửa giúp sinh viên bước sang những nước tiên tiến như Mỹ, Anh, Úc, Canada... rất dễ dàng với chi phí thấp. Trường Đại học Minh Truyền là trường duy nhất tại Đài Loan có cơ sở trường bên Mỹ nên chương trình liên kết đào tạo 2+2 (4 năm tốt nghiệp 2 Bằng Đại học của hai trường, hai đất nước, 1+1 (2 năm tốt nghiệp 2 Thạc sỹ) của hai trường, trang bị sinh viên là thế mạnh của Minh Truyền.",
      notablePoints: [
        "Tập đoàn Liteeon là tập đoàn lọt vào Top 50 đáng làm việc tại Châu Á, Top 100 đáng làm việc trên Thế giới",
        "Tập đoàn ASE là tập đoàn lớn nhất thế giới về đóng gói điện tử bán dẫn với 29 công ty con, 65.000 nhân viên",
        "Hàng năm thu hút gần 1000 sinh viên từ Việt Nam sang Minh Truyền học tập với kinh phí rất ít",
      ],
      subPrograms: [
        {
          name: "Chương trình 1+4 kỳ tháng 9-2026",
          whyChoose: "Đại học Minh Truyền (MCU) là trường tiên phong tại Châu Á đạt chuẩn kiểm định Hoa Kỳ và lọt top bảng xếp hạng THE. Nổi bật với môi trường quốc tế năng động và phổ cập giáo dục AI, MCU sở hữu Khoa Quản lý chuẩn AACSB (Top 6% thế giới). Với vị trí đắc địa và học bổng hấp dẫn, đây là lựa chọn hàng đầu cho các ngành: Truyền thông, Thiết kế, QTKD, CNTT và Du lịch Khách sạn.",
          programInfo: [
            "Năm đầu tiên học ngôn ngữ tại cơ sở Đào Viên, sau đó tiếp tục học 4 năm đại học chính quy tại cơ sở Đào Viên hoặc Đài Bắc",
            "Hết năm nhất ngôn ngữ sinh viên cần đạt chứng chỉ TOCFL từ A2 trở lên",
            "Không yêu cầu chứng chỉ tiếng khi báo danh hồ sơ (Nếu có thì tỉ lệ đỗ hồ sơ cao hơn)",
          ],
          fieldsOfStudy: [
            "Khoa Công nghệ thông tin",
            "Khoa Công nghệ sinh học",
            "Khoa Quy hoạch đô thị và phòng chống thiên tai",
            "Khoa Quảng cáo và chiến lược tiếp thị",
            "Khoa Quản lý du lịch",
            "Khoa Quản lý nhà hàng - khách sạn",
            "Khoa Quản lý dịch vụ vui chơi giải trí",
          ],
          admissionRequirements: [
            "Học sinh tốt nghiệp THPT từ 18 đến 22 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
            "Chưa từng đến làm việc tại Đài Loan",
          ],
          scholarships: [
            "Miễn 100% học phí học ngôn ngữ",
          ],
          tuitionAndFees: [
            "Học phí và tạp phí KTX: 46.000 - 70.000 TWD/kỳ",
          ],
        },
        {
          name: "Chương trình tự túc tiếng Anh kỳ tháng 9-2026",
          whyChoose: "Đại học Minh Truyền (MCU) là trường tiên phong tại Châu Á đạt chuẩn kiểm định Hoa Kỳ và lọt top bảng xếp hạng THE. Nổi bật với môi trường quốc tế năng động và phổ cập giáo dục AI, MCU sở hữu Khoa Quản lý chuẩn AACSB (Top 6% thế giới). Với vị trí đắc địa và học bổng hấp dẫn, đây là lựa chọn hàng đầu cho các ngành: Truyền thông, Thiết kế, QTKD, CNTT và Du lịch Khách sạn.",
          programInfo: [
            "Chương trình học sử dụng 100% tiếng Anh trong quá trình học",
          ],
          fieldsOfStudy: [
            "Khoa Kinh doanh và thương mại quốc tế",
            "Khoa Báo chí và truyền thông đại chúng",
            "Khoa Quản lý thời trang và đổi mới",
            "Khoa Kinh doanh quốc tế",
            "Khoa Quản trị kinh doanh",
            "Khoa Quản lý và ứng dụng công nghệ thông tin",
            "Khoa Du lịch và lữ hành",
            "Khoa Điện tử bán dẫn",
            "Khoa Ứng dụng tiếng Anh",
            "Khoa Quan hệ quốc tế và ngoại giao",
            "Khoa Các vấn đề quốc tế",
          ],
          admissionRequirements: [
            "Học sinh tốt nghiệp THPT từ 18 đến 22 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
            "Chưa từng đến làm việc tại Đài Loan",
          ],
          specialRules: [
            "Chương trình học sử dụng 100% tiếng Anh trong quá trình học",
          ],
          scholarships: [
            "Học bổng cấp theo chứng chỉ thi IELTS:",
            "IELTS 6.0 được 20.000 TWD",
            "IELTS 6.5 được 30.000 TWD",
            "IELTS 7.0 được 40.000 TWD",
            "IELTS 7.5 được 50.000 TWD",
          ],
          tuitionAndFees: [
            "Học phí: 46.000 - 56.000 TWD/kỳ",
          ],
        },
        {
          name: "Chương trình ngôn ngữ",
          whyChoose: "Đại học Minh Truyền cung cấp chương trình học ngôn ngữ tại hai cơ sở Kim Môn và Đài Bắc, phù hợp cho nhiều đối tượng sinh viên.",
          programInfo: [
            "Cơ sở Kim Môn: Học phí 18.000 TWD/kỳ 3 tháng, tạp phí + KTX 5.500 TWD/kỳ 3 tháng. Sau 2 kỳ có thể đóng học phí theo tháng với mức 6.000 TWD, tạp phí và KTX là 5.000 TWD/kỳ 3 tháng",
            "Cơ sở Đài Bắc: Học phí 28.000 TWD/kỳ 3 tháng, tạp phí + KTX 15.000 TWD/kỳ 3 tháng (bao gồm điện nước). Phí cọc KTX: 7.000 TWD. Kỳ tuyển sinh: Tháng 3 - 6 - 9 - 12",
            "Học đủ 6 tháng miễn lệ phí thi thứ 2 lần và thi chính thức 1 lần (kỳ tháng 4 và tháng 10)",
            "Kỳ tuyển sinh: Mỗi tháng đủ tối thiểu 15 sinh viên có thể mở lớp",
            "Tiền ăn: 3.000 TWD/1 tháng (không gồm bữa sáng và ngày T7, CN)",
          ],
          fieldsOfStudy: [
            "Tiếng Trung Quốc",
          ],
          admissionRequirements: [
            "Tốt nghiệp THPT, GPA mỗi kì từ 6.5 trở lên. Độ tuổi từ 18-28",
            "Tốt nghiệp Đại học trở lên: Dưới 40 tuổi",
            "Xác nhận tài chính từ 50 triệu VND trở lên, còn hạn trên 9 tháng",
            "Chứng chỉ tiếng Trung TOCFL A1 trở lên",
          ],
          scholarships: [],
          tuitionAndFees: [
            "Cơ sở Kim Môn: 18.000 TWD + 5.500 TWD (KTX)/kỳ 3 tháng",
            "Cơ sở Đài Bắc: 28.000 TWD + 15.000 TWD (KTX)/kỳ 3 tháng",
          ],
          notes: [
            "Lớp chuyên ban Kim Môn được đào tạo miễn phí đào tạo các nhóm kỹ năng: Quản lý khách sạn, Làm đẹp, Logistics",
            "Có thể rút ngắn thời gian học xuống 3 tháng hoặc kéo dài đến 2 năm chương trình ngôn ngữ tới khi đạt A2 hoặc B1 tùy theo trường yêu cầu sau đó vào học đại học",
          ],
        },
      ],
    },
  },
  {
    slug: "ky-nam-ncnu",
    name: "Đại học Quốc lập Kỵ Nam (NCNU)",
    shortName: "NCNU",
    country: "Đài Loan",
    heroImage: "/university-photos/ncnu-campus.jpg",
    thumbnailImage: "/university-photos/ncnu-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p8_39.png",
      "/extracted_images/img_p9_44.png",
      "/extracted_images/img_p10_49.png",
    ],
    summary:
      "Đại học Quốc lập Kỵ Nam (National Chi Nan University) là trường đại học công lập uy tín tọa lạc tại Nam Đầu, Đài Loan. Trường nổi tiếng với các chương trình nghiên cứu chất lượng cao và học phí hợp lý dành cho sinh viên quốc tế.",
    fieldsOfStudy: ["Khoa học xã hội", "Quản trị", "Công nghệ", "Giáo dục"],
    duration: "4 năm (hệ đại học)",
    requirements: "Tốt nghiệp THPT, chứng chỉ ngôn ngữ",
    scholarships: "Học bổng chính phủ và học bổng trường",
    programTypes: ["Hệ đại học", "Hệ thạc sĩ"],
    highlights: [
      "Trường công lập — học phí thấp",
      "Môi trường thiên nhiên yên tĩnh, lý tưởng cho học tập",
      "Chương trình nghiên cứu mạnh",
      "Hỗ trợ sinh viên quốc tế chu đáo",
    ],
    relatedSlugs: ["minh-truyen-mcu", "linh-dong-ltu"],
    admissionsInfo: {
      universityIntro: "Trường Đại học Quốc gia Kỵ Nam nằm trong khu du lịch quốc gia Đầm Nhật Nguyệt - Đài Trung Đài Loan. Đây là ngôi trường có chất lượng đào tạo, bồi dưỡng nguồn nhân lực chất lượng cao mang tính chuẩn hoá Quốc tế. Trường có 20 đơn vị trực thuộc với gần 700 cán bộ giảng viên phục vụ cho công tác giảng dạy đào tạo, quản lý và nghiên cứu. Trung bình mỗi năm trường có 6.500 sinh viên theo học với 20 chương trình đào tạo bậc Đại học, 26 chương trình đào tạo bậc Thạc sỹ và 15 chương trình đào tạo bậc Tiến sỹ.",
      notablePoints: [
        "Với 150 ha trường lọt vào Top 44 ngôi trường xanh đáng đến tập trên Thế giới",
        "Là trường đại học duy nhất tại Đài Loan có phòng khám thuộc bệnh viện TOP 15 trong 300 bệnh viện lớn nhất Thế giới",
        "Là trường duy nhất công lập Đài Loan có nguồn học bổng lớn cho sinh viên Quốc tế",
        "Kỳ nhập học năm 2026 trường tuyển 56 xuất học bổng cho bậc đại học: miễn 03 năm học phí với các bạn sinh viên 1+4, 200 xuất học bổng toàn phần cho chương trình đào tạo Thạc sỹ",
      ],
      subPrograms: [
        {
          name: "Chương trình 1+4 kỳ tháng 9-2026",
          whyChoose: "Trường Đại học Quốc lập Kỵ Nam là ngôi trường danh giá hàng đầu Đài Loan, vinh dự lọt Top 50 thế giới về phát triển bền vững (GreenMetric). Tọa lạc ngay trung tâm khu du lịch Quốc gia Đầm Nhật Nguyệt, trường sở hữu khuôn viên rộng 150 ha với đời sống tiện nghi hiện đại bậc nhất. Đặc biệt, đây là trường đại học duy nhất có phòng khám trực thuộc bệnh viện Top 15/300 thế giới ngay trong khuôn viên, đảm bảo chăm sóc sức khỏe tối đa cho sinh viên. Kỵ Nam chính là lựa chọn lý tưởng cho các bạn muốn tập trung học tập với chi phí tối ưu nhất Đài Loan.",
          programInfo: [
            "Năm 1: Học tiếng Trung",
            "Năm 2 tới Năm 5: Học chuyên ngành",
            "Trước khi kết thúc năm 1: TOCFL A2+",
            "Trước khi kết thúc năm 2: TOCFL B1+",
          ],
          fieldsOfStudy: [
            "Khoa Du lịch, Giải trí và Quản lý Nhà hàng Khách sạn",
            "Khoa Khoa học Máy tính và Kỹ thuật Thông tin",
            "Khoa Hóa ứng dụng",
            "Khoa Kỹ thuật Xây dựng",
            "Khoa Kỹ thuật Điện",
            "Khoa Quản lý Thông tin",
          ],
          admissionRequirements: [
            "Học sinh tốt nghiệp THPT từ 18 đến 22 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
            "Chưa từng đến làm việc tại Đài Loan",
          ],
          specialRules: [
            "Năm 1: Học tiếng Trung",
            "Năm 2 tới Năm 5: Học chuyên ngành",
            "Trước khi kết thúc năm 1: TOCFL A2+",
            "Trước khi kết thúc năm 2: TOCFL B1+",
          ],
          scholarships: [
            "Năm 1: Miễn hoàn toàn học phí",
            "Năm 2: Miễn hoàn toàn học phí nếu đạt TOCFL A2+",
            "Năm 3: Miễn hoàn toàn học phí nếu đạt TOCFL B1+",
            "Năm 4, năm 5: Điểm GPA các môn trên 60 điểm được miễn học phí",
          ],
          tuitionAndFees: [
            "Học phí: 46.091 đài tệ/kỳ",
            "Ký túc xá: 8.800 đài tệ/kỳ",
            "Tiền cọc KTX: 2.000 đài tệ",
          ],
        },
        {
          name: "Chương trình Thạc sĩ kỳ tháng 9-2026",
          whyChoose: "Trường Đại học Quốc lập Kỵ Nam là ngôi trường danh giá hàng đầu Đài Loan, vinh dự lọt Top 50 thế giới về phát triển bền vững (GreenMetric). Kỵ Nam chính là lựa chọn lý tưởng cho các bạn muốn tập trung học tập với chi phí tối ưu nhất Đài Loan, cùng các khoa đào tạo mũi nhọn như: Du lịch, Khoa học Máy tính, Quản lý Thông tin,...",
          programInfo: [
            "Thời gian đào tạo: 2 năm",
            "Đối với một số ngành: học 100% tiếng Anh",
          ],
          fieldsOfStudy: [
            "Học viện Nhân văn (11 khoa)",
            "Học viện Quản lý (9 khoa)",
            "Học viện Khoa học công nghệ (6 khoa)",
            "Học viện Giáo dục (5 khoa)",
            "Khoa Quản lý Kinh doanh và Ứng dụng Công nghệ Thông tin Đổi mới (học 100% tiếng Anh)",
          ],
          admissionRequirements: [
            "Sinh viên đã tốt nghiệp Đại học lực Khá giỏi trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
            "Chương trình học bằng tiếng Anh: IELTS 7.0 trở lên",
            "Chương trình học bằng tiếng Trung: TOCFL B1 trở lên",
          ],
          scholarships: [
            "Miễn 100% học phí 2 năm học",
            "Trợ cấp 6.600 TWD/tháng tiền tiêu dùng",
          ],
          tuitionAndFees: [
            "Học viện Nhân văn và Giáo dục: 25.533 TWD/kỳ",
            "Học viện Quản lý: 27.776 TWD/kỳ",
            "Học viện Khoa học Công nghệ: 33.494 TWD/kỳ",
            "Khoa Quản lý Thông tin: 33.494 TWD/kỳ",
            "KTX: 8.800 TWD/kỳ",
          ],
        },
      ],
    },
  },
  {
    slug: "trung-tin-ctbc",
    name: "Đại học Công nghệ Trung Tín (CTBC)",
    shortName: "CTBC",
    country: "Đài Loan",
    heroImage: "/university-photos/ctbc-campus.jpg",
    thumbnailImage: "/university-photos/ctbc-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p11_54.png",
      "/extracted_images/img_p12_59.png",
      "/extracted_images/img_p13_64.png",
    ],
    summary:
      "Đại học Công nghệ Trung Tín (CTBC Business School) chuyên đào tạo các ngành tài chính, quản trị kinh doanh với sự hỗ trợ từ tập đoàn CTBC Financial Holding. Sinh viên được tiếp cận thực tế ngành tài chính ngay trong quá trình học.",
    fieldsOfStudy: ["Tài chính", "Quản trị kinh doanh", "Kinh tế"],
    duration: "4 năm (hệ đại học)",
    requirements: "Tốt nghiệp THPT, hồ sơ năng lực",
    scholarships: "Học bổng doanh nghiệp CTBC",
    programTypes: ["Hệ đại học", "Hệ thạc sĩ"],
    highlights: [
      "Được hậu thuẫn bởi tập đoàn tài chính CTBC",
      "Chương trình thực tập hưởng lương",
      "Đào tạo chuyên sâu tài chính — kinh doanh",
      "Cơ hội việc làm cao sau tốt nghiệp",
    ],
    relatedSlugs: ["minh-truyen-mcu", "van-tao-wenzao"],
    admissionsInfo: {
      universityIntro: "Trường Đại học Công nghệ Trung Tín trực thuộc ngân hàng Trung Tín là ngân hàng cho vay doanh nghiệp lớn nhất của Đài Loan. Thế mạnh của Trường: với hàng ngàn công ty khách hàng của ngân hàng tham gia tài trợ cho sinh viên và tạo cơ hội vừa học vừa làm và công việc làm sau khi tốt nghiệp cho sinh viên của trường. Trường đặt tại thành phố Đài Nam là thành phố lớn thứ 4 của Đài Loan, cách trung tâm công nghệ cao trí tuệ nhân tạo và điện tử bán dẫn trong điểm Quốc gia 02 km. Trường chuyên về Công nghệ, Kỹ thuật, Sức khỏe, Giải trí.",
      notablePoints: [
        "Chủ trọng giáo dục sáng tạo: trường đã có thành tích đáng kể trong việc thúc đẩy giáo dục sáng tạo",
        "Định hướng phát triển đa dạng: mở rộng các ngành học đa dạng gồm các lĩnh vực Thể thao, Thiết kế Truyền thông Kỹ thuật số, Du lịch",
        "Tăng cường hợp tác với doanh nghiệp: Trường chú trọng vào việc hợp tác với các doanh nghiệp, giúp nâng cao khả năng thực hành và có hồi việc làm cho sinh viên sau khi tốt nghiệp",
      ],
      subPrograms: [
        {
          name: "Chương trình đào tạo 1+4 kỳ tháng 9-2026",
          whyChoose: "Đại học Khoa học Kỹ thuật Trung Tín (CTBC University of Technology), tiền thân là Đại học Viễn Đông, tọa lạc tại thành phố Đài Nam ngay sát \"thung lũng silicon\" Khu Công viên Khoa học Nam Đài Loan. Sau khi chính thức được Tập đoàn Tài chính CTBC đầu tư và đổi tên vào năm 2024, trường đã tái cấu trúc mạnh mẽ với trọng tâm đào tạo là các ngành công nghệ mới nhọn như Công nghệ Bán dẫn và Trí tuệ nhân tạo (AI). Sự kết hợp giữa vị trí địa lý đắc địa và nguồn lực tài chính hùng hậu từ tập đoàn mẹ giúp nhà trường cam kết mang đến môi trường học tập hiện đại cùng cơ hội việc làm rộng mở cho sinh viên tại các doanh nghiệp công nghệ cao hàng đầu khu vực.",
          programInfo: [
            "Năm đầu tiên học ngôn ngữ tại trường. Khi kết thúc năm nhất sinh viên cần đạt chứng chỉ TOCFL A2 nếu không sẽ bị thôi học",
            "Trước năm 2 ngôn ngữ sinh viên cần đạt chứng chỉ TOCFL từ B1 trở lên",
            "Không yêu cầu chứng chỉ tiếng khi báo danh hồ sơ (Nếu có thì tỉ lệ đỗ hồ sơ cao hơn)",
          ],
          fieldsOfStudy: [
            "Cơ khí",
            "Điện tử bán dẫn",
            "Dịch vụ nhà hàng và chăm sóc sức khỏe",
            "Điện lạnh",
          ],
          admissionRequirements: [
            "Học sinh tốt nghiệp THPT từ 18 đến 22 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
            "Chưa từng đến làm việc tại Đài Loan",
          ],
          scholarships: [
            "Miễn học phí và tạp phí kỳ đầu năm nhất",
            "Kết thúc năm nhất, thi đạt TOCFL A2 sẽ được xét cấp học bổng 30.000 đài tệ",
            "Miễn 100% học phí kỳ đầu năm hai",
            "Kỳ hai của năm học thứ 2 được giảm học phí chỉ còn 27.845 đài tệ",
          ],
          tuitionAndFees: [
            "Học phí và các khoản phí khác: 58.000 - 65.000 TWD/học kỳ",
          ],
        },
        {
          name: "Chương trình liên thông, văn bằng 2 kỳ tháng 9-2026",
          whyChoose: "Đây là chương trình dành cho sinh viên quốc tế đã học 2 năm đại học hoặc tốt nghiệp cao đẳng tại Việt Nam có mong muốn học tiếp 2 năm tại Đài Loan và nhận bằng cử nhân tại Đài Loan.",
          programInfo: [
            "Lĩnh vực chuyên ngành: Bán dẫn, lớp Chuyên ban Ứng dụng sản xuất, chế tạo thông minh Bán dẫn và được đào tạo bằng tiếng Trung phổ thể",
            "Được doanh nghiệp hỗ trợ, trợ cấp trong quá trình học tập, thực tập và làm việc. Doanh nghiệp tài trợ: Công ty Cổ phần ChiFF Technology Inc.",
            "Được hỗ trợ chi phí vé máy bay 1 chiều Việt Nam - Đài Loan (Xuất trình biên nhận để được chuyển hoàn toàn): Tối đa 9.000 TWD",
            "Được hỗ trợ chi phí hành chính: Phí khám sức khỏe trước khi sang Đài Loan, phí Visa, phí xác nhận văn bằng (Xuất trình biên nhận để được thanh toán): Tối đa 10.000 TWD",
            "Được trợ cấp sinh hoạt: 10.000 TWD/tháng",
            "Được trợ cấp thực tập: 28.590 TWD/tháng",
          ],
          fieldsOfStudy: [
            "Bán dẫn",
            "Ứng dụng sản xuất, chế tạo thông minh",
          ],
          admissionRequirements: [
            "Sinh viên hoàn thành 2 năm Đại học hoặc Tốt nghiệp Cao đẳng tại Việt Nam",
            "Năng lực ngôn ngữ ban đầu: Tối thiểu TOCFL A2 (1 kỳ 2 năng lực thì điều đạt kết quả A2 trở lên). Kết thúc năm nhất tại Đài Loan sinh viên phải có tối thiểu TOCFL B1",
            "Sinh viên phải tham gia phỏng vấn của trường và doanh nghiệp khi ứng tuyển",
            "Một bộ hồ sơ du học Đài Loan theo quy định của văn phòng Đài Bắc",
          ],
          scholarships: [
            "Được hỗ trợ chi phí vé máy bay 1 chiều: Tối đa 9.000 TWD",
            "Được hỗ trợ chi phí hành chính: Tối đa 10.000 TWD",
            "Trợ cấp sinh hoạt: 10.000 TWD/tháng",
            "Trợ cấp thực tập: 28.590 TWD/tháng",
          ],
          tuitionAndFees: [
            "Học phí và các khoản phí khác: Khoảng 53.200 TWD/học kỳ",
            "Ký túc xá: 13.500 TWD/kỳ 6 tháng",
            "Bảo hiểm y tế: 6 tháng đầu 3.000 TWD, sau 6 tháng 826 TWD/tháng",
            "Giấy phép cư trú: 1.000 TWD/năm",
          ],
          notes: [
            "Lưu ý: Phí trợ cấp sinh hoạt và trợ cấp thực tập chỉ được nhận 1 trong 2 do nhà trường xét duyệt theo quy định",
            "Mức trợ cấp tối đa mỗi kỳ là 50.000 TWD (do Quỹ Phát triển Quốc gia của Hội đồng Hành chính cấp, tổng cộng 2 học kỳ)",
            "Miễn phí ký xá phòng tiêu chuẩn trong năm học đầu tiên",
          ],
        },
      ],
    },
  },
  {
    slug: "linh-dong-ltu",
    name: "Đại học KHCN Lĩnh Đông (LTU)",
    shortName: "LTU",
    country: "Đài Loan",
    heroImage: "/university-photos/ltu-campus.jpg",
    thumbnailImage: "/university-photos/ltu-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p14_69.png",
      "/extracted_images/img_p15_74.png",
      "/extracted_images/img_p16_79.png",
    ],
    summary:
      "Đại học Khoa học Công nghệ Lĩnh Đông (Ling Tung University) tọa lạc tại Đài Trung, chuyên đào tạo các ngành kỹ thuật và công nghệ ứng dụng. Trường có mối liên kết chặt chẽ với các doanh nghiệp trong khu công nghiệp Đài Trung.",
    fieldsOfStudy: ["Kỹ thuật", "Công nghệ thông tin", "Quản trị", "Thiết kế"],
    duration: "4 năm (hệ đại học)",
    requirements: "Tốt nghiệp THPT, hồ sơ năng lực",
    scholarships: "Học bổng trường dành cho sinh viên quốc tế",
    programTypes: ["Hệ đại học", "Hệ chuyên ban"],
    highlights: [
      "Vị trí thuận lợi tại Đài Trung",
      "Liên kết doanh nghiệp khu công nghiệp",
      "Chương trình vừa học vừa làm",
      "Chi phí sinh hoạt hợp lý",
    ],
    relatedSlugs: ["ky-nam-ncnu", "chinh-tu-cheng-shiu"],
    admissionsInfo: {
      universityIntro: "Trường Đại học Khoa học Công nghệ Lĩnh Đông tại thành phố Đài Trung, thành lập năm 1964. Đại học Lĩnh Đông có 5 trường con, 16 chương trình đại học, 13 chương trình đào tạo sau Đại học. Thế mạnh đào tạo của Đại học Lĩnh Đông là Quản lý kinh doanh, Thiết kế, Thời trang và Khoa học Thông tin. Các chương trình sau Đại học tập trung vào Quản lý Doanh nhân, Kinh doanh Quốc tế, Tài chính và Kinh tế, Thiết kế thời trang và Thiết kế Truyền thông trực quan.",
      notablePoints: [
        "Đại học Lĩnh Đông nằm trong thành phố, đối diện là 4 khu công nghệ cao và khu công nghiệp chiếm hơn 50% sản lượng xuất khẩu của Đài Loan",
        "Sinh viên tại Lĩnh Đông muốn đi làm thêm rất thuận lợi vì thể sinh viên được đi miễn phí xe bus 12 km",
        "Thành phố Đài Trung được mệnh danh là thành phố dịch vụ tốt nhất Đài Loan",
        "Trường Đại học Lĩnh Đông là trường duy nhất tại Đài Loan có trường THPT Lĩnh Đông và Đại học Lĩnh Đông trong cùng khuôn viên",
      ],
      subPrograms: [
        {
          name: "Chương trình 1+4 kỳ tháng 9-2026 (du học không điều kiện ngoại ngữ)",
          whyChoose: "Đại học Khoa học Kỹ thuật Lĩnh Đông (LTU) là điểm đến lý tưởng tại Đài Trung nhờ chất lượng đào tạo xuất sắc với ngành Thiết kế thuộc Top 100 thế giới cùng vị trí giao thông đắc địa chỉ cách ga tàu cao tốc 10 phút. Sinh viên tại đây được thụ hưởng mọi trường sống tiện nghi với hệ thống ký túc xá hiện đại, cửa hàng tiện lợi 24h ngay trong khuôn viên và chính sách miễn phí xe buýt trong phạm vi 10km. Đặc biệt, với tỷ lệ nhập học ấn tượng và sự quan tâm sát sao đến đời sống du học sinh, nhà trường cam kết mang lại sự hỗ trợ kịp thời giúp sinh viên hoàn toàn an tâm trong suốt quá trình học tập.",
          programInfo: [
            "Năm đầu tiên học ngôn ngữ tại trường. Khi kết thúc năm nhất sinh viên cần đạt chứng chỉ TOCFL A2",
            "Tổng thời gian học là 5 năm",
            "Không yêu cầu chứng chỉ tiếng khi báo danh hồ sơ (Nếu có thì tỉ lệ đỗ hồ sơ cao hơn)",
          ],
          fieldsOfStudy: [
            "Ngành Quản trị du lịch và giải Trí",
            "Ngành Marketing và logistics",
            "Ngành Quản lý thông tin",
            "Ngành Công nghệ thông tin",
          ],
          admissionRequirements: [
            "Học sinh đã Tốt nghiệp THPT",
            "Học sinh tốt nghiệp THPT từ 18 đến 20 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
          ],
          scholarships: [
            "Năm 1: Được trợ cấp 30.000 TWD",
            "Năm 2 - 5: Học bổng kỳ đầu 25.000 TWD, thành tích mỗi học kỳ đạt 80 điểm trở lên sẽ được tiếp tục có cơ hội nhận học bổng lên tới 25.000 TWD. Đạt thành tích xuất sắc top 3 toàn lớp sẽ có cơ hội nhận học bổng lên tới 50.000 TWD",
          ],
          tuitionAndFees: [
            "Năm 1: 35.000 TWD/kỳ",
            "Năm 2 trở đi: 57.000 - 67.000 TWD/kỳ",
          ],
        },
        {
          name: "Chương trình vừa học vừa làm kỳ tháng 9-2026",
          whyChoose: "Đại học Khoa học Kỹ thuật Lĩnh Đông (LTU) là điểm đến lý tưởng tại Đài Trung nhờ chất lượng đào tạo xuất sắc với ngành Thiết kế thuộc Top 100 thế giới. Đặc biệt, với tỷ lệ nhập học ấn tượng và sự quan tâm sát sao đến đời sống du học sinh, nhà trường cam kết mang lại sự hỗ trợ kịp thời giúp sinh viên hoàn toàn an tâm trong suốt quá trình học tập.",
          programInfo: [
            "Sinh viên sẽ học sống 4 năm với việc kết hợp giữa học tập trên lớp và đi thực tập thực hành tại doanh nghiệp do nhà trường chỉ định, hưởng mức lương, hỗ trợ cho sinh viên thực tập theo quy định của đài loan và doanh nghiệp chỉ định",
            "Tên chương trình: VHVL (Tân Hướng Nam)",
          ],
          fieldsOfStudy: [
            "Ngành Quản trị du lịch và giải Trí",
            "Ngành Marketing và logistics",
            "Ngành Thiết kế, nhà tạo mẫu thời trang",
            "Ngành Công nghệ thông tin",
          ],
          admissionRequirements: [
            "Học sinh đã Tốt nghiệp THPT",
            "Học sinh tốt nghiệp THPT từ 18 đến 20 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
            "Chứng chỉ tiếng trung TOCFL A1 trở lên",
          ],
          scholarships: [
            "Học kỳ đầu tiên cung cấp học bổng toàn phần (nếu đạt TOCFL A2 trở lên) và cung cấp 25.000 TWD (nếu đạt TOCFL A1)",
            "Học kỳ thứ hai được cung cấp 25.000 TWD",
            "Từ học kỳ thứ ba trở đi, sinh viên có điểm trung bình 80 điểm trở lên sẽ được học bổng 10.000 TWD, top 3 sinh viên đứng đầu lớp sẽ được nhận thêm học bổng 15.000 TWD",
            "Ngoài ra, học kỳ đầu tiên được miễn phí ký túc xá",
          ],
          tuitionAndFees: [
            "Học phí: 45.782 TWD - 52.542 TWD/kỳ",
            "Ký túc xá: 12.000 TWD - 15.000 TWD/kỳ",
          ],
        },
      ],
    },
  },
  {
    slug: "van-tao-wenzao",
    name: "Đại học Ngoại ngữ Văn Tảo (Wenzao)",
    shortName: "Wenzao",
    country: "Đài Loan",
    heroImage: "/university-photos/wenzao-campus.jpg",
    thumbnailImage: "/university-photos/wenzao-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p17_84.png",
      "/extracted_images/img_p18_89.png",
      "/extracted_images/img_p19_94.png",
      "/extracted_images/img_p20_99.png",
    ],
    summary:
      "Đại học Ngoại ngữ Văn Tảo (Wenzao Ursuline University of Languages) là trường đại học ngoại ngữ duy nhất tại Đài Loan, chuyên đào tạo ngôn ngữ và quan hệ quốc tế. Trường có chương trình đa ngôn ngữ và môi trường quốc tế phong phú.",
    fieldsOfStudy: ["Ngoại ngữ", "Quan hệ quốc tế", "Truyền thông", "Thương mại quốc tế"],
    duration: "4 năm (hệ đại học)",
    requirements: "Tốt nghiệp THPT, năng lực ngoại ngữ",
    scholarships: "Học bổng ngoại ngữ và học bổng trường",
    programTypes: ["Hệ đại học", "Hệ thạc sĩ"],
    highlights: [
      "Trường ngoại ngữ duy nhất tại Đài Loan",
      "Chương trình đa ngôn ngữ",
      "Môi trường quốc tế đa dạng",
      "Tọa lạc tại Cao Hùng — thành phố biển",
    ],
    relatedSlugs: ["trung-tin-ctbc", "y-duoc-cmu"],
    admissionsInfo: {
      universityIntro: "Đại học Ngoại ngữ Văn Tảo (Wenzao Ursuline University of Languages - WTUC) là cơ sở giáo dục đại học đầu tiên ở Đài Loan tập trung vào đào tạo ngoại ngữ, được thành lập vào năm 1966. Trường được đặt theo tên vị giám mục đầu tiên của Trung Quốc, Lã Văn Tảo (Luo Wen Zao). Trường với nhiều học bổng, đặc biệt trường có phương án đặc biệt cho sinh viên của Viện SIGE giảm ít nhất 10% học phí cho chương trình học ngôn ngữ, chế độ học bổng ưu đãi đặc biệt, với khoản học phí phù hợp với Việt Nam.",
      notablePoints: [
        "Trường Đại học Tư thục đứng vị trí số 1 trong 11 năm liên tiếp về triển vọng Quốc tế và năng lực ngoại ngữ",
        "495 môn được giảng dạy bằng tiếng Anh",
        "6 năm liên tiếp được đánh giá là Trường Tư thục về ngôn ngữ yêu thích nhất",
        "02 năm liên tiếp Top 1 về ngành Truyền thông Đại chúng được yêu thích nhất",
        "Liên kết Quốc tế với 273 trường",
        "Số lượng học sinh, sinh viên trao đổi liên kết Quốc tế là 734 người/năm",
      ],
      subPrograms: [
        {
          name: "Lớp chuyên ban dành cho sinh viên quốc tế - Khoa Ứng dụng Tiếng Hoa (Hệ cử nhân)",
          whyChoose: "Là đại học ngoại ngữ duy nhất tại Đài Loan, Văn Tảo được các nhà tuyển dụng đánh giá rất cao nhờ môi trường đào tạo quốc tế chuyên nghiệp. Sinh viên tại đây được hưởng quyền lợi đặc biệt và hỗ trợ tìm việc làm thêm và cơ hội thực tập tại nước ngoài ngay vào năm thứ 4.",
          programInfo: [
            "Đội ngũ giảng viên có trình độ học vị Tiến sĩ",
            "Khóa học tiếng Anh chuyên ngành phân theo trình độ",
            "Các chương trình hợp tác quốc tế đa dạng",
            "Khả năng sử dụng tiếng Hoa trong môi trường chuyên nghiệp",
            "Trình độ văn hóa Trung Hoa",
            "Các khóa học về kinh doanh, hành chính, AI, thông tin kỹ thuật số, v.v...",
          ],
          fieldsOfStudy: [
            "Sư phạm Tiếng Trung",
            "Kinh doanh Quốc tế và Quản lý Trí tuệ nhân tạo",
            "Phiên dịch Tiếng Anh Chuyên nghiệp",
            "Ngoại giao",
            "Kinh doanh Quốc tế",
            "Phiên dịch Trung Chuyên nghiệp",
          ],
          admissionRequirements: [
            "Học sinh tốt nghiệp THPT năm nay: TOCFL A1 và HSK cấp 3",
            "Học sinh không tốt nghiệp năm nay: TOCFL A2 và HSK cấp 4",
            "Số tín chỉ tốt nghiệp: 128 tín",
          ],
          scholarships: [
            "Chương trình cung cấp các mức học bổng 100%, 50%, ... 15% dành cho sinh viên. Nếu đạt yêu cầu mỗi học kỳ, sinh viên có thể tiếp tục nhận học bổng tới đa 4 năm (8 học kỳ)",
            "Học bổng theo kết quả THPT và chứng chỉ ngôn ngữ (xem bảng chi tiết)",
          ],
          tuitionAndFees: [],
          notes: [
            "Cơ hội việc làm: Hàng không - Du lịch (Tiếp viên, Kỹ thuật sân bay, Hướng dẫn viên), Giáo dục - Ngôn ngữ (Biên phiên dịch, Giáo viên, Cố vấn học tập), Kinh doanh - Chính phủ (Chuyên viên Chính phủ, PR, Sales, Thư ký), Công nghệ - Nghệ thuật (Chuyên viên phần mềm, Sáng tạo nội dung)",
          ],
        },
      ],
    },
  },
  {
    slug: "y-duoc-cmu",
    name: "Đại học Y Dược Trung Quốc (CMU)",
    shortName: "CMU",
    country: "Đài Loan",
    heroImage: "/university-photos/cmu-campus.jpg",
    thumbnailImage: "/university-photos/cmu-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p20_99.png",
      "/extracted_images/img_p21_104.png",
    ],
    summary:
      "Đại học Y Dược Trung Quốc (China Medical University) là một trong những trường y dược hàng đầu Đài Loan. Trường có bệnh viện thực hành riêng và chương trình đào tạo y khoa chất lượng quốc tế.",
    fieldsOfStudy: ["Y khoa", "Dược học", "Y học cổ truyền", "Khoa học sức khỏe"],
    duration: "4-6 năm (tùy ngành)",
    requirements: "Tốt nghiệp THPT, thành tích học tập xuất sắc",
    scholarships: "Học bổng nghiên cứu y khoa",
    programTypes: ["Hệ đại học", "Hệ thạc sĩ"],
    highlights: [
      "Top trường y dược hàng đầu Đài Loan",
      "Bệnh viện thực hành trực thuộc",
      "Chương trình Y học cổ truyền độc đáo",
      "Cơ hội nghiên cứu khoa học",
    ],
    relatedSlugs: ["van-tao-wenzao", "ky-nam-ncnu"],
    admissionsInfo: {
      universityIntro: "Tại Đài Loan có nhiều trường Y nổi tiếng liên quan đến tên gọi \"Trung Hoa\", nổi bật nhất là Đại học Y Dược Trung Quốc (China Medical University - CMU) ở Đài Trung, một trường hàng đầu về cả y học Trung Quốc và Tây y. Vị trí: Đài Trung - Thành phố lớn thứ 2 đáng sống nhất Đài Loan. Nổi bật: Trường y hàng đầu, kết hợp y học cổ truyền (Trung y) và Tây y, có hệ thống bệnh viện lớn, được công nhận JCI, thu hút nhiều sinh viên quốc tế. Chương trình: Y học, Dược học, Điều dưỡng, Khoa học đời sống, Y tế công cộng, Quản lý.",
      notablePoints: [
        "Hệ thống bệnh viện: Sở hữu hệ thống bệnh viện đa khoa lớn, đạt chuẩn quốc tế (JCI), cung cấp cơ hội thực hành thực tế cho sinh viên",
        "Cơ sở vật chất: Phòng học, phòng thí nghiệm hiện đại, thư viện đồ sộ và Bảo tàng Y học Trung Quốc",
        "Chương trình đào tạo: Gồm 7 trường thành viên, bao gồm Y học hiện đại, Y học cổ truyền, Dược học, Khoa học đời sống, Y tế công cộng, Điều dưỡng, Quản lý",
        "Sinh viên quốc tế: Thu hút nhiều sinh viên quốc tế, trong đó có sinh viên Việt Nam",
        "Uy tín hàng đầu trong lĩnh vực y dược tại Đài Loan và châu Á",
      ],
      subPrograms: [
        {
          name: "Chương trình 1+4 kỳ tháng 9-2026",
          whyChoose: "Đại học Y Dược Trung Quốc (CMU), tọa lạc tại Đài Trung (Đài Loan), là trường đại học y khoa hàng đầu châu Á nổi tiếng với việc tiên phong kết hợp đào tạo giữa Y học cổ truyền và Y học phương Tây. Được thành lập năm 1958, trường liên tục năm trong Top các bảng xếp hạng giáo dục uy tín thế giới nhờ chất lượng giảng dạy xuất sắc và hệ thống bệnh viện thực hành hiện đại, tạo nên môi trường lý tưởng cho sinh viên quốc tế mong muốn theo đuổi ngành Y - Dược với nền tảng chuyên môn vững chắc.",
          programInfo: [
            "Năm đầu tiên học ngôn ngữ tại trường. Khi kết thúc năm nhất sinh viên cần đạt chứng chỉ TOCFL A2",
            "Tổng thời gian học là 5 năm",
            "Không yêu cầu chứng chỉ tiếng khi báo danh hồ sơ (Nếu có thì tỉ lệ đỗ hồ sơ cao hơn)",
          ],
          fieldsOfStudy: [
            "Ngành Hộ lý",
            "Ngành Dược học",
            "Ngành Vật lý trị liệu",
            "Ngành Hóa mỹ phẩm",
          ],
          admissionRequirements: [
            "Học sinh đã Tốt nghiệp THPT",
            "Học sinh tốt nghiệp THPT từ 18 đến 20 tuổi",
            "GPA mỗi học kỳ từ 7.0 trở lên",
            "Sức khỏe tốt, không có tiền án tiền sự",
          ],
          scholarships: [],
          tuitionAndFees: [
            "Năm 1: 48.035 TWD/kỳ",
            "Năm 2 trở đi: 56.986 TWD/kỳ",
          ],
          interviewSchedule: [
            { field: "Ngành Hộ lý", round1: "12/2/2026", round2: "21/5/2026" },
            { field: "Ngành Dược học", round1: "10/2/2026", round2: "19/5/2026" },
            { field: "Ngành Vật lý trị liệu", round1: "5/2/2026", round2: "21/5/2026" },
            { field: "Ngành Hóa mỹ phẩm", round1: "3/2/2026", round2: "11/5/2026" },
          ],
        },
      ],
    },
  },
  {
    slug: "chinh-tu-cheng-shiu",
    name: "Đại học Chính Tu (Cheng Shiu)",
    shortName: "Cheng Shiu",
    country: "Đài Loan",
    heroImage: "/university-photos/cheng-shiu-campus.jpg",
    thumbnailImage: "/university-photos/cheng-shiu-campus.jpg",
    brochurePages: [
      "/extracted_images/img_p22_109.png",
      "/extracted_images/img_p24_119.png",
    ],
    summary:
      "Đại học Chính Tu (Cheng Shiu University) tọa lạc tại Cao Hùng, là trường đại học khoa học kỹ thuật ứng dụng với thế mạnh về đào tạo kỹ thuật công nghiệp và chương trình vừa học vừa làm cho sinh viên quốc tế.",
    fieldsOfStudy: ["Kỹ thuật công nghiệp", "Điện tử", "Quản trị", "Thiết kế"],
    duration: "4 năm (Văn bằng 2 + thực tập + việc làm)",
    requirements: "Tốt nghiệp Đại học ngành Điện tử/Điện cơ/Tự động hóa, IELTS 4.5+",
    scholarships: "Hỗ trợ học phí, KTX, vé máy bay, visa + sinh hoạt phí 10.000 TWD/tháng",
    programTypes: ["Văn bằng 2", "Hợp tác doanh nghiệp ASE"],
    highlights: [
      "Hỗ trợ học phí, KTX, vé máy bay và visa từ chính phủ Đài Loan",
      "Tập đoàn ASE tài trợ 10.000 TWD/tháng sinh hoạt phí",
      "Cam kết việc làm kỹ sư tại ASE với thu nhập 570.000 TWD/năm",
      "Tổng thu nhập ước tính sau 4 năm: khoảng 1,6 tỷ VND",
    ],
    relatedSlugs: ["linh-dong-ltu", "van-tao-wenzao"],
    admissionsInfo: {
      universityIntro: "Đại học Chính Tu (Cheng Shiu University) là một trong những trường đại học đi đầu về kỹ thuật tại Đài Loan, tọa lạc tại thành phố Cao Hùng sôi động — trung tâm công nghiệp và công nghệ lớn của miền Nam Đài Loan. Bằng đại học được công nhận bởi Bộ Giáo Dục Đài Loan (MOE), có giá trị tại cả Việt Nam và Đài Loan. Trường ưu tiên mô hình \"học đi đôi với hành\", nơi mỗi bài giảng được chuyển hóa thành kỹ năng thực tế, sẵn sàng đáp ứng nhu cầu của thị trường lao động toàn cầu.",
      notablePoints: [
        "Bằng đại học chính quy được công nhận bởi Bộ Giáo Dục Đài Loan (MOE), có giá trị tại Việt Nam và Đài Loan",
        "Hợp tác trực tiếp với Tập đoàn ASE — nhà cung cấp OSAT lớn nhất thế giới",
        "Chương trình đào tạo định hướng ứng dụng, thiết kế sát với yêu cầu doanh nghiệp",
        "Trường đầu tư mạnh vào hệ thống phòng thí nghiệm, xưởng thực hành và không gian sáng tạo",
        "Có thể lấy thẻ xanh ở lại lâu dài sống và làm việc tại Đài Loan sau tốt nghiệp",
      ],
      subPrograms: [
        {
          name: "Chương trình Văn bằng 2 — Tập đoàn ASE kỳ tháng 9-2026",
          whyChoose: "Sinh viên được học tại Đại học Chính Tu với sự hỗ trợ học phí, ký túc xá, vé máy bay, visa từ chính phủ Đài Loan. Thực tập và làm việc dưới sự tài trợ của tập đoàn ASE — nhà cung cấp OSAT lớn nhất thế giới với hơn 95.000 nhân viên tại hàng chục quốc gia. Ra trường cam kết làm việc cho doanh nghiệp 2 năm hưởng nguyên lương. Sau 4 năm, bạn có bằng Đại học Đài Loan, thành thạo ngoại ngữ, và kinh nghiệm làm việc tại tập đoàn hàng đầu thế giới về điện tử bán dẫn.",
          programInfo: [
            "Năm 1: Học tại trường Đại học Chính Tu (Cheng Shiu University)",
            "Năm 2: Thực tập tại công ty thuộc tập đoàn ASE Đài Loan — mức lương 31.150 TWD/tháng",
            "Năm 3 & 4: Làm việc tại công ty thuộc tập đoàn ASE — vị trí Kỹ sư vận hành máy móc thiết bị (không phải công nhân thao tác), có thể tăng ca. Thu nhập: 570.000 TWD/năm",
            "Chế độ thưởng, phạt, nghỉ lễ theo quy định nhà nước",
          ],
          fieldsOfStudy: [
            "Điện tử",
            "Điện cơ",
            "Tự động hóa",
          ],
          admissionRequirements: [
            "Quốc tịch: Việt Nam",
            "Giới tính: Nam",
            "Tuổi: từ 23 đến 30 tuổi",
            "Tốt nghiệp đại học các khoa: Điện tử, Điện cơ, Tự động hóa",
            "Tiếng Anh IELTS 4.5, hoặc TOEIC 450",
            "Ưu tiên có tiếng Trung TOCFL A2",
          ],
          scholarships: [
            "Hỗ trợ học phí từ chính phủ Đài Loan",
            "Hỗ trợ ký túc xá, vé máy bay và visa",
            "Tập đoàn ASE tài trợ 10.000 TWD/tháng tiền sinh hoạt phí",
          ],
          tuitionAndFees: [
            "Tổng chi phí thủ tục: 2.200 USD",
            "Bao gồm: Dịch thuật, công chứng tem vàng học bạ bằng tốt nghiệp",
            "Khám sức khỏe",
            "Visa, vé máy bay Việt Nam — Đài Loan",
            "Đưa đón sân bay về ký túc xá",
          ],
          partnerInfo: {
            name: "Tập đoàn ASE (ASE Group)",
            description: "ASE Technology Holding là nhà cung cấp dịch vụ đóng gói và kiểm tra bán dẫn (OSAT) lớn nhất thế giới, đóng vai trò then chốt trong chuỗi cung ứng chip toàn cầu.",
            highlights: [
              "Nhà cung cấp OSAT lớn nhất thế giới",
              "Hơn 95.000 nhân viên trên toàn cầu",
              "Có mặt tại: Trung Quốc, Hàn Quốc, Nhật Bản, Singapore, Malaysia, Việt Nam, Mỹ, Mexico, Pháp, Đức, Ba Lan, Séc...",
              "Hàng chục nhà máy sản xuất toàn cầu",
            ],
          },
          careerPathway: [
            { year: "Năm 1", title: "Học tại trường", description: "Học tập tại Đại học Chính Tu, có thể làm thêm tại trường 20 giờ/tuần với mức 196 TWD/giờ" },
            { year: "Năm 2", title: "Thực tập tại ASE", description: "Thực tập tại tập đoàn ASE với lương 31.150 TWD/tháng. Có thể làm thêm ngoài giờ với thu nhập bổ sung khoảng 13,3 triệu VND/tháng" },
            { year: "Năm 3 & 4", title: "Kỹ sư tại ASE", description: "Làm việc vị trí Kỹ sư vận hành máy móc thiết bị tại tập đoàn ASE. Thu nhập 570.000 TWD/năm (khoảng 485 triệu VND/năm)" },
          ],
          incomeTable: [
            { year: "Năm 1", source: "Làm thêm tại trường", calculation: "20 giờ/tuần x 196 TWD/giờ", estimated: "Thu nhập tùy số tuần làm việc" },
            { year: "Năm 2", source: "Lương thực tập ASE", calculation: "31.150 TWD/tháng x 12 tháng", estimated: "~317 triệu VND/năm" },
            { year: "Năm 2", source: "Làm thêm ngoài giờ", calculation: "13,3 triệu VND/tháng x 12 tháng", estimated: "~159,6 triệu VND/năm" },
            { year: "Năm 3 & 4", source: "Thu nhập kỹ sư ASE", calculation: "570.000 TWD/năm x 2 năm", estimated: "~969 triệu VND/2 năm" },
          ],
          documentsRequired: [
            "Hộ chiếu (Hộ chiếu căn theo căn cước công dân gắn chip)",
            "Ảnh 3.5 x 4.5",
            "Phiếu lý lịch tư pháp số 2",
            "Bản sao căn cước công dân + bản in CCCD từ VNID",
            "Bằng Tốt nghiệp Đại học gốc",
            "Bảng điểm quá trình học Đại học (ưu tiên đạt 3.0 trở lên)",
            "Giấy khai sinh",
            "Giấy kết hôn nếu có",
            "Giấy xác nhận nơi cư trú",
            "CMTC sổ tiết kiệm từ 6.500 USD trở lên",
            "Hồ sơ khám sức khỏe đi làm việc tại Đài Loan",
          ],
          notes: [
            "Tổng thu nhập ước tính sau 4 năm: khoảng 1,6 tỷ VND",
            "Có kinh nghiệm làm việc tại tập đoàn hàng đầu thế giới về Điện tử bán dẫn",
            "Có thể lấy thẻ xanh ở lại lâu dài sống và làm việc tại Đài Loan",
          ],
        },
      ],
    },
  },
]

export interface Country {
  slug: string
  name: string
  label: string
  flag: string
  available: boolean
  description: string
}

export const countries: Country[] = [
  {
    slug: "dai-loan",
    name: "Đài Loan",
    label: "Du học Đài Loan",
    flag: "🇹🇼",
    available: true,
    description: "7 trường đại học đối tác với học bổng hấp dẫn",
  },
  {
    slug: "nhat-ban",
    name: "Nhật Bản",
    label: "Du học Nhật Bản",
    flag: "🇯🇵",
    available: false,
    description: "Sắp cập nhật chương trình",
  },
  {
    slug: "han-quoc",
    name: "Hàn Quốc",
    label: "Du học Hàn Quốc",
    flag: "🇰🇷",
    available: false,
    description: "Sắp cập nhật chương trình",
  },
]

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug)
}

export function getAllPrograms(): Program[] {
  return programs
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug)
}

export function getProgramsByCountry(countryName: string): Program[] {
  return programs.filter((p) => p.country === countryName)
}
