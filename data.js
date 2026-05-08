/**
 * DỮ LIỆU BÀI GIẢNG E-SLIDE TECH 2026
 * GV: Gia Thoại - THPT Trần Văn Thành
 * Cấu trúc: [Khối] -> [Chương] -> [Bài]
 */

const lessonData = {
    // ==========================================
    // KHỐI 11: CƠ KHÍ & ĐỘNG LỰC
    // ==========================================

    // --- PHẦN 1: CƠ KHÍ CHẾ TẠO ---
    // Chương I
    'k11b1': { title: "Bài 1: Khái quát về cơ khí chế tạo", slides: [{ h: "Khái niệm", p: "Ngành thiết kế và sản xuất các loại máy móc." }] },
    'k11b2': { title: "Bài 2: Ngành nghề trong lĩnh vực cơ khí chế tạo", slides: [{ h: "Ngành nghề", p: "Kỹ sư cơ khí, thợ tiện, thợ phay, thợ hàn..." }] },
    
    // Chương II
    'k11b3': { title: "Bài 3: Tổng quan về vật liệu cơ khí", slides: [{ h: "Vật liệu", p: "Là các chất được dùng trong sản xuất cơ khí." }] },
    'k11b4': { title: "Bài 4: Vật liệu kim loại và hợp kim", slides: [{ h: "Kim loại đen", p: "Bao gồm sắt, gang và thép." }] },
    'k11b5': { title: "Bài 5: Vật liệu phi kim loại", slides: [{ h: "Chất dẻo", p: "Nhựa nhiệt dẻo và nhựa nhiệt rắn." }] },
    'k11b6': { title: "Bài 6: Vật liệu mới", slides: [{ h: "Vật liệu Nanô", p: "Vật liệu có cấu trúc hạt siêu nhỏ." }] },
    
    // Chương III
    'k11b7': { title: "Bài 7: Khái quát về gia công cơ khí", slides: [{ h: "Gia công", p: "Làm thay đổi hình dạng, kích thước của phôi." }] },
    'k11b8': { title: "Bài 8: Một số phương pháp gia công cơ khí", slides: [{ h: "Gia công cắt gọt", p: "Tiện, phay, bào, khoan, mài." }] },
    'k11b9': { title: "Bài 9: Quy trình công nghệ gia công chi tiết", slides: [{ h: "Quy trình", p: "Các bước thực hiện để hoàn thành sản phẩm." }] },
    'k11b10': { title: "Bài 10: Dự án: Chế tạo sản phẩm", slides: [{ h: "Dự án", p: "Thực hành chế tạo sản phẩm bằng gia công cắt gọt." }] },
    
    // Chương IV
    'k11b11': { title: "Bài 11: Quá trình sản xuất cơ khí", slides: [{ h: "Sản xuất", p: "Từ nguyên liệu thô đến thành phẩm." }] },
    'k11b12': { title: "Bài 12: Dây chuyền sản xuất tự động & Robot", slides: [{ h: "Robot", p: "Ứng dụng cánh tay robot trong lắp ráp." }] },
    'k11b13': { title: "Bài 13: CMCN lần thứ 4 (4.0)", slides: [{ h: "Công nghệ số", p: "Trí tuệ nhân tạo và kết nối vạn vật (IoT)." }] },
    'k11b14': { title: "Bài 14: An toàn lao động & Môi trường", slides: [{ h: "An toàn", p: "Sử dụng trang thiết bị bảo hộ đúng quy định." }] },

    // --- PHẦN 2: CƠ KHÍ ĐỘNG LỰC ---
    // Chương V
    'k11b15': { title: "Bài 15: Khái quát về cơ khí động lực", slides: [{ h: "Khái niệm", p: "Ngành thiết kế và vận hành các máy động lực." }] },
    'k11b16': { title: "Bài 16: Ngành nghề trong CK động lực", slides: [{ h: "Nghề nghiệp", p: "Kỹ sư ô tô, thợ sửa chữa máy tàu thủy..." }] },
    
    // Chương VI
    'k11b17': { title: "Bài 17: Đại cương về động cơ đốt trong", slides: [{ h: "Lịch sử", p: "Sự ra đời của động cơ hơi nước và ĐCĐT." }] },
    'k11b18': { 
        title: "Bài 18: Nguyên lí làm việc của ĐCĐT", 
        slides: [
            { h: "Kỳ Nạp", p: "Pit-tông đi xuống, hòa khí hoặc không khí được hút vào xi lanh." },
            { h: "Kỳ Nén", p: "Hai xupap đóng, Pit-tông đi lên nén khí." },
            { h: "Kỳ Nổ", p: "Hỗn hợp cháy dãn nở sinh công đẩy Pit-tông đi xuống." },
            { h: "Kỳ Xả", p: "Xupap xả mở, Pit-tông đi lên đẩy khí thải ra ngoài." }
        ] 
    },
    'k11b19': { title: "Bài 19: Các cơ cấu trong ĐCĐT", slides: [{ h: "Cơ cấu", p: "Cơ cấu trục khuỷu thanh truyền, cơ cấu phối khí." }] },
    'k11b20': { title: "Bài 20: Các hệ thống trong ĐCĐT", slides: [{ h: "Hệ thống", p: "Bôi trơn, làm mát, cung cấp nhiên liệu, đánh lửa." }] },
    
    // Chương VII
    'k11b21': { title: "Bài 21: Khái quát chung về ô tô", slides: [{ h: "Cấu tạo", p: "Động cơ, gầm, vỏ và hệ thống điện." }] },
    'k11b22': { title: "Bài 22: Hệ thống truyền lực", slides: [{ h: "Truyền lực", p: "Ly hợp, hộp số, các đăng, cầu xe." }] },
    'k11b23': { title: "Bài 23: Bánh xe và hệ thống treo ô tô", slides: [{ h: "Hệ thống treo", p: "Giảm chấn động từ mặt đường lên thân xe." }] },
    'k11b24': { title: "Bài 24: Hệ thống lái", slides: [{ h: "Điều khiển", p: "Dùng để thay đổi hướng chuyển động của ô tô." }] },
    'k11b25': { title: "Bài 25: Hệ thống phanh & An toàn", slides: [{ h: "Phanh", p: "Giảm tốc độ hoặc dừng hẳn xe an toàn." }] },

    // ==========================================
    // KHỐI 10: THIẾT KẾ & CÔNG NGHỆ
    // ==========================================
    'k10b1': { title: "Bài 1: Khoa học, Kỹ thuật và Công nghệ", slides: [{ h: "Mối quan hệ", p: "KH khám phá tri thức, KT ứng dụng tri thức, CN tạo ra sản phẩm." }] },
    
    // ==========================================
    // KHỐI 12: KỸ THUẬT ĐIỆN TỬ
    // ==========================================
    'k12b1': { title: "Bài 1: Linh kiện điện tử thụ động", slides: [{ h: "Điện trở", p: "Đại diện cho khả năng cản trở dòng điện." }] }
};
