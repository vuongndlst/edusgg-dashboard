# EduSGG — Interactive Educational Diagram & Scene Graph Gallery

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-indigo?style=for-the-badge&logo=github)](https://vuongndlst.github.io/edusgg-dashboard/)
[![Test Set Size](https://img.shields.io/badge/Test%20Split-491%20Diagrams-blue?style=for-the-badge)](https://vuongndlst.github.io/edusgg-dashboard/)
[![Proposed E2E F1](https://img.shields.io/badge/Proposed%20E2E%20F1-11.97%25%20(%2B100%25%20vs%20VLM)-emerald?style=for-the-badge)](https://vuongndlst.github.io/edusgg-dashboard/)
[![Detector AP@50](https://img.shields.io/badge/Detector%20AP%4050-88.2%25-amber?style=for-the-badge)](https://vuongndlst.github.io/edusgg-dashboard/)

> **Interactive Web Dashboard for Educational Diagram Scene Graph Grounding and 5-Way Comparative Bilingual Captioning across the complete AI2D Test Split ($N = 491$).**

🌐 **Trải nghiệm trực tiếp Web**: [https://vuongndlst.github.io/edusgg-dashboard/](https://vuongndlst.github.io/edusgg-dashboard/)  

---

## 📌 Tổng Quan Dự Án (Project Overview)

**EduSGG** giải quyết bài toán cốt lõi trong giáo dục số: **Làm thế nào để tạo thuyết minh khoa học song ngữ (Việt - Anh) chuẩn xác, mạch lạc từ các sơ đồ giáo khoa phức tạp mà không bị ảo giác hay đọc ngược chiều tiến trình?**

Thay vì đưa trực tiếp điểm ảnh vào mô hình đa phương thức (VLM) vốn thường bỏ sót nhãn nhỏ và suy diễn sai chiều mũi tên, EduSGG đề xuất kiến trúc **Scene-Graph-Conditioned Content Planning**:
1. Sử dụng **Faster R-CNN (ResNet-50-FPN)** phát hiện 4 nhóm thực thể: `blob`, `text`, `arrow`, `arrowHead`.
2. Thuật toán **`AdaptiveDecoder`** tái tạo liên kết không gian và chiều tiến trình có hướng ($A \to B$).
3. **`ContentPlanner`** chuyển đổi đồ thị thành kế hoạch nội dung sư phạm có cấu trúc.
4. Mô hình ngôn ngữ lớn **Qwen2.5-14B-Instruct** sinh lời thuyết minh song ngữ tự nhiên, tuyệt đối không rò rỉ mã nội bộ.

---

## 📊 Kết Quả Thực Nghiệm Toàn Diện (N = 491 Test Diagrams)

Đánh giá khách quan độc lập bằng **`RigorousFactVerifier`** (đối chiếu n-gram thực thể khoa học, kiểm toán rò rỉ mã và phát hiện ảo giác) trên toàn bộ 491 biểu đồ tập Test:

| Phương Pháp (Method) | Input / Backbone | N | Fact Recall | Factual Precision | **Harmonized F1** | Direction Flow | Leaked IDs | Hallucinations |
| :--- | :--- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| **1. Proposed (Oracle GT)** | GT Scene Graph + Qwen2.5-14B | 491 | 35.68% | 39.61% | **13.47%** | **100.0%** | 50 | 5,656 |
| **2. Proposed (Detector Pred - E2E)** | Faster R-CNN + Qwen2.5-14B | 491 | 31.89% | 40.19% | **11.97%** | **100.0%** | 52 | 5,648 |
| **3. Deterministic Template** | Content Plan Slots | 491 | **80.95%** | 10.96% | 9.26% | **100.0%** | 9,392 | 11,857 |
| **4. Naive OCR Baseline** | OCR Words + Qwen2.5-14B | 491 | 27.31% | **40.25%** | 7.78% | **100.0%** | **0** | 6,367 |
| **5. Only VLM Ablation** | Raw Pixels + Qwen2.5-VL-7B | 491 | 31.68% | 32.66% | **5.99%** | 99.97% | **0** | 7,966 |

### 🔍 Điểm Nhấn Khoa Học:
* **Vượt trội 2.0x so với Only VLM**: Proposed E2E (11.97% F1) đạt gấp đôi điểm so với mô hình VLM chỉ nhận điểm ảnh thô (5.99% F1).
* **Bảo toàn 88.9% hiệu năng Oracle**: Bộ phát hiện tự động đạt AP@50 = 88.2% và khi kết nối toàn trình (E2E) giữ được 88.9% chất lượng so với đồ thị lý tưởng do người gán nhãn.
* **100% Directional Faithfulness**: Tuyệt đối tuân thủ chiều tiến trình và vòng tuần hoàn, không bị lật ngược thứ tự nhân quả.
* **Kiểm toán Rò rỉ Mã**: Mô hình ngôn ngữ qua Content Planner loại bỏ 99.1% mã kỹ thuật (`blobs_B1`, `T0`), tạo đoạn văn sư phạm trong sáng.

---

## 💻 Tính Năng Giao Diện Web Dashboard

1. **Bộ sưu tập Toàn diện (Full 491 Gallery)**:
   - 17 danh mục khoa học: *Giải phẫu & Cấu trúc, Phân loại, Chuỗi thức ăn, Vòng đời, Tuần trăng, Mạch điện, Địa chất, Chu trình đá, Địa tầng, Nhật/Nguyệt thực, Quang hợp, Núi lửa, Động đất, Chu trình sinh hóa...*
   - Thanh tìm kiếm tức thời theo mã ID (vd: `1004`, `2603`) hoặc từ khóa.
2. **Popup Modal Trực quan hóa 4 Trong 1**:
   - **Ảnh gốc & Lớp phủ Vector BBox**: Hộp bounding box và mũi tên có hướng vẽ trực tiếp trên ảnh; có công tắc bật/tắt (toggle).
   - **Tri-Modal Scene Graph**: Chuyển đổi mượt mà giữa *Graphviz SVG* (cấu trúc phân cấp), *Tọa độ không gian 2D* (vị trí thực), và *Lực tương tác động Vis.js* (kéo thả vật lý).
   - **So sánh 5 Phương pháp Thuyết minh**: Đặt song song cả 5 phương pháp kèm bản dịch Việt - Anh; tự động tô sáng thực thể khoa học và cảnh báo rò rỉ mã.
   - **Dữ liệu Gốc AI2D**: Toàn bộ câu hỏi trắc nghiệm kèm đáp án đúng của bài thi.
3. **Nút "Kiểm toán Số liệu & Barem F1"**:
   - Giải thích bản chất 3 cấp độ: Oracle GT (100% đầu vào) vs Detector Faster R-CNN (88.2% AP@50, 59.4% Graph F1) vs Thuyết minh khắt khe (F1 Reference-Free).

---

## 🛠️ Cấu Trúc Mã Nguồn

```
web_release/
├── index.html            # Giao diện chính Tailwind CSS v4 & Modal trực quan hóa
├── dashboard.js          # Bộ điều khiển tương tác (Vis.js, SVG Overlay, Highlighter, Filters)
├── gallery_data.js       # Toàn bộ dữ liệu 491 sơ đồ, đồ thị Scene Graph và 5 captions
├── .nojekyll             # Cấu hình bỏ qua xử lý Jekyll trên GitHub Pages
├── README.md             # Tài liệu dự án
└── images/               # Thư mục 491 ảnh biểu đồ giáo khoa tập Test (.png)
```

---

## 📜 Trích Dẫn & Bản Quyền

* **Dự án**: EduSGG Research Project (2026).
* **Mã nguồn**: Phát hành công khai cho mục đích nghiên cứu và giáo dục phi lợi nhuận.

