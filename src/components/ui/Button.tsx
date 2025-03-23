import { Pressable, Text, TouchableOpacity } from "react-native";

type ButtonType = {
    children: string;
    onPress: () => void;
}
export default function Button({children, onPress}: ButtonType) {
  return (
    <TouchableOpacity 
      className="bg-normal rounded-lg w-full" 
      onPress={onPress}
    >
      <Text className="text-black font-bold text-center text-base">
        {children}
      </Text>
    </TouchableOpacity>
  );
}