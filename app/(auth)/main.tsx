import { Asset } from 'expo-asset';
import Onboarding from "@/src/components/Onboarding";
import { useRouter } from "expo-router";

export default function Main() {
    const router = useRouter();
    const localImage = Asset.fromModule(require("../../assets/images/emoji2.png")).uri;
    const firstBtnFn = () => {
        router.replace("/(auth)/register")
    }
    const secondBtnFn = () => {
        router.push("/(auth)/login")
    }
    const title = "It is not just Learning, It is a Promise"
    const description = "Main Page of deciding register and login and ipsum is the next world of doing things that you want and experimenting the things you like."

    return (
        <Onboarding index={5} localImage={localImage} title={title} description={description} firstBtnFn={firstBtnFn} secondBtnFn={secondBtnFn}/>
    )
}