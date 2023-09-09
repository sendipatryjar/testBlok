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
    ImageBackground,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './../assets/colors/Colors'
import { connect } from 'react-redux';
import { code_color } from './../utils/ArrayColor';

const LandingScreen = props => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };


    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ImageBackground source={{ uri: 'https://img.freepik.com/premium-vector/burger-soft-drink-illustration-fast-food-icon-design-delicious-fast-food-illustration_597063-117.jpg?w=1380' }} style={{ width: '100%', height: '100%', }} resizeMode='cover' >
                <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                </View>

                <View style={styles.container}>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.title}>Selamat datang di <Text style={styles.titleContent}>Aplikasi Rekosistem</Text></Text>
                        <Text style={styles.subtitle}>Selamatkan lingkungan sekitar anda dan bantu bumi jadi lebih baik</Text>
                    </View>

                    <View style={{ flex: 0, width: '100%' }}>
                        <Pressable onPress={() => props.navigation.navigate('Login Screen')} style={styles.buttonLogin}>
                            <Text style={{ color: code_color.primary, fontWeight: 'bold', textAlign: 'center' }}>Sudah punya akun? Masuk</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.subtitleNew}>Dengan daftar atau masuk, Anda menerima <Text style={{ color: 'orange' }}>syarat dan ketentuan</Text> serta <Text style={{ color: 'orange' }}>kebijakan privasi</Text></Text>
                    </View>

                </View>
            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { borderTopLeftRadius: 20, borderTopRightRadius: 10, backgroundColor: 'white', position: 'absolute', bottom: 0, padding: 20, alignItems: 'center', flex: 1, width: '100%' },
    titleContent: { color: code_color.primary, fontSize: 20, lineHeight: 40, fontWeight: 'bold', textAlign: 'center', },
    title: { color: '#000', fontSize: 20, lineHeight: 40, fontWeight: 'bold', textAlign: 'center', },
    subtitle: { color: 'gray', fontSize: 14, textAlign: 'center', },
    subtitleNew: { color: 'gray', fontSize: 12, textAlign: 'center', },
    buttonDaftar: { backgroundColor: code_color.primary, borderRadius: 15, padding: 10, marginVertical: 10 },
    buttonLogin: { borderColor: code_color.primary, backgroundColor: '#fff', borderWidth: 1, borderRadius: 15, padding: 10, marginVertical: 10 },
    buttonSkip: { borderColor: code_color.fire, borderWidth: 1, borderRadius: 20, padding: 10, marginVertical: 10, width: 100 }
});
const mapStateToProps = state => {
    const { } = state.home;
    return {

    };
};

export default connect(mapStateToProps, {})(LandingScreen);