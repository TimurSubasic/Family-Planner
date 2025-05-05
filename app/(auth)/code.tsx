import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDataEmail } from "./userData";

const Code = () => {
  const [code, setCode] = useState("");

  const email = getDataEmail();

  const handleConfirm = async () => {
    // supabase check if code is OK
    // Create account if it doesn't exist
    // log user in if account does exist

    {
      /** const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email: email,
      token: code,
      type: "email",
    });*/
    }

    router.push("/(tabs)/(index)");

    // this is for testing

    // replace router.push with getting the session and have the main app/_layout.tsx render the home page once the session is active
  };

  const handleResend = () => {
    // add timer for this button so it can only be used once in 60 seconds
    // supabase resend code
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
            <Text className="font-semibold text-lg">Your 6-digit code:</Text>

            <View className="flex flex-row gap-2 w-full">
              <TextInput
                className="p-5 border border-slate-600 rounded-lg w-[55%] "
                placeholder="123456"
                placeholderTextColor={"#475569"}
                onChangeText={(newText) => setCode(newText)}
                defaultValue={code}
              />
              <TouchableOpacity
                onPress={handleConfirm}
                className="flex-1 rounded-lg bg-slate-800 p-5"
              >
                <Text className="text-white font-bold text-xl text-center">
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
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
          onPress={handleResend}
          className="w-full rounded-lg bg-slate-800 p-5 mb-10"
        >
          <Text className="text-white font-bold text-xl text-center">
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Code;
