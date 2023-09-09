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
    Dimensions,
    ImageBackground,
    Modal,
    Button
} from 'react-native';
import { IcLogo, IcBar, IcBackground, IcClose } from './../assets/index';
import image from './../assets/Image'
import { IPoke, IPokeResponse, MenuPokemon } from './../type/type';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './../assets/colors/Colors'
import HeaderModal from '../components/HeaderModal';
import BottomModal from '../components/BottomModal';
import { connect } from 'react-redux';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
    getPokemonList,
    getPokemonType,
    getPokemonListType
} from './../redux/screenActions/Home/actions';
import { code_color } from './../utils/ArrayColor';
import i18n from './../i18n';
import CardDetail from '../components/CardDetail';
import CardList from '../components/CardList';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

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



const TypeScreen = (props: { route: { name: string | (() => string); params: { url: string | (() => string); id: string | (() => string); }; }; getPokemonListType: (arg0: string) => void; getPokemonList: () => void; getPokemonType: () => void; pokemonTypeList: IPoke[]; pokemonType: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; navigation: { goBack: () => any; navigate: (arg0: string, arg1: { data: IPoke[]; }) => any; }; }) => {
    const [screen, setScreen] = useState<string>(props.route.name)
    const [url, setUrl] = useState<string>(props.route.params?.url)
    const [title, setTitle] = useState<string>(props.route.params.id)
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const [menuList, setMenuList] = useState<IMenu[]>(MENU);
    const [typeList, setTypeList] = useState<ICard[]>(type);
    const [detailCard, setDetailCard] = useState<IPoke[]>([]);
    const [list, setList] = useState<IPoke[]>([]);
    const isDarkMode = useColorScheme() === 'dark';
    const [dataSourceCords, setDataSourceCords] = useState([] as number[]);
    const [scrollToIndex, setScrollToIndex] = useState(0);
    const [ref, setRef] = useState<ScrollView>();
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };
    useEffect(() => {
        props.getPokemonListType(url)
        props.getPokemonList()
        props.getPokemonType()
    }, [url])


    const card = (item: any, i: number) => {
        return (
            <CardList item={item} onPressDetail={() => {handlePresentModalPress(), setDetailCard(item)}} onPressType={(value: React.SetStateAction<string>, url: React.SetStateAction<string>) => {setUrl(url), setTitle(value)}}/> 
        )
    }

    const renderList = () => (
        <ScrollView >
            <View style={{ backgroundColor: code_color[`${title}`] }}>
                <Text style={{ color: '#42494D', fontSize: 38, lineHeight: 40, fontWeight: '700', marginBottom: 10, textAlign: 'center', marginTop: 20 }}>{i18n.t('pockemonType')}</Text>
                <View style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: code_color[`${title}`], borderWidth: 1, borderColor: '#42494D', margin: 5, borderRadius: 20 }}>
                    <Text style={{ color: colors.white, fontSize: 14, lineHeight: 18, fontWeight: '700', textAlign: 'center' }}>{title}</Text>
                </View>
                {props.pokemonTypeList.length > 0 && props.pokemonTypeList?.map((item: IPoke, i: number) => (
                    card(item, i)
                ))}
            </View>
        </ScrollView>
    )


    const renderContent = () => (
        <ScrollView ref={ref => {
            setRef(ref as any); //set the ref
        }} >
            <View
                key={2} //keys will be needed for function 
                onLayout={event => {
                    const layout = event.nativeEvent.layout;
                    dataSourceCords[2] = layout.y; // we store this offset values in an          array
                }}>
                {renderList()}
            </View>
        </ScrollView >
    )
    const renderHeader = () => (
        <View style={backgroundStyle}>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 20 }}>
                <View style={{ flex: 1 }}>
                    <IcLogo />
                </View>
                <Pressable onPress={() => setIsEnabled(!isEnabled)} style={{ flex: 1, alignItems: 'flex-end' }}>
                    <IcBar />
                </Pressable>
            </View>
        </View>
    )

    // callbacks
    const snapPoints = useMemo(() => ['60%', '95%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    const renderBackdrop = useCallback(
        (        props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
                opacity={1}
                pressBehavior="close"
            />
        ),
        []
    );

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <HeaderModal visible={isEnabled} onClose={(value: boolean) => setIsEnabled(value)} menuList={menuList} pokemonType={props.pokemonType} pressMenu={() => { props.navigation.goBack(), setIsEnabled(false) }} pressType={(value: React.SetStateAction<string>, url: React.SetStateAction<string>) => { setUrl(url), setTitle(value), setIsEnabled(false) }} />
            {renderHeader()}
            {renderContent()}
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetRef}
                    index={0}
                    backdropComponent={renderBackdrop}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                     < CardDetail detailCard={detailCard} onPressType={(value: string, url: string) => { bottomSheetRef.current?.dismiss(), setUrl(value), setTitle(url) }} onPressDetail={() => { bottomSheetRef.current?.dismiss(), props.navigation.navigate('Detail Screen', { data: detailCard }) }} />
                   
                </BottomSheetModal>

            </BottomSheetModalProvider>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
const mapStateToProps = (state: { home: { pokemonList: any; pokemonData: any; pokemonType: any; pokemonTypeList: any; }; }) => {
    const { pokemonList, pokemonData, pokemonType, pokemonTypeList } = state.home;
    return {
        pokemonList, pokemonData, pokemonType, pokemonTypeList
    };
};

export default connect(mapStateToProps, { getPokemonList, getPokemonType, getPokemonListType })(TypeScreen);

