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

export interface IMenu {
    id: string;
    name: string;
}
const MENU = [{
    id: 'home',
    name: 'Home'
}, {
    id: 'pockemonType',
    name: 'Pockemon Type'
}]

export interface ICard {
    id: number;
    name: string;
    color: string;
}
const type = [{
    id: 0,
    name: 'Type 1',
    color: '#E66D00',
}, {
    id: 1,
    name: 'Type 2',
    color: '#DE2C2C',
},
{
    id: 2,
    name: 'Type 2',
    color: '#01B956',
},
{
    id: 3,
    name: 'Type 2',
    color: '#E34C88',
},
{
    id: 4,
    name: 'Type 2',
    color: '#8E44AD',
}
]



const SplashScreen = props => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Landing Screen')
        }, 200)

    }, [])


    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1, alignItems: 'center', justifyContent: 'center' }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text style={styles.titleContent}>Save food, Save budget.</Text>
            <Text style={styles.titleName}>Save planet.</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleContent: { color: code_color.primary, fontSize: 20, lineHeight: 40, fontWeight: '400', textAlign: 'center', },
    imageCard: { height: 100, width: 100 },
    titleName: { color: code_color.primary, fontSize: 20, lineHeight: 40, fontWeight: '400', marginBottom: 10, textAlign: 'left' },
    subTitle: { color: '#42494D', fontSize: 16, lineHeight: 30, fontWeight: '700', },
});
const mapStateToProps = state => {
    const { } = state.home;
    return {

    };
};

export default connect(mapStateToProps, {})(SplashScreen);

