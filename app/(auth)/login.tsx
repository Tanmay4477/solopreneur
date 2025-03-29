import { useState } from 'react';
import { Image, SafeAreaView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Button from '@/src/components/ui/Button';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '@/src/redux/slices/authSlice';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const router = useRouter();
    const dispatch = useDispatch();

    const loginFunction = () => {
        dispatch(loginStart());
        try {
            // my api call for login
            dispatch(loginSuccess({user: { id: 'id from the api', name: 'name from the api'}, token: 'token from the api'}));
            router.push('/(tabs)')
        } catch (error) {
            dispatch(loginFailure());
        }
        console.log("Login is pressed", { email, password, rememberMe });
    };

    const handleForgotPassword = () => {
        router.push('/(auth)/forget-password')
        console.log("Forgot password pressed");
    };

    const handleSignUp = () => {
        router.push('/(auth)/register');
        console.log("Sign up pressed");
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <SafeAreaView className='flex-1 bg-black'>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className='flex-1'
            >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View className='flex-1 justify-between px-6 py-8'>
                        <View className='items-center mt-12 mb-8'>
                            <Text className='text-white font-bold text-4xl tracking-tighter mb-2'>Log In</Text>
                            <Text className='text-gray-400 text-center'>Please sign in to your existing account</Text>
                        </View>
                        
                        <View className='w-full'>
                            <View className='mb-4'>
                                <Text className='text-gray-400 mb-2 text-sm'>Email</Text>
                                <View className='flex-row items-center border border-gray-700 rounded-lg px-4 py-3 bg-gray-900'>
                                    <Feather name="mail" size={16} color="#9CA3AF" />
                                    <TextInput
                                        placeholder="Enter your email"
                                        placeholderTextColor="#6B7280"
                                        className='ml-2 flex-1 text-white'
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                </View>
                            </View>
                            
                            <View className='mb-2'>
                                <Text className='text-gray-400 mb-2 text-sm'>Password</Text>
                                <View className='flex-row items-center border border-gray-700 rounded-lg px-4 py-3 bg-gray-900'>
                                    <Feather name="lock" size={16} color="#9CA3AF" />
                                    <TextInput
                                        placeholder="Enter your password"
                                        placeholderTextColor="#6B7280"
                                        className='ml-2 flex-1 text-white'
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={secureTextEntry}
                                    />
                                    <TouchableOpacity onPress={toggleSecureTextEntry}>
                                        <Feather name={secureTextEntry ? "eye" : "eye-off"} size={16} color="#9CA3AF" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            <View className='flex-row justify-between items-center mb-6'>
                                <TouchableOpacity 
                                    className='flex-row items-center' 
                                    onPress={toggleRememberMe}
                                >
                                    <View className={`h-5 w-5 border rounded mr-2 items-center justify-center ${rememberMe ? 'bg-normal border-normal' : 'border-gray-600'}`}>
                                        {rememberMe && <Feather name="check" size={12} color="#FFFFFF" />}
                                    </View>
                                    <Text className='text-gray-400 text-sm'>Remember me</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={handleForgotPassword}>
                                    <Text className='text-normal text-sm'>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View className='mb-8'>
                                <Button variant='white' onPress={loginFunction}>Log In</Button>
                            </View>
                        </View>
                        
                        <View className='items-center'>
                            <View className='flex-row items-center mb-8'>
                                <Text className='text-gray-400'>Don't have an account? </Text>
                                <TouchableOpacity onPress={handleSignUp}>
                                    <Text className='text-normal font-bold'>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View className='items-center w-full'>
                                <Text className='text-gray-500 mb-6 relative text-center'>
                                    Or sign in with Google
                                </Text>
                                
                                <View className='flex-row justify-center'>
                                    <TouchableOpacity className='w-12 h-12 bg-gray-900 rounded-full items-center justify-center border border-gray-800'>
                                        <FontAwesome name="google" size={20} color="#FFFFFF" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}