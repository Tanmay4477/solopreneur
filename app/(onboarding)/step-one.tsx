import { Asset } from 'expo-asset';
import Onboarding from "@/src/components/Onboarding";
import { useRouter } from "expo-router";

export default function StepOne() {
    const router = useRouter();
    const localImage = Asset.fromModule(require("../../assets/images/emoji2.png")).uri;
    const nextButtonFn = () => {
        router.push("/(onboarding)/step-two")
    }
    const title = "Step into the World of Learning Experience"
    const description = "Lorem ipsum is the next world of doing things that you want and experimenting the things you like."

    return (
        <Onboarding index={1} localImage={localImage} title={title} description={description} firstBtnFn={nextButtonFn}/>
    )
}