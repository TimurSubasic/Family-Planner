import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setDataEmail, setDataUsername } from "./userData";

// Replace with the user's email

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSend = async () => {
    // OTP send logic from supabase
    // ...
    // add username from here to users table username field

    setDataEmail(email);
    setDataUsername(username);

    {
      /**const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
      },
    }); */
    }

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
            Please fill out the form to Sign-Up
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

            <Text className="font-semibold text-lg">Username:</Text>

            <TextInput
              className="p-5 border border-slate-600 rounded-lg w-full "
              placeholder="Enter your username"
              placeholderTextColor={"#475569"}
              onChangeText={(newText) => setUsername(newText)}
              defaultValue={username}
            />
          </View>

          <View className="mt-10 flex items-center justify-center flex-row w-full">
            <Text className=" text-lg font-semibold">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/logIn")}>
              <Text className="text-blue-500 text-xl font-bold"> Log-In</Text>
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

export default SignUp;
