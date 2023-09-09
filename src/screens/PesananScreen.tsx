/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
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
    ImageBackground,
    TextInput,
} from 'react-native';
import { IcLogo, IcBar, IcBackground, IcClose } from './../assets/index';
import image from './../assets/Image'
import { IPoke, IPokeResponse, MenuPokemon } from './../type/type';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './../assets/colors/Colors'
import HeaderModal from '../components/HeaderModal';
import CardDetail from '../components/CardDetail';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
    getPokemonList,
    getPokemonType,
    getPokemonListPaging
} from './../redux/screenActions/Home/actions';
import { code_color } from './../utils/ArrayColor';




const PesananScreen = props => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [name, setName] = useState('');
    const [select, setSelect] = useState('Belum dibayar')
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };


    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]} >
            <HeaderModal visible={isEnabled} onClose={(value) => setIsEnabled(value)} name={name}/>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{ marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholderTextColor={code_color.dark}
                    placeholder={'Masukkan nama anda'}
                    style={[styles.card, {
                        padding: 10,
                        color: code_color.dark,
                    }]}
                />
                <Pressable onPress={() => setIsEnabled(true)} style={styles.buttonDaftar}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Masuk</Text>
                </Pressable>
            </View>

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
    buttonDaftar: { backgroundColor: code_color.primary, borderRadius: 15, padding: 10, marginVertical: 10 },
    imageCard: { height: 100, width: 100 },
    titleName: { color: '#42494D', fontSize: 14, fontWeight: '700', marginBottom: 10, textAlign: 'left' },
    subTitle: { color: code_color.primary, fontSize: 14, fontWeight: '700', textAlign: 'center' },
    subTitleDisable: { color: 'gray', fontSize: 14, fontWeight: '700', textAlign: 'center' },
    headerActive: { borderWidth: 1, borderColor: code_color.primary, borderStyle: 'solid', width: 100, marginTop: 10 }
});
const mapStateToProps = state => {
    const { pokemonList, pokemonData, pokemonType } = state.home;
    return {
        pokemonList, pokemonData, pokemonType
    };
};

export default connect(mapStateToProps, { getPokemonList, getPokemonType, getPokemonListPaging })(PesananScreen);

