import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const handlePress = () => {
    router.push("/Duge");
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="p-5 flex flex-col flex-1 items-center justify-between w-full">
        <View className="w-full flex flex-col gap-5">
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

        {/** Buttons box */}
        <View className="flex flex-col w-full items-center justify-center gap-5">
          <TouchableOpacity
            onPress={() => router.push("/(auth)/signUp")}
            className="w-full rounded-lg bg-slate-800 p-5"
          >
            <Text className="text-white font-bold text-xl text-center">
              Create new Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
