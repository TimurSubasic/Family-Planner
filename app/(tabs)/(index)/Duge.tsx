import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

interface MarkedDates {
  [date: string]: {
    selected: boolean;
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
  };
}

const Duge = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  const handleDayPress = (day: DateData) => {
    if (!startDate || (startDate && endDate)) {
      // Start new selection
      setStartDate(day.dateString);
      setEndDate("");
      setMarkedDates({
        [day.dateString]: {
          selected: true,
          startingDay: true,
          endingDay: true,
          color: "#000",
        },
      });
    } else {
      // Complete the selection
      const newEndDate = day.dateString;
      setEndDate(newEndDate);

      // Create marked dates object for the range
      const dates: MarkedDates = {};
      let currentDate = new Date(startDate);
      const lastDate = new Date(newEndDate);

      while (currentDate <= lastDate) {
        const dateString = currentDate.toISOString().split("T")[0];
        dates[dateString] = {
          selected: true,
          color: "#000",
          startingDay: dateString === startDate,
          endingDay: dateString === newEndDate,
        };
        currentDate.setDate(currentDate.getDate() + 1);
      }

      setMarkedDates(dates);
    }
  };

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View className="p-5">
          <View className="border border-slate-600 rounded-lg bg-white">
            <Calendar
              style={{
                backgroundColor: "transparent",
              }}
              onDayPress={handleDayPress}
              markedDates={markedDates}
              markingType="period"
              enableSwipeMonths={true}
              theme={{
                todayTextColor: "#000",
                selectedDayBackgroundColor: "#000",
                selectedDayTextColor: "#fff",
              }}
            />
            <View className="felx w-full items-center justify-center">
              <TouchableOpacity className="w-[80%] my-5 rounded-lg bg-slate-800 p-5">
                <Text className="text-white font-bold text-xl text-center">
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Members View Box */}
          <View className="mt-5 border border-slate-600 rounded-lg bg-white">
            <Text className="text-3xl font-semibold text-center my-5">
              Members
            </Text>

            <View className="flex flex-col items-center justify-center gap-5 my-3">
              {members.map((users, index) => (
                <View
                  key={index}
                  className={` w-full flex items-start justify-start `}
                  style={{ backgroundColor: users.color }}
                >
                  <Text className="font-semibold text-xl bg-white p-3 w-[35%] rounded-r-3xl">
                    {users.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Duge;
