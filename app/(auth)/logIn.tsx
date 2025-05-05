import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LogIn = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    // OTP send logic from supabase
    // ...

    router.push("/(auth)/code");
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col flex-1 w-full items-center justify-between p-5">
        <View className="flex flex-col w-full items-center justify-center gap-5">
          <Text className="text-center uppercase font-bold text-2xl">
            Welcome to Family Planner
          </Text>
          <Text className="text-center text-lg font-medium">
            Please fill out the form to Log-In
          </Text>

          <View className="flex w-full items-start justify-center gap-5">
            <Text className="font-semibold text-lg">Email:</Text>

            <TextInput
              className="p-5 border border-slate-600 rounded-lg w-full "
              placeholder="your@email.com"
              placeholderTextColor={"#475569"}
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
            />
          </View>

          <View className="flex mt-10 items-center justify-center flex-row w-full">
            <Text className=" text-lg font-semibold">
              Don&apos;t have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-blue-500 text-xl font-bold"> Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSend}
          className="w-full rounded-lg bg-slate-800 p-5 mb-10"
        >
          <Text className="text-white font-bold text-xl text-center">
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
