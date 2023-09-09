/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
    Modal,
    Button,
    Linking
} from 'react-native';
import { IPoke, IPokeResponse, MenuPokemon } from './../type/type';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './../assets/colors/Colors'
import HeaderModal from '../components/HeaderModal';
import { connect } from 'react-redux';
import {
    getPokemonList,
    getPokemonType,
    getPokemonListType
} from './../redux/screenActions/Home/actions';
import { code_color } from './../utils/ArrayColor';
import i18n from './../i18n';
import Header from '../components/Header';
import image from './../assets/Image';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconEye from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const RegisterScreen = props => {
    const isDarkMode = useColorScheme() === 'dark';
    const [username, setUsername] = useState('');
    const [handphone, setHandphone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };

    const submit = () => {
        setModalVisible(true)
    }


    return (
        <SafeAreaView style={[backgroundStyle, { flex: 0 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Selamat Registrasi anda berhasil!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { setModalVisible(!modalVisible), props.navigation.navigate('Login Screen') }}>
                            <Text style={styles.textStyle}>Login Sekarang</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <ImageBackground source={{ uri: 'https://img.freepik.com/premium-vector/burger-soft-drink-illustration-fast-food-icon-design-delicious-fast-food-illustration_597063-117.jpg?w=1380' }} style={{ width: '100%', height: '100%' }} resizeMode='cover' >
                <View style={{ alignItems: 'flex-start', width: 200, height: 200, alignContent: 'flex-start', marginLeft: 20 }}>
                    <Text style={styles.title}>Daftar</Text>
                </View>

                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 10, backgroundColor: 'white', padding: 20, flex: 1 }}>
                    <View style={{ flex: 0, width: '100%' }}>
                        <View style={{ marginVertical: 20, flex: 0 }}>
                            <View
                                style={styles.card}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Entypo
                                        name={'email'}
                                        size={25}
                                        color={'rgba(0, 0, 0, 0.4)'}
                                    />
                                </View>

                                <TextInput
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholderTextColor={code_color.dark}
                                    placeholder={'Masukkan email'}
                                    style={{
                                        padding: 7,
                                        color: code_color.dark,
                                    }}
                                />
                            </View>
                        </View>
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
                                    value={handphone}
                                    keyboardType={'number-pad'}
                                    onChangeText={text => setHandphone(text)}
                                    placeholderTextColor={code_color.dark}
                                    placeholder={'Masukkan nomor handphone'}
                                    style={{
                                        padding: 7,
                                        color: code_color.dark,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ marginVertical: 20, flex: 0 }}>
                            <View
                                style={styles.card}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Icon
                                        name={'user'}
                                        size={25}
                                        color={'rgba(0, 0, 0, 0.4)'}
                                    />
                                </View>

                                <TextInput
                                    value={username}
                                    onChangeText={text => setUsername(text)}
                                    placeholderTextColor={code_color.dark}
                                    placeholder={'Masukkan Nama Lengkap'}
                                    style={{
                                        padding: 7,
                                        color: code_color.dark,
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ marginVertical: 20 }}>
                            <View
                                style={styles.card}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Icon name={'lock'} size={25} color={'rgba(0, 0, 0, 0.4)'} />
                                </View>

                                <TextInput
                                    secureTextEntry={isPasswordSecure}
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    placeholderTextColor={code_color.dark}
                                    placeholder={`Masukkan password`}
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
                        <Pressable onPress={() => email === '' || password === '' || handphone === '' || username === '' ? null : submit()} style={email === '' || password === '' || handphone === '' || username === '' ? styles.buttonDaftarDisable : styles.buttonDaftar}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Daftar</Text>
                        </Pressable>
                    </View>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Belum </Text>
                    <Pressable
                        style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                        }}>
                        <Text
                            style={{
                                color: code_color.dark,
                                fontSize: 13,
                                lineHeight: 18,
                                marginBottom: 0,
                            }}>
                            Sudah punya akun?
                        </Text>
                        <Pressable
                            onPress={() => props.navigation.navigate('Login Screen')}
                            style={{ justifyContent: 'flex-end', alignContent: 'flex-end' }}
                        >
                            <Text
                                style={styles.titleButton}>
                                {' '}
                                Yuk Masuk
                            </Text>
                        </Pressable>
                    </Pressable>
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleButton: {
        color: code_color.primary,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 0,
    },
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
    buttonSkip: { borderColor: code_color.fire, borderWidth: 1, borderRadius: 20, padding: 10, marginVertical: 10, width: 100 },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: code_color.primary,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
const mapStateToProps = state => {
    const { } = state.home;
    return {

    };
};

export default connect(mapStateToProps, {})(RegisterScreen);

