import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [text, setText] = useState("");
  const [booking, setBooking] = useState(true);
  const [members, setMembers] = useState(true);

  const toggleBooking = () => setBooking((previousState) => !previousState);

  const toggleMembers = () => setMembers((previousState) => !previousState);

  const colors = [
    "#e6194B",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#42d4f4",
    "#f032e6",
    "#fabed4",
    "#469990",
    "#dcbeff",
    "#9A6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#000075",
    "#a9a9a9",
    "#ffffff",
    "#000000",
  ];

  const handleDelete = () => {
    Alert.alert(
      "Delete Account",
      "This action removes all of your data, are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "You are about to Log Out of your account, are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View className="p-5">
          <View className="w-full flex flex-row items-center justify-between mb-10 mt-5">
            <Text className="text-xl font-bold">Welcome, Timur</Text>
            <View className={`h-12 w-12 rounded-full bg-[#4363d8]`} />
          </View>

          <View className="flex flex-col items-center justify-center gap-10 w-full">
            {/**change username box */}
            <View className="felx flex-col items-start justify-center gap-3 w-full">
              <Text className="text-xl font-semibold">Change username: </Text>
              <TextInput
                className="p-5 border border-slate-600 rounded-lg w-full"
                placeholder="New username..."
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
              />
            </View>

            {/**change user color box */}
            <View className="felx flex-col items-start justify-center gap-3 w-full">
              <Text className="text-xl font-semibold">Change Color:</Text>

              <View className="flex flex-row flex-wrap justify-between w-full">
                {colors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-[31%] h-16 mb-2 rounded-lg border border-gray-300"
                  />
                ))}
              </View>
            </View>

            {/**Notifications box */}
            <View className="felx flex-col items-start justify-center gap-3 w-full">
              <Text className="text-xl font-semibold">Notifications: </Text>

              <View className="flex flex-row w-full items-center justify-between">
                <Text className="text-lg font-semibold">New Bookings</Text>

                <Switch
                  trackColor={{ false: "#6b7280", true: "#2563eb" }}
                  thumbColor={booking ? "#1e293b" : "#d1d5db"}
                  ios_backgroundColor="#6b7280"
                  onValueChange={toggleBooking}
                  value={booking}
                />
              </View>
              <View className="w-full h-1 bg-slate-600 rounded-lg" />

              <View className="flex flex-row w-full items-center justify-between">
                <Text className="text-lg font-semibold">New Members</Text>

                <Switch
                  trackColor={{ false: "#6b7280", true: "#2563eb" }}
                  thumbColor={members ? "#1e293b" : "#d1d5db"}
                  ios_backgroundColor="#6b7280"
                  onValueChange={toggleMembers}
                  value={members}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity className="w-full my-5 rounded-lg bg-slate-800 p-5">
            <Text className="text-white font-bold text-xl text-center">
              Save
            </Text>
          </TouchableOpacity>

          {/**Danger zone */}
          <View className="mt-10 flex flex-col items-center justify-center w-full">
            <View className=" w-full bg-red-600 h-1.5 rounded-t-lg" />
            <View className=" w-full bg-slate-800 h-1" />
            <View className=" w-full bg-red-600 h-1.5 rounded-b-lg" />
            <TouchableOpacity
              onPress={handleDelete}
              className="p-5 bg-red-600 rounded-lg w-full mt-5"
            >
              <Text className="text-center text-white font-bold text-xl ">
                Delete Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              className="p-5 bg-red-600 rounded-lg w-full mt-5"
            >
              <Text className="text-center text-white font-bold text-xl ">
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Settings;
