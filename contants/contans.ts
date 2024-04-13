import avt_feedback1 from "@/assets/avt_feedback_1.png";
import avt_feedback2 from "@/assets/av_feedback_2.png";
import avt_feedback3 from "@/assets/avt_feedback_3.png";
import service1 from "@/assets/service1.png";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import service4 from "@/assets/service4.png";
import service5 from "@/assets/service5.png";
import takecarefb1 from "@/assets/takecarefb1.png";
import takecarefb2 from "@/assets/takecarefb2.png";
import takecarefb3 from "@/assets/takecarefb3.png";
import takecarefb4 from "@/assets/takecarefb4.png";
import takecarefb5 from "@/assets/takecarefb5.png";

import img_ctnc1 from "@/assets/img-ctnc1.png.png";
import img_ctnc2 from "@/assets/img-ctnc2.png.png";
import img_ctnc3 from "@/assets/img-ctnc3.png.png";
import img_ctnc4 from "@/assets/img-ctnc4.png.png";
import img_ctnc5 from "@/assets/img-ctnc5.png.png";

import { ROUTES } from "@/routes";

export const menus = [
  {
    name: "Về chúng tôi",
    key: "/",
  },
  {
    name: "Dịch vụ hoạt động",
    key: ROUTES.SERVICE_ACTIVE,
  },
  {
    name: "lãnh đạo",
    key: "/leadership",
  },
  {
    name: "tin tức sự kiện",
    key: "/event",
  },
  {
    name: "liên hệ",
    key: "/contact",
  },
];

export const valueAboutBox = [
  {
    name: "Dự án",
    value: "10.000+",
  },
  {
    name: "khách hàng",
    value: "6.000+",
  },
  { name: "Tỷ lệ hài lòng", value: "90%" },
  {
    name: "Đơn vị Quảng Cáo miền Trung ",
    value: "TOP 10",
  },
];

export const feedback = [
  {
    name: "Minh Hằng",
    position: "Quản lý nhà hàng",
    content:
      "Thật là một vinh hạnh khi làm việc cùng TechNam. Quy trình làm việc của TechNam rất chuyên nghiệp, thân thiện và nhanh chóng. Họ thực sự hiểu những nhu cầu của chúng tôi và luôn cung cấp những giải pháp, lời khuyên cũng như hỗ trợ mọi vấn đề về công nghệ. TechNam đã giúp chúng tôi phát triển mạnh mẽ, vượt bậc hơn chỉ sau vài tháng hợp tác.",
    avt: avt_feedback1,
    isActive: false,
  },
  {
    name: "Ngọc Hùng",
    position: "CEO lĩnh vực F&B",
    content:
      "Tôi đã làm việc cùng TechNam từ tháng Ba năm nay. Tôi nhận thấy đội ngũ của TechNam rất chuyên nghiệp, siêng năng và hiệu quả. Đội ngũ nhân viên tại đây có sự hiểu biết rất sâu rộng về thị trường trong và ngoài nước. Tôi rất hài lòng khi làm việc cùng họ và tin rằng chúng tôi sẽ có nhiều dự án tuyệt vời trong những năm tới.",
    avt: avt_feedback2,
    isActive: true,
  },
  {
    name: "Cẩm Phượng",
    position: "Chủ shop thời trang",
    content:
      "Tôi đã làm việc cùng TechNam trong rất nhiều dự án vài tháng qua. Mỗi lần hợp tác, tôi đều ấn tượng với chất lượng làm việc cũng như sự quyết tâm của đội ngũ TechNam. Các kỹ thuật viên, tư vấn viên đã vượt qua những giờ làm việc căng thẳng và nguồn lực hạn chế, để đưa đến cho chúng tôi kết quả tuyệt vời. Tôi chắc chắn sẽ giới thiệu TechNam cho bất cứ ai tìm kiếm một đơn vị Marketing xuất sắc tại Việt Nam!",
    avt: avt_feedback3,
    isActive: false,
  },
];

export const services = [
  {
    title: "Tổng quan về Facebook",
    description:
      "Facebook tạo không gian kết nối hàng triệu người trên thế giới.",
    img: service1,
    href: ROUTES.SERVICE_ACTIVE + ROUTES.FACEBOOK_OVERVIEW,
  },
  {
    title: "Dịch vụ chăm sóc fanpage",
    description: `BẠN CÓ BIẾT? Content "hay" và "sáng tạo" sẽ giúp chiến dịch quảng cáo hiệu quả lên đến 73%.`,
    img: service2,
    href: ROUTES.SERVICE_ACTIVE + ROUTES.TAKE_CARE_FANPAGE,
  },
  {
    title: "Các hình thức QC Facebook",
    description: `Thông thường khi doanh nghiệp mới tạo lập, mục tiêu hàng đầu chính là đưa thương hiệu quảng bá tới cho khách hàng.`,
    img: service3,
    href: ROUTES.SERVICE_ACTIVE + ROUTES.FORM_ADS,
  },
  {
    title: "QC trên nền tảng TIKTOK",
    description: `Quảng cáo TikTok đem đến trọn vẹn mô hình hiển thị quảng cáo toàn phễu trong hoạt động Marketing`,
    img: service1,
    href: ROUTES.SERVICE_ACTIVE + ROUTES.TITOK_ADS,
  },
  {
    title: "Quảng cáo đa nền tảng",
    description: `Google Ads- Zalo Ads - E - commerce`,
    img: service4,
    href: "#",
  },
  {
    title: "Sản xuất nội dung",
    description: `No content`,
    img: service5,
    href: "#",
  },
];
export const dataFbAds = [
  "Lan tỏa nội dung cần truyền đạt nhanh chóng",
  "Định dạng quảng cáo đa dạng và thu hút",
  "Đưa quảng cáo vào cuộc sống. Thu hút khách hàng thông qua những hình ảnh, video khiến họ phải nhìn lại nhiều lần",
  "Tăng đơn hàng trực tuyến. Biến khách hàng xem sản phẩm thành khách mua hàng thông qua quảng cáo trên facebook",
];

export const cardTakecareFb = [
  {
    img: takecarefb1,
    text: "Tư vấn chiến lược Marketing tổng thể. Lên kế hoạch nội dung cụ thể, sát sao và phù hợp với từng đối tượng khách hàng mà doanh nghiệp của bạn đang hướng tới",
  },
  {
    img: takecarefb2,
    text: `Tạo Content Viral, Bắt Trend. "BrainStorm" tạo nên ý tưởng mới - lạ - thu hút, đẩy mạnh tương tác với khách hàng`,
  },
  {
    img: takecarefb3,
    text: " Thiết kế hình ảnh đẳng cấp, thu hút. Ý tưởng được thực thi bởi đỉnh cao của sáng tạo, điểm nhấn ấn tượng đến khách hàng",
  },
  {
    img: takecarefb4,
    text: "Tối ưu mọi chi phí. Mess rẻ, chất lượng, data khách hàng thật 100%",
  },
  {
    img: takecarefb5,
    text: "Báo cáo kết quả chiến dịch thường xuyên. Dịch vụ trọn gói gồm cả theo dõi chỉ số đo lường, báo cáo và tối ưu kết quả của các bài đăng Fanpage.",
  },
];

export const adsTitok = [
  {
    img: takecarefb1,
    text: "Thương hiệu lớn. Muốn tiếp cận một lượng người dùng lớn, năng động và hiệu quả với chi phí tiết kiệm hơn các nền tảng khác",
  },
  {
    img: takecarefb2,
    text: `Cá nhân bán hàng Các cá nhân bán hàng nhỏ, lẻ muốn thúc đẩy doanh số, lợi nhuận. Đa dạng kênh bán hàng với hiệu suất tốt và tiết kiệm.`,
  },
  {
    img: takecarefb3,
    text: "Doanh nghiệp vừa và nhỏ Giúp doanh nghiệp tăng doanh số và nâng tầm thương hiệu. Phát triển thêm kênh online bán hàng/dịch vụ không phụ thuộc quá nhiều vào 1 giải pháp/nền tảng.",
  },
  {
    img: takecarefb4,
    text: "Thương hiệu cá nhân Tiktok Ads giúp bạn đẩy nhanh quá trình xây nhân hiệu/nhãn hiệu. Lượng người quan tâm là người dùng thực sự.",
  },
];

export const dataTitokSection = [
  {
    title: "01. Quảng Cáo Chuyển Đổi TikTok",
    content:
      "Với sự trỗi dậy của sàn thương mại điện tử Tiktok, hoạt động quảng cáo video ngắn dẫn traffics về mục tiêu xem sản phẩm, mua hàng tiktok shop sẽ sớm trở thành xu hướng chủ đạo trong thời gian tới.",
    img: img_ctnc1,
  },
  {
    title: "02. Quảng Cáo Tương Tác Với Cộng Đồng",
    content:
      "Tập trung vào mô hình quảng cáo chuyển đổi landing page. Mục đích khách hàng điền form để lại thông tin tư vấn sau khi xem trang đích hay thực hiện một hành động chuyển đổi như click vào nút kêu gọi hành động Zalo, Messengers, gọi điện.",
    img: img_ctnc2,
  },
  {
    title: "03. Quảng Cáo Livestream Shopping Ads",
    content:
      "Bán hàng livestream và quảng cáo livestream là loại hình chủ đạo cho hoạt động kéo doanh số trên nền tảng TikTok. Kết hợp với video shopping ads sẽ giúp bạn tăng trưởng doanh số và đẩy nhanh hoạt động ra đơn.",
    img: img_ctnc3,
  },
  {
    title: "04. Quảng Cáo Video Shopping Ads",
    content:
      "Với sự phát triển nhanh chóng của sàn thương mại điện tử TikTok. Hoạt động quảng cáo video ngắn dẫn traffics về mục tiêu xem sản phẩm, mua hàng trên TikTok Shop đang là xu hướng chủ đạo ở nền Tik Tok trong những năm trở lại đây.",
    img: img_ctnc4,
  },
  {
    title: "05. Quảng Cáo Ngoại Sàn TikTok Ads",
    content:
      "Mục tiêu của dịch vụ này là kéo thật nhiều lượng users quan tâm từ nền tảng TikTok về trang shop trên kênh Shopee/Lazada. Tăng trưởng doanh số, lợi nhuận trên các nền tảng thương mại điện tử.",
    img: img_ctnc5,
  },
  {
    title: "06. Quảng Cáo Nhắn Tin TikTok",
    content:
      "Tiktok đem đến giải pháp quảng bá nhắn tin cho nhóm khách hàng cần phải tư vấn nhiều và chuyên sâu như Spa, Thẩm Mỹ Viện, nhóm sản phẩm giá trị cao, nhóm khách hàng dịch vụ doanh nghiệp (B2B)...",
    img: img_ctnc5,
  },
];
