import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const handlePress = () => {
    router.push("/Duge");
  };

  return (
    <SafeAreaView>
      <View className="p-5 w-full flex flex-col gap-5">
        <Text className="text-center uppercase font-bold text-2xl my-5">
          Your Homes
        </Text>
        <TouchableOpacity
          onPress={handlePress}
          className="p-4 rounded-lg bg-white shadow-lg w-full flex flex-row items-center justify-between border border-slate-600"
        >
          <Text className="text-xl font-semibold">Duge</Text>
          <FontAwesome size={28} name="calendar" color={"#fffff"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
