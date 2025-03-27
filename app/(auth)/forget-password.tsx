import { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Button from '@/src/components/ui/Button';
import { useRouter } from 'expo-router';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleResetPassword = () => {
        console.log("Reset password pressed", { email });
    };

    const handleBackToLogin = () => {
        router.push('/(auth)/login');
    };

    return (
        <SafeAreaView className='flex-1 bg-black'>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className='flex-1'
            >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View className='flex-1 justify-between px-6 py-44'>
                        <View className='items-center mt-12 mb-8'>
                            <Text className='text-white font-bold text-4xl tracking-tighter mb-2'>Forgot Password</Text>
                            <Text className='text-gray-400 text-center'>Enter your email to receive a password reset link</Text>
                        </View>
                        
                        <View className='w-full'>
                            <View className='mb-6'>
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
                            
                            <View className='mb-8'>
                                <Button variant='white' onPress={handleResetPassword}>Reset Password</Button>
                            </View>
                        </View>
                        
                        <View className='items-center'>
                            <TouchableOpacity onPress={handleBackToLogin}>
                                <Text className='text-normal font-bold'>Back to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
