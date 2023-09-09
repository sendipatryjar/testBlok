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
    Modal,
    Button
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileScreen = props => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };



    return (
        <SafeAreaView style={{ flex: 1, }} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{ alignItems: 'center', borderBottomWidth: 1, borderBottomColor: code_color.dark }}>
                <Text style={styles.titleContent}>Profil</Text>
            </View>
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.cardImage} />
                <Text style={styles.sub}>Lakukan transaksi 1 kali untuk membuka badges</Text>
                <Text style={styles.subName}>Sendi Patryjar</Text>
                <View style={{ marginVertical: 10, alignItems: 'center' }}>
                <Text style={styles.desc}>sendipatryjar@gmail.com</Text>
                <Text style={styles.desc}>081398057094</Text>
                </View>
               
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{ padding: 10, borderWidth: 1, borderRadius: 15, marginRight: 5, borderColor: code_color.primary, flex: 1 }}>
                        <Text style={styles.desc}>Kamu menyelamatkan 0 makanan</Text>
                    </View>
                    <View style={{ padding: 10, borderWidth: 1, borderRadius: 15, marginLeft: 5, borderColor: code_color.primary, flex: 1 }}>
                        <Text style={styles.desc}>Kamu menyelamatkan 0 makanan</Text>
                    </View>
                </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#000', borderStyle: 'solid', marginVertical: 10, opacity: 0.5  }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 100  }}>
                <View style={{ flex: 0.2 }}>
                    <Image source={image.Splash} style={{ width: '100%', height: '30%' }} resizeMode='contain' />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10 }}>
                    <Text style={styles.titleContent}>Kode Referal</Text>
                    <Text style={styles.titleName}>Yuk bagikan kode referal ke keluarga serta temanmu dan dapatkan voucher makan sampai 150 ribu loh!</Text>
                </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#000', borderStyle: 'solid', marginVertical: 10, opacity: 0.5  }} />
            <View style={{ borderWidth: 2, borderStyle: 'dotted', borderColor: code_color.primary, padding: 10, marginHorizontal: 20, borderRadius: 10, backgroundColor: code_color.primary, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <Text  style={{ flex: 1}}>sen12</Text>
                <Icon  name="clipboard-check-multiple-outline" size={20}  color="#f5f5f5"/>
            </View>

            <View style={{ borderWidth: 2, borderColor: code_color.primary, padding: 10, marginHorizontal: 20, borderRadius: 10, backgroundColor: code_color.shadow, }}>
                <Text>Bagikan Kode</Text>
            </View>
            </ScrollView>
            

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleContent: { color: code_color.primary, fontSize: 20, lineHeight: 40, fontWeight: '400', textAlign: 'center', },
    imageCard: { height: 100, width: 100 },
    titleName: { color: code_color.dark, fontSize: 14, lineHeight: 20, fontWeight: '400', marginBottom: 10, textAlign: 'left' },
    subTitle: { color: code_color.dark, fontSize: 16, lineHeight: 30, fontWeight: '700', },
    cardImage: { backgroundColor: code_color.ghost, width: 100, height: 100, borderRadius: 50, marginVertical: 20 },
    sub: { color: code_color.dark, fontSize: 14, fontWeight: '400', marginVertical: 10, backgroundColor: code_color.ground, padding: 10, borderRadius: 10 },
    subName: { color: code_color.primary, fontSize: 16, fontWeight: 'bold', marginVertical: 10, },
    desc: { color: code_color.dark, fontSize: 14,   }

});
const mapStateToProps = state => {
    const { } = state.home;
    return {

    };
};

export default connect(mapStateToProps, {})(ProfileScreen);

