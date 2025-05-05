import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Replace with the user's email

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSend = async () => {
    {
      /**const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
      },
    }); */
    }
  };

  const handleVerify = () => {};

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col flex-1 w-full items-center justify-between p-5">
        <View className="flex flex-col w-full items-center justify-center gap-5">
          <Text className="text-center uppercase font-bold text-2xl">
            Welcome to Family Planner
          </Text>
          <Text className="text-center text-lg font-medium">
            Please enter your email and we will send you a verification code to
            that email address!
          </Text>

          <View className="flex w-full items-start justify-center gap-10">
            <View className="flex w-full items-start justify-center gap-5">
              <Text className="font-semibold text-lg">Email:</Text>

              <View className="flex flex-row gap-2 w-full">
                <TextInput
                  className="p-5 border border-slate-600 rounded-lg w-[65%] "
                  placeholder="your@email.com"
                  inputMode="email"
                  placeholderTextColor={"#475569"}
                  onChangeText={(newText) => setEmail(newText)}
                  defaultValue={email}
                />
                <TouchableOpacity
                  onPress={handleSend}
                  className="flex-1 rounded-lg bg-slate-800 p-5"
                >
                  <Text className="text-white font-bold text-xl text-center">
                    Send
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex w-full items-start justify-center gap-5">
              <Text className="font-semibold text-lg">
                Your Verification Code:
              </Text>

              <View className="flex flex-row gap-2 w-full">
                <TextInput
                  className="p-5 border border-slate-600 rounded-lg w-[65%] "
                  placeholder="123456"
                  inputMode="numeric"
                  placeholderTextColor={"#475569"}
                  onChangeText={(newText) => setCode(newText)}
                  defaultValue={code}
                />
                <TouchableOpacity
                  onPress={handleVerify}
                  className="flex-1 rounded-lg bg-slate-800 p-5"
                >
                  <Text className="text-white font-bold text-xl text-center">
                    Verify
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
