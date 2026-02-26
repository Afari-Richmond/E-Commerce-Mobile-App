import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BANNERS } from "../../assets/assets";
import Header from "../components/Header";

const { width } = Dimensions.get("window");

export default function Home() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header title="forever" showMenu showCart showLogo />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
        {/* Banner Slider */}
       
<ScrollView
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  className="w-full rounded-xl h-48 "
  scrollEventThrottle={16}
>
  {BANNERS.map((banner, index) => (
    <View
      key={index}
      className=" relative w-full h-48 bg-gray-200 overflow-hidden"
      style={{ width: width - 32 }}
    >
      <Image
        source={{ uri: banner.image }}
        className="w-full h-full"
        resizeMode="cover"
      />

      {/* Dark Overlay */}
      <View className="absolute inset-0 bg-black/40 rounded-2xl" />

      {/* Text Content */}
      <View className="absolute bottom-6 left-5 right-5 z-10">
        <Text className="text-white text-3xl font-bold">
          {banner.title}
        </Text>
        <Text className="text-white text-base font-medium mt-1">
          {banner.subtitle}
        </Text>

        <TouchableOpacity className="mt-3 bg-primary px-4 py-2 rounded-lg self-start">
          <Text className="text-white font-bold text-sm">
            Get Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ))}
</ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}