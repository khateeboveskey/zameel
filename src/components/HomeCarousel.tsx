import React from "react";

import { Carousel } from "./index";

const HomeCarousel: React.FC = () => {
  // Sample data with Arabic content
  const carouselData = [
    {
      id: "1",
      imageUrl: "https://picsum.photos/id/1018/800/400",
      title: "مرحباً بك في تطبيق زميل",
      description: "تطبيق يساعدك على تنظيم جدولك الدراسي والأنشطة والامتحانات"
    },
    {
      id: "2",
      imageUrl: "https://picsum.photos/id/1015/800/400",
      title: "إدارة الجدول الدراسي",
      description: "تابع محاضراتك وجدولك الدراسي بسهولة وبساطة"
    },
    {
      id: "3",
      imageUrl: "https://picsum.photos/id/1019/800/400",
      title: "الكتب والمراجع",
      description: "احصل على جميع الكتب والمراجع الدراسية في مكان واحد"
    },
    {
      id: "4",
      imageUrl: "https://picsum.photos/id/1022/800/400",
      title: "الأنشطة والفعاليات",
      description: "تابع جميع الأنشطة والفعاليات المدرسية والجامعية"
    },
    {
      id: "5",
      imageUrl: "https://picsum.photos/id/1035/800/400",
      title: "الامتحانات والتقييمات",
      description: "تنظيم مواعيد الامتحانات والتقييمات بشكل فعال"
    }
  ];

  return <Carousel data={carouselData} />;
};

export default HomeCarousel;
