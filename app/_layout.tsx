import { Stack } from "expo-router";
import "./global.css"; // Looks in the same folder (app/)

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}} />;
}
