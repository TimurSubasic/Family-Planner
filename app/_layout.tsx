import { Buffer } from "buffer";
import { Stack } from "expo-router";
import process from "process";
import "react-native-url-polyfill/auto";
import "../global.css";

global.Buffer = Buffer;
global.process = process;

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
