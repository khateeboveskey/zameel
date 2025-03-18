import { useState } from "react";
import { ScrollView, YStack } from "tamagui";

import { FormInput, Logo, PostCard, SeperatingText } from "@/components";
import HomeCarousel from "@/components/HomeCarousel";

export default function TabHome() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ScrollView paddingTop="$4">
      <Logo
        style={{
          margin: "auto"
        }}
        width={"25%"}
      />
      <FormInput
        noValidate
        id="search"
        label=""
        style={{
          marginVertical: 20,
          marginHorizontal: 18
        }}
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
        placeholder="ابحث..."
        value={searchTerm}
      />
      <HomeCarousel />
      <YStack
        marginBottom="$10"
        gap={"$3"}>
        {posts.map((post, index) => (
          <PostCard
            id={index}
            publisherName={post.publisherName}
            role={post.role}
            subject={post.subject}
            datetime={post.datetime}
            content={post.content}
            key={index}
          />
        ))}
        <SeperatingText>لقد وصلت لنهاية المحتوى</SeperatingText>
      </YStack>
    </ScrollView>
  );
}

const posts = [
  {
    publisherName: "علي أحمد",
    role: "مندوب",
    subject: "تطوير الويب",
    datetime: "5 يوليو - 3:00 م",
    content: "تم تسليم مشروع تطوير الويب"
  },
  {
    publisherName: "سارة محمد",
    role: "مندوب",
    subject: "تصميم الجرافيك",
    datetime: "6 يوليو - 1:00 م",
    content: "تم الانتهاء من تصميم الشعار"
  },
  {
    publisherName: "قسم التسويق",
    role: "إداري",
    subject: "كلية الهندسة والحاسبات",
    datetime: "7 يوليو - 11:00 ص",
    content: "تم إضافة قسم الذكاء الاصطناعي في كلية الهندسة والحاسبات."
  },
  {
    publisherName: "فاطمة علي",
    role: "مندوب",
    subject: "إدارة المشاريع",
    datetime: "8 يوليو - 2:00 م",
    content: "تمت مراجعة خطة المشروع"
  },
  {
    publisherName: "فاطمة علي",
    role: "مندوب",
    subject: "إدارة المشاريع",
    datetime: "8 يوليو - 2:00 م",
    content: "تمت مراجعة خطة المشروع"
  }
];
