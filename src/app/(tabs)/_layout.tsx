import { TouchableWithoutFeedback, View } from "react-native";
import { I18nManager } from "react-native";
import { Path, Svg } from "react-native-svg";
import { Bell, Folder, Home, User } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";

import { PRIMARY_COLOR } from "@/lib/constants";

// Force RTL layout
I18nManager.forceRTL(true);

export default function TabLayout() {
  const commonTabOptions = {
    tabBarActiveTintColor: PRIMARY_COLOR,
    tabBarStyle: {
      height: 65,
      alignItems: "center",
      borderTopWidth: 1,
      elevation: 0,
      shadowOpacity: 0
    },
    tabBarLabelStyle: {
      fontFamily: "Alexandria",
      fontSize: 11,
      marginTop: 3,
      fontWeight: "500"
    },
    headerShown: false,
    tabBarButton: (props) => (
      <TouchableWithoutFeedback {...props}>
        <View style={props.style}>{props.children}</View>
      </TouchableWithoutFeedback>
    )
  };

  return (
    <Tabs
      screenOptions={{
        ...commonTabOptions
      }}
      initialRouteName="index">
      <Tabs.Screen
        name="profile"
        options={{
          title: "الحساب",
          tabBarIcon: ({ focused, color }) => (
            <User
              size={22}
              color={focused ? PRIMARY_COLOR : color}
              fill={focused ? PRIMARY_COLOR : "transparent"}
              strokeWidth={2}
            />
          )
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "الإشعارات",
          tabBarIcon: ({ focused, color }) => (
            <Bell
              size={22}
              color={focused ? PRIMARY_COLOR : color}
              fill={focused ? PRIMARY_COLOR : "transparent"}
              strokeWidth={2}
            />
          )
        }}
      />

      <Tabs.Screen
        name="ai"
        options={{
          title: "الإشعارات",
          tabBarLabelStyle: {
            display: "none"
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: PRIMARY_COLOR,
                borderRadius: 50,
                padding: 14,
                marginBottom: focused ? 5 : 0,
                boxShadow: focused ? "0px 10px 15px " + PRIMARY_COLOR + "50" : "none"
              }}>
              <Svg
                width={40}
                height={40}
                viewBox="0 0 24 24">
                <Path
                  d="M12 2L2 12L12 22L22 12L12 2Z"
                  fill={"white"}
                  strokeWidth={1.5}
                />
              </Svg>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="files"
        options={{
          title: "الملفات",
          tabBarIcon: ({ focused, color }) => (
            <Folder
              size={22}
              color={focused ? PRIMARY_COLOR : color}
              fill={focused ? PRIMARY_COLOR : "transparent"}
              strokeWidth={2}
            />
          )
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarBadgeStyle: {
            backgroundColor: PRIMARY_COLOR,
            color: "white",
            fontFamily: "Alexandria",
            fontSize: 12,
            fontWeight: "500"
          },
          title: "الرئيسية",
          tabBarIcon: ({ focused, color }) => (
            <Home
              size={22}
              color={focused ? PRIMARY_COLOR : color}
              fill={focused ? PRIMARY_COLOR : "transparent"}
              strokeWidth={2}
            />
          )
        }}
      />
    </Tabs>
  );
}
