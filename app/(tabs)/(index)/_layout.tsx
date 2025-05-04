import { Stack } from "expo-router";

export default function IndexLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Duge"
        options={{
          headerBackTitle: "Back",
          headerShown: true,
          headerTintColor: "#1e293b",
        }}
      />
    </Stack>
  );
}
