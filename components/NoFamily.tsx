import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Dialog from "react-native-dialog";
import { SafeAreaView } from "react-native-safe-area-context";

type NoFamilyProps = {
  changeInFamily: () => void;
};

const NoFamily = ({ changeInFamily }: NoFamilyProps) => {
  const [code, setCode] = useState("");

  const [name, setName] = useState("");

  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = () => {
    // The user has pressed the "Create" button, so here you can do your own logic.
    // ...Your logic

    changeInFamily();

    setVisible(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1">
        <View className="p-5 flex-1 flex flex-col items-center justify-between">
          <View className="w-full">
            <View className="flex flex-col w-full items-start justify-center gap-3">
              <Text className="text-xl font-semibold">Join via Code:</Text>
              <View className="flex flex-row gap-2 w-full">
                <TextInput
                  className="p-5 border border-slate-600 rounded-lg w-[65%] "
                  placeholder="Code"
                  placeholderTextColor={"#475569"}
                  onChangeText={(newText) => setCode(newText)}
                  defaultValue={code}
                />
                <TouchableOpacity
                  onPress={changeInFamily}
                  className="flex-1 rounded-lg bg-slate-800 p-5"
                >
                  <Text className="text-white font-bold text-xl text-center">
                    Join
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex w-full items-center justify-center my-10">
            <FontAwesome5 size={160} name="users-slash" color={"#1e293b"} />
            <Text className="text-center text-slate-800 uppercase font-bold text-2xl my-5 ">
              You don&apos;t have a Family
            </Text>
          </View>

          <View className="flex flex-col gap-5 w-full items-center justify-center">
            <TouchableOpacity
              onPress={showDialog}
              className="w-full rounded-lg bg-slate-800 p-5"
            >
              <Text className="text-white font-bold text-xl text-center">
                Create a Family
              </Text>
            </TouchableOpacity>

            {/** Dialog box */}
            <Dialog.Container visible={visible}>
              <Dialog.Title>Create Family</Dialog.Title>
              <Dialog.Description>Choose your family name:</Dialog.Description>
              <Dialog.Input onChangeText={setName} />
              <Dialog.Button label="Cancel" onPress={handleCancel} />
              <Dialog.Button label="Create" onPress={handleCreate} />
            </Dialog.Container>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NoFamily;
