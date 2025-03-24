import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Button from "./ui/Button";
import { useRouter } from "expo-router";

type OnboardingType = {
    index: number,
    localImage: string,
    title: string,
    description: string,
    firstBtnFn: () => void,
    secondBtnFn?: () => void,
}

export default function Onboarding({index, localImage, title, description, firstBtnFn, secondBtnFn}: OnboardingType){
    const totalSteps = 5;
    const router = useRouter();

    const handleSecondBtn = () => {
        secondBtnFn?.() || router.replace("/(auth)/main")
    };

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-black p-2">
            <View className="flex-1 justify-center items-center gap-20 p-4 w-full">
                <View className="flex w-full items-center justify-center">
                    <Image source={{ uri: localImage }} className="w-56 h-56 object-contain" />
                </View>
                <View className="flex justify-center items-center gap-4">
                    <Text className="text-dark font-bold text-2xl text-center">{title}</Text>
                    <Text className="text-white text-center px-12 tracking-wide font-normal text-base">{description}</Text>
                </View>
                <View className="flex gap-2 items-center justify-center w-full px-8">
                    <View className="flex flex-row justify-center">
                        {[...Array(totalSteps)].map((_, i) => (
                            <MaterialCommunityIcons key={i} name="circle-medium" size={24} color={i === index-1 ? "#b1e346" : "white"} />
                        ))}
                    </View>
                    <Button onPress={firstBtnFn}>Next</Button>
                    <Pressable onPress={handleSecondBtn} className="w-full flex items-center justify-center py-4">
                        <Text className="text-white text-center">Skip</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}