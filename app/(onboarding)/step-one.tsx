import { SafeAreaView, View, Text, Image, Pressable } from "react-native";
import { Asset } from 'expo-asset';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from "@/src/components/ui/Button";

export default function StepOne() {

    const localImage = Asset.fromModule(require("../../assets/images/emoji2.png")).uri;

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-purple-600 p-2">
            <View className="flex-1 justify-center items-center bg-black gap-20 p-4">
                <View className="flex bg-pink-500 w-full items-center justify-center">
                    <Image source={{ uri: localImage }} className="w-56 h-56 object-contain" />
                </View>
                <View className="flex justify-center items-center gap-4 bg-blue-500">
                    <Text className="text-normal font-bold text-2xl text-center">Step Into A World Of Learning Excellence</Text>
                    <Text className="text-white text-center">Lorem Ipsum dolor ns is lms ksnc kscbsdkjc ksdcbsk kjdscbsk</Text>
                </View>
                <View className="flex gap-4 items-center justify-center bg-red-500 w-full">
                    <View className="flex flex-row">
                        <MaterialCommunityIcons name="circle-medium" size={24} color="#b1e346" />
                        <MaterialCommunityIcons name="circle-medium" size={24} color="white" />
                        <MaterialCommunityIcons name="circle-medium" size={24} color="white" />
                        <MaterialCommunityIcons name="circle-medium" size={24} color="white" />
                    </View>
                    <Button onPress={() => console.log("presses")}>Next</Button>
                    <Pressable className="w-full">
                        <Text className="text-white">Skip</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}