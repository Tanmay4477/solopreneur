import { Pressable, Text, TouchableOpacity } from "react-native";

type ButtonType = {
    children: string;
    onPress: () => void;
    variant?: "default" | "black" | "white";
}



export default function Button({children, onPress, variant="default"}: ButtonType) {
  const getButtonStyle = () => {
    switch(variant){
      case "default":
        return "bg-normal";
      case "black":
        return "bg-black";
      case "white":
        return "bg-white"
    }
  };

  const getButtonText = () => {
    switch(variant){
      case "default":
        return "text-black";
      case "black":
        return "text-white";
      case "white":
        return "text-black"
    }
  };

  return (
    <TouchableOpacity 
      className={`${getButtonStyle()} rounded-lg w-full py-4`} 
      onPress={onPress}
    >
      <Text className={`${getButtonText()} text-black font-bold text-center text-base`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}