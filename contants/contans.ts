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
    href: ROUTES.SERVICE_ACTIVE + ROUTES.ADS_GROSS_PLATFORM,
  },
  {
    title: "Sản xuất nội dung",
    description: `No content`,
    img: service5,
    href: ROUTES.SERVICE_ACTIVE + ROUTES.CONTENT_PRODUCTION,
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

export const adsCrossPlatform = [
  {
    img: takecarefb1,
    title: "Tiếp cận khách hàng lớn",
    text: "Số lượng thành viên của zalo lớn, gần 80 triệu thành viên - trong đó có 60% trong độ tuổi 18-25. Một tệp khách hàng lý tưởng.",
  },
  {
    img: takecarefb2,
    title: "Đơn giản tiện dụng",
    text: "Thao tác tạo quảng cáo cực kỳ đơn giản, quản lý dễ dàng, nạp tiền nhanh chóng.",
  },
  {
    img: takecarefb3,
    title: "Hiệu quả tức thì",
    text: "Nền tảng tập trung vào hiệu quả của quảng cáo ngay lập tức, bạn chỉ cần trả tiền nhận được hành động cụ thể.",
  },
  {
    img: takecarefb4,
    title: "Hiển thị thông minh",
    text: "Công nghệ AI giúp hiển thị quảng cáo tương thích với hành vi của người tiêu dùng",
  },
];

export const adsCrossPlatform1 = [
  {
    img: takecarefb1,

    text: "Tiết kiệm được chi phí đáng kể  trong tiến trình xây dựng kế hoạch marketing thương hiệu toàn diện.",
  },
  {
    img: takecarefb2,
 
    text: "Được sử dụng nhân sự chất lượng bên ngoài với thời lượng làm việc đảm bảo.",
  },
  {
    img: takecarefb3,

    text: "Đạt được mục tiêu đề ra trong thời gian ngắn, hiệu quả cao. Không cần mất quá nhiều công sức thực hiện.",
  },
  {
    img: takecarefb4,
    text: "Không đau đầu với bài toán tuyển dụng, đào tạo, phát triển nhân sự Marketing.",
  },
  {
    img: takecarefb4,
    text: "Làm việc với đội ngũ Marketing chất lượng được đào tạo bài bản và kinh nghiệm thực chiến cao.",
  },
];

export const contentProductionCardData = [
  {
    img: takecarefb1,
    title: "Xây dựng, duy trì văn hóa doanh nghiệp.",
  },
  {
    img: takecarefb1,
    title: "Thiết kế ấn phẩm quảng cáo chuyên nghiệp, đẹp, ấn tượng",
  },
  {
    img: takecarefb2,
    title: "Lan tỏa, tăng độ nhận diện thương hiệu trên thị trường",
  },
  {
    img: takecarefb3,
    title:
      "Sáng tạo ý tưởng đổi mới để doanh nghiệp tối ưu hiệu quả kinh doanh.",
  },
  {
    img: takecarefb4,
    title:
      "Truyền tải thông điệp thương hiệu, giúp khách hàng hiểu rõ hơn về công ty, các hoạt động, sản phẩm, văn hóa của doanh nghiệp.",
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

export const dataContentProductionSection4 = [
  {
    title: "",
    content:
      "100% Website thành công tiếp cận khách hàng, đảm bảo chuẩn SEO, thân thiện với người dùng và tương thích trên mọi thiết bị.",
    img: img_ctnc1,
  },
  {
    title: "",
    content:
      "95% khách hàng tin tưởng và hài lòng về kết quả kinh doanh đạt được. 90% tỉ lệ khách hàng quay lại và sử dụng thêm các dịch vụ khác do TechNam cung cấp.",
    img: img_ctnc2,
  },
  {
    title: "",
    content:
      "Đội ngũ nhân viên có chuyên môn cao, kinh nghiệm dày dặn và tận tâm với nghề, mang đến trải nghiệm dịch vụ tốt nhất cho khách hàng.",
    img: img_ctnc3,
  },
]
export const dataGrossPlatformSection = [
  {
    title: "01. QC Zalo Form",
    content:
      "Hỗ trợ doanh nghiệp thực hiện mục tiêu thu thập dữ liệu khách hàng tiềm năng một cách đơn giản",
    img: img_ctnc1,
  },
  {
    title: "02. Quảng cáo Website",
    content:
      "Tăng lượng truy cập về website hoặc landing page. Chuyển người dùng đến liên kết mua hàng, liên hệ tư vấn hoặc kích thích tỷ lệ tải đối với ứng dụng di động.",
    img: img_ctnc2,
  },
  {
    title: "03. Zalo Official Account",
    content:
      "Bán hàng livestream và quảng cáo livestream là loại hình chủ đạo cho hoạt động kéo doanh số trên nền tảng TikTok. Kết hợp với video shopping ads sẽ giúp bạn tăng trưởng doanh số và đẩy nhanh hoạt động ra đơn.",
    img: img_ctnc3,
  },
  {
    title: "04. Quảng cáo Video",
    content:
      "Tiếp cận khách hàng một cách trực quan, sinh động và sáng tạo hơn. Quảng cáo hỗ trợ tăng nhận diện thương hiệu, điều hướng người dùng về trang bán hàng để chăm sóc.",
    img: img_ctnc4,
  },
  {
    title: "05. Quảng cáo sản phẩm",
    content:
      "Góp phần tăng tương tác khách hàng vào trang thông tin sản phẩm trên Zal Offical Account. Giúp quảng cáo sản phẩm hiệu quả hơn, tăng tỷ lệ chốt đơn .",
    img: img_ctnc5,
  },
  {
    title: "06. Quảng cáo bài viết OA",
    content:
      "Hình thức quảng cáo này tích hợp sẵn trên hệ sinh thái Zalo. Hỗ trợ phát triển sản phẩm thương hiệu kèm với tăng tỷ lệ chuyển đổi.",
    img: img_ctnc5,
  },
];


export const mktSolutionDataSection=[
  {
    title: "01. Phân tích chỉ số doanh nghiệp",
    content:
      "Thể hiện toàn diện về chiến dịch Marketing của các doanh nghiệp trong thời gian qua. Cho biết những gì hiệu quả và những gì cần cải thiện để điều chỉnh lại chiến dịch Marketing của mình.",
    img: img_ctnc1,
  },
  {
    title: "02. Lên chiến lược campaign",
    content:
      "Nắm rõ cái nhìn của khách hàng tiềm năng và đối thủ, qua đó đánh giá đúng kênh phân phối và lập đúng kế hoạch marketing.",
    img: img_ctnc2,
  },
  {
    title: "03. Lên chiến lược tối ưu quảng cáo",
    content:
      "Xác định mục tiêu của chiến dịch, chọn đúng đối tượng, tạo quảng cáo hấp dẫn và theo dõi kết quả để thực hiện các điều chỉnh cần thiết.",
    img: img_ctnc3,
  },
  {
    title: "04. Lên kế hoạch sản xuất content định kỳ",
    content:
      "Tạo và xây dựng nội dung fanpage cho shop và doanh nghiệp, content hình ảnh chất lượng và chuyên nghiệp, phân phối đến khách hàng thường xuyên.",
    img: img_ctnc4,
  },
  {
    title: "05. Thu hút khách hàng mục tiêu",
    content:
      "Mỗi doanh nghiệp sẽ được đội ngũ chuyên viên tư vấn tệp marketing riêng, với những giải pháp tiếp cận khách hàng riêng và tiết kiệm chi phí đầu tư.",
    img: img_ctnc5,
  },
  {
    title: "06. Khẳng định thương hiệu",
    content:
      "Hoàn thiện hệ thống Marketing, định hình và khẳng định vị thế của doanh nghiệp trong thị trường. Xây dựng ấn tượng thương hiệu theo đúng chiến lược đã đề ra.",
    img: img_ctnc5,
  },
]