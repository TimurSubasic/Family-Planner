import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Family = () => {
  const members = [
    { name: "Timur", color: "#4363d8" }, //blue
    { name: "Mirza", color: "#3cb44b" }, //green
    { name: "Emira", color: "#fabed4" }, //pink
    { name: "Adnan", color: "#000075" }, //navy
    { name: "Ridvan", color: "#469990" }, //teal
    { name: "Nadja", color: "#911eb4" }, //purple
    { name: "Aida", color: "#e6194B" }, //red
    { name: "Sakib", color: "#bfef45" }, //lime
  ];

  const handleLeave = () => {
    Alert.alert(
      "Leave Family",
      "You are about to Leave your family, are you sure you want to continue?",
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
          {/* Members View Box */}
          <View className="mt-5 border border-slate-600 rounded-lg bg-white">
            <Text className="text-3xl font-semibold text-center my-5">
              Family Members
            </Text>

            <View className="flex flex-col items-center justify-center gap-5 my-3">
              {members.map((users, index) => (
                <View
                  key={index}
                  className={` w-full flex items-start justify-start `}
                  style={{ backgroundColor: users.color }}
                >
                  <Text className="font-semibold text-xl bg-white p-3 w-[35%] rounded-r-full">
                    {users.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/**Buttons box */}
          <View className="w-full flex flex-col items-center justify-center gap-5 mt-10">
            <TouchableOpacity className="w-full rounded-lg bg-slate-800 p-5">
              <Text className="text-center text-white font-bold text-xl">
                Add Members
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLeave}
              className="p-5 bg-red-600 rounded-lg w-full "
            >
              <Text className="text-center text-white font-bold text-xl ">
                Leave Family
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Family;
