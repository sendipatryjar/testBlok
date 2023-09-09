/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { IPoke, IPokeResponse, MenuPokemon } from './../type/type';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './../assets/colors/Colors'
import { connect } from 'react-redux';
import { code_color } from './../utils/ArrayColor';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconEye from 'react-native-vector-icons/Octicons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

const LoginScreen = props => {
    const isDarkMode = useColorScheme() === 'dark';
    const [dataEmail, setDataEmail] = useState('');
    const [dataPassword, setDataPassword] = useState('');
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };

    const submit = () => {
        setloggedIn(true);
        auth()
            .createUserWithEmailAndPassword(dataEmail, dataPassword)
            .then(() => {
                setloggedIn(false);
                props.navigation.navigate('Bottom')
            })
            .catch(error => {
                setloggedIn(false);
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
                '137988095512-suib5p4t40804or3qn1m4sbphn4b5pp1.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
    }, []);
    const isSignedIn = async () => {
        setloggedIn(true);
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            const credential = auth.GoogleAuthProvider.credential(
                idToken,
                accessToken,
            );
            await auth().signInWithCredential(credential);
            props.navigation.navigate('Bottom')
            setloggedIn(false);
        } catch (error) {
            setloggedIn(false);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }

    };


    return (
        <SafeAreaView style={[backgroundStyle, { flex: 0 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ImageBackground source={{ uri: 'https://img.freepik.com/premium-vector/burger-soft-drink-illustration-fast-food-icon-design-delicious-fast-food-illustration_597063-117.jpg?w=1380' }} style={{ width: '100%', height: '100%' }} resizeMode='cover' >
                <View style={{ alignItems: 'flex-start', width: 200, height: 200, alignContent: 'flex-start', marginLeft: 20 }}>
                    <Text style={styles.title}>Masuk</Text>
                    <Text style={styles.subtitle}>Pastikan kamu sudah pernah membuat akun</Text>
                </View>

                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 10, backgroundColor: 'white', padding: 20, flex: 1 }}>
                    <View style={{ flex: 0, width: '100%' }}>
                        <View style={{ marginVertical: 20, flex: 0 }}>
                            <View
                                style={styles.card}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Icon
                                        name={'screen-smartphone'}
                                        size={25}
                                        color={'rgba(0, 0, 0, 0.4)'}
                                    />
                                </View>

                                <TextInput
                                    value={dataEmail}
                                    onChangeText={text => setDataEmail(text)}
                                    placeholderTextColor={code_color.dark}
                                    placeholder={'Masukkan email anda'}
                                    style={{
                                        padding: 7,
                                        color: code_color.dark,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <View
                                style={styles.card}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Icon name={'lock'} size={25} color={'rgba(0, 0, 0, 0.4)'} />
                                </View>

                                <TextInput
                                    secureTextEntry={isPasswordSecure}
                                    value={dataPassword}
                                    onChangeText={text => setDataPassword(text)}
                                    placeholderTextColor={code_color.dark}
                                    placeholder={`Masukkan password anda`}
                                    style={{
                                        color: code_color.dark,
                                        padding: 7,
                                        flex: 1,
                                    }}
                                />
                                <Pressable
                                    onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                                    style={{ marginHorizontal: 10 }}>
                                    <IconEye
                                        name={isPasswordSecure ? 'eye' : 'eye-closed'}
                                        size={25}
                                        color={'rgba(0, 0, 0, 0.4)'}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                   

                    <View style={{ flex: 0, width: '100%' }}>
                        {loggedIn ? <ActivityIndicator size={'small'}  />  :
                        <Pressable onPress={() => dataEmail === '' || dataPassword === '' ? null : submit()} style={dataEmail === '' || dataPassword === '' ? styles.buttonDaftarDisable : styles.buttonDaftar}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Masuk</Text>
                        </Pressable> }
                    </View>
                    <View style={{ flex: 0, width: '100%' }}>
                    {loggedIn ? <ActivityIndicator size={'small'}  />  :
                        <GoogleSigninButton
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => isSignedIn()}
                        /> }
                    </View>


                </View>
            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 15,
        alignItems: 'center',
        padding: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    titleContent: { color: code_color.primary, fontSize: 20, lineHeight: 40, fontWeight: 'bold', textAlign: 'center', },
    title: { color: '#000', fontSize: 16, lineHeight: 40, fontWeight: 'bold', textAlign: 'center', },
    subtitle: { color: '#fff', fontSize: 12, textAlign: 'left', },
    subtitleError: { color: 'red', fontSize: 12, textAlign: 'left', },
    subtitleNew: { color: 'gray', fontSize: 12, textAlign: 'right', },
    buttonDaftar: { backgroundColor: code_color.primary, borderRadius: 15, padding: 10, marginVertical: 10 },
    buttonDaftarDisable: { backgroundColor: code_color.primary, opacity: 0.5, borderRadius: 15, padding: 10, marginVertical: 10 },
    buttonLogin: { borderColor: code_color.primary, backgroundColor: '#fff', borderWidth: 1, borderRadius: 15, padding: 10, marginVertical: 10 },
    buttonSkip: { borderColor: code_color.fire, borderWidth: 1, borderRadius: 20, padding: 10, marginVertical: 10, width: 100 }
});
const mapStateToProps = state => {
    const { } = state.home;
    return {

    };
};

export default connect(mapStateToProps, {})(LoginScreen);

