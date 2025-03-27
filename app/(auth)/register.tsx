import { useState } from 'react';
import { Image, SafeAreaView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Button from '@/src/components/ui/Button';
import { useRouter } from 'expo-router';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const router = useRouter();
    
    // Common country codes
    const countryCodes = [
        { code: '+1', country: 'US/Canada' },
        { code: '+44', country: 'UK' },
        { code: '+91', country: 'India' },
        { code: '+61', country: 'Australia' },
        { code: '+86', country: 'China' },
        { code: '+49', country: 'Germany' },
        { code: '+33', country: 'France' },
        { code: '+81', country: 'Japan' },
        { code: '+7', country: 'Russia' },
        { code: '+55', country: 'Brazil' },
        { code: '+971', country: 'UAE' },
        { code: '+65', country: 'Singapore' },
    ];
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const registerFunction = () => {
        console.log("Register is pressed", { 
            name, 
            email, 
            phone: `${countryCode}${phone}`, 
            password, 
            confirmPassword, 
            agreeToTerms 
        });
    };

    const handleLogin = () => {
        router.push('/(auth)/login')
        console.log("Login pressed - navigate to login screen");
    };

    const handleGoogleSignup = () => {
        console.log("Google signup pressed");
    };

    const toggleAgreeToTerms = () => {
        setAgreeToTerms(!agreeToTerms);
    };

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const toggleConfirmSecureTextEntry = () => {
        setConfirmSecureTextEntry(!confirmSecureTextEntry);
    };

    return (
        <SafeAreaView className='flex-1 bg-black'>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className='flex-1'
            >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View className='flex-1 justify-between px-6 py-8'>
                        <View className='items-center mt-4 mb-6'>
                            <Text className='text-white font-bold text-4xl tracking-tighter mb-2'>Create Account</Text>
                            <Text className='text-gray-400 text-center'>Please fill in the details below</Text>
                        </View>
                        
                        <View className='w-full'>
                            <View className='mb-4'>
                                <Text className='text-gray-400 mb-2 text-sm'>Full Name</Text>
                                <View className='flex-row items-center border border-gray-700 rounded-lg px-4 py-3 bg-gray-900'>
                                    <Feather name="user" size={16} color="#9CA3AF" />
                                    <TextInput
                                        placeholder="Enter your full name"
                                        placeholderTextColor="#6B7280"
                                        className='ml-2 flex-1 text-white'
                                        value={name}
                                        onChangeText={setName}
                                    />
                                </View>
                                
                                {showCountryPicker && (
                                    <View className='absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-lg z-10 border border-gray-700 max-h-40'>
                                        <ScrollView>
                                            {countryCodes.map((country, index) => (
                                                <TouchableOpacity 
                                                    key={index}
                                                    className={`px-4 py-3 flex-row justify-between ${index < countryCodes.length - 1 ? 'border-b border-gray-700' : ''}`}
                                                    onPress={() => {
                                                        setCountryCode(country.code);
                                                        setShowCountryPicker(false);
                                                    }}
                                                >
                                                    <Text className='text-white'>{country.code}</Text>
                                                    <Text className='text-gray-400'>{country.country}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                )}
                            </View>
                            
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
                            
                            <View className='mb-4 relative'>
                                <Text className='text-gray-400 mb-2 text-sm'>Phone Number</Text>
                                <View className='flex-row items-center border border-gray-700 rounded-lg bg-gray-900'>
                                    <TouchableOpacity 
                                        className='flex-row items-center border-r border-gray-700 px-3 py-3'
                                        onPress={() => setShowCountryPicker(!showCountryPicker)}
                                    >
                                        <Text className='text-white'>{countryCode}</Text>
                                        <Feather 
                                            name={showCountryPicker ? "chevron-up" : "chevron-down"} 
                                            size={16} 
                                            color="#9CA3AF" 
                                            style={{marginLeft: 4}} 
                                        />
                                    </TouchableOpacity>
                                    
                                    <View className='flex-row items-center flex-1 px-3 py-3'>
                                        <Feather name="phone" size={16} color="#9CA3AF" />
                                        <TextInput
                                            placeholder="Enter your phone number"
                                            placeholderTextColor="#6B7280"
                                            className='ml-2 flex-1 text-white'
                                            value={phone}
                                            onChangeText={(text) => {
                                                const formattedText = text.replace(/[^0-9]/g, '');
                                                if (formattedText.length <= 10) {
                                                    setPhone(formattedText);
                                                }
                                            }}
                                            keyboardType="phone-pad"
                                            maxLength={10}
                                        />
                                    </View>
                                </View>
                            </View>
                            
                            <View className='mb-4'>
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
                            
                            <View className='mb-4'>
                                <Text className='text-gray-400 mb-2 text-sm'>Confirm Password</Text>
                                <View className='flex-row items-center border border-gray-700 rounded-lg px-4 py-3 bg-gray-900'>
                                    <Feather name="lock" size={16} color="#9CA3AF" />
                                    <TextInput
                                        placeholder="Confirm your password"
                                        placeholderTextColor="#6B7280"
                                        className='ml-2 flex-1 text-white'
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        secureTextEntry={confirmSecureTextEntry}
                                    />
                                    <TouchableOpacity onPress={toggleConfirmSecureTextEntry}>
                                        <Feather name={confirmSecureTextEntry ? "eye" : "eye-off"} size={16} color="#9CA3AF" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            <TouchableOpacity 
                                className='flex-row items-start mb-6' 
                                onPress={toggleAgreeToTerms}
                            >
                                <View className={`h-5 w-5 border rounded mr-2 mt-1 items-center justify-center ${agreeToTerms ? 'bg-normal border-normal' : 'border-gray-600'}`}>
                                    {agreeToTerms && <Feather name="check" size={12} color="#FFFFFF" />}
                                </View>
                                <Text className='text-gray-400 text-sm flex-1'>
                                    I agree to the <Text className='text-normal'>Terms and Conditions</Text> and <Text className='text-normal'>Privacy Policy</Text>
                                </Text>
                            </TouchableOpacity>
                            
                            <View className='mb-6'>
                                <Button variant='white' onPress={registerFunction}>Create Account</Button>
                            </View>
                        </View>
                        
                        <View className='items-center'>
                            <View className='flex-row items-center mb-6'>
                                <Text className='text-gray-400'>Already have an account? </Text>
                                <TouchableOpacity onPress={handleLogin}>
                                    <Text className='text-normal font-bold'>Log In</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View className='items-center w-full'>
                                <Text className='text-gray-500 mb-6 relative text-center'>
                                    Or sign up with Google
                                </Text>
                                
                                <TouchableOpacity 
                                    className='w-12 h-12 bg-gray-900 rounded-full items-center justify-center border border-gray-800'
                                    onPress={handleGoogleSignup}
                                >
                                    <FontAwesome name="google" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}