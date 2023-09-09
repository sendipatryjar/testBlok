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
    Button
} from 'react-native';
import image from './../assets/Image'
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



const DetailScreen = props => {
    const [screen, setScreen] = useState<string>(props.route.name)
    const [data, setData] = useState<string>(props.route.params?.data)
    const [list, setList] = useState<IPoke[]>([]);
    const [menuList, setMenuList] = useState<IMenu[]>(MENU);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [dataSourceCords, setDataSourceCords] = useState([] as number[]);
    const [ref, setRef] = useState<ScrollView>();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };

    const actionType = (data, url) => {
        props.navigation.replace('Type Screen', { id: data, url })
    }
    const pressType = (data: string, url: string) => {
        props.navigation.navigate('Type Screen', { id: data, url })
    }
    const card = (item: any, i: number) => {
        return (
            <Pressable style={{ backgroundColor: colors.white, marginHorizontal: 20, marginVertical: 10, padding: 20, borderRadius: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: item?.sprites?.other?.home?.front_default }} style={{ height: 100, width: 100 }} resizeMode='contain' />
                </View>
                <Text style={styles.titleName}>{item?.name}</Text>
                <Text style={styles.subTitle}>{i18n.t('weight')}: {item?.weight}</Text>
                <Text style={styles.subTitle}>{i18n.t('height')}:  {item?.height}</Text>
                <View style={styles.rowCenter}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={styles.subTitle}>{i18n.t('abilities')} :</Text>
                    </View>
                    <View style={{ flex: 0, alignItems: 'flex-start', marginVertical: 15 }}>
                        {item?.abilities?.map((value: any, i: number) => {
                            return (

                                <Text  style={styles.subAbilities}>• {value?.ability?.name} {value?.is_hidden ? '(hidden)' : null}</Text>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.rowCenter}>
                    <View style={{ flex: 0.6 }}>
                        <Text style={styles.subTitle}>{i18n.t('type')} :</Text>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {item?.types?.map((value: any, i: number) => {
                            return (
                                <Pressable onPress={() => pressType(value?.type?.name, value?.type?.url)} style={[styles.cardType, { backgroundColor: code_color[`${value?.type?.name}`] }]}>
                                    <Text style={styles.titleSmallCard}>{value?.type?.name}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                </View>
            </Pressable>
        )

    }

    const renderList = () => (
        <ScrollView >
            <ImageBackground source={image.Background} resizeMode="cover" style={{
                flex: 1,
            }}>
                <Text style={styles.titleContent}>Pokemon Detail</Text>
                {card(data)}
            </ImageBackground>
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

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <HeaderModal visible={isEnabled} onClose={(value) => setIsEnabled(value)} menuList={menuList} pokemonType={props.pokemonType} pressMenu={() => { props.navigation.replace('Home Screen'), setIsEnabled(false) }} pressType={(value: string, url: url) => { actionType(value, url), setIsEnabled(false) }} />
            <Header isEnabled={isEnabled} onPressDetail={(value: boolean) => setIsEnabled(value)} backgroundStyle={backgroundStyle} />
            {renderContent()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleContent: { color: '#42494D', fontSize: 38, lineHeight: 40, fontWeight: '700', marginBottom: 10, textAlign: 'center', marginTop: 20 },
    imageCard: { height: 100, width: 100 },
    titleName: { color: '#42494D', fontSize: 36, lineHeight: 48, fontWeight: '700', marginBottom: 10, textAlign: 'left' },
    subTitle: { color: '#42494D', fontSize: 16, lineHeight: 30, fontWeight: '700', },
    rowCenter: { flexDirection: 'row', alignItems: 'center' },
    subAbilities: { color: '#42494D', fontSize: 14, lineHeight: 18, fontWeight: '400', textAlign: 'center', marginVertical: 5 },
    titleSmallCard: { color: colors.white, fontSize: 14, lineHeight: 18, fontWeight: '700', textAlign: 'center' },
    cardType: { paddingVertical: 10, paddingHorizontal: 20, margin: 5, borderRadius: 20 },
    cardButton: { backgroundColor: '#E6AB09', alignItems: 'center', width: 120, padding: 10, borderRadius: 15 }
});
const mapStateToProps = state => {
    const { pokemonList, pokemonData, pokemonType, pokemonTypeList } = state.home;
    return {
        pokemonList, pokemonData, pokemonType, pokemonTypeList
    };
};

export default connect(mapStateToProps, { getPokemonList, getPokemonType, getPokemonListType })(DetailScreen);

