/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './../assets/colors/Colors'
import { connect } from 'react-redux';
import { code_color } from './../utils/ArrayColor';

import { FlatList } from 'react-native-gesture-handler';
import { fetchData, getTransactionsByUserId } from '../redux/firestoreFetch';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export interface IUser {
    id: string;
    name: string;
    age: number;
}

export interface IProduct {
    id: string;
    name: string;
    typeId: number;
}

export interface IType {
    id: string;
    name: string;
    color: string;
}

export interface IPrice {
    id: string;
    points: number;
    productId: string;
}
export interface Itransaction {
    id: string;
    userId: number;
    productId: string;
    total: number;
}

export interface IDetailCard {
    [x: string]: any;
    user: IUser | null;
    product: IProduct | null;
    type: IType | null;
    price: IPrice | null;
    totalPoints: number | null;
}



const DiscoverScreen = props => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [detailCard, setDetailCard] = useState<IDetailCard>({
        user: null,
        product: null,
        type: null,
        price: null,
        totalPoints: null
    });
    const [users, setUsers] = useState<IUser[]>([]);
    const [product, setProduct] = useState<IProduct[]>([]);
    const [type, setType] = useState<IType[]>([]);
    const [price, setPrice] = useState<IPrice[]>([]);
    const [transact, setTransact] = useState<Itransaction[]>([]);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : colors.white,
    };
    useEffect(() => {
        fetchDetail()
    }, [useIsFocused()])

    function arrayToObjectById<T extends { id: string }>(array: T[]): { [key: string]: T } {
        return array.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {} as { [key: string]: T });
    }
    const fetchDetail = async () => {
        const userArray: IUser[] = await fetchData('collection');
        const users = arrayToObjectById(userArray);
        const productsArray: IProduct[] = await fetchData('products');
        const products = arrayToObjectById(productsArray);
        const types: IType[] = await fetchData('types');

        const typesArray = arrayToObjectById(types);
        const prices: IPrice[] = await fetchData('prices');
        const pricesArray = arrayToObjectById(prices);
        const transactions: Itransaction[] = await fetchData('transactions');
        setTransact(transactions as unknown as Itransaction[])
        const detailedTransactions = Object.values(transactions).map(transaction => {
            const user = users[transaction.userId];
            const product = products[transaction.productId];
            const type = typesArray[product.typeId];
            const price = pricesArray[product.id];

            return {
                ...transaction,
                user,
                product,
                type,
                totalPoints: transaction.total * price.points,
            };
        });
        return setDetailCard(detailedTransactions as unknown as IDetailCard);
    }

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 0 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <FlatList
                contentContainerStyle={{ flex: 0 }}
                scrollEventThrottle={64}
                data={transact}
                initialNumToRender={100} // Reduce initial render amount
                maxToRenderPerBatch={50} // Reduce number in each render batch
                windowSize={3}
                disableVirtualization
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        {detailCard.length > 0 ? detailCard.filter(value => value.id === item.id).map((values) => {
                            return (
                                <Pressable style={{ backgroundColor: values.type?.color, margin: 10, padding: 10, borderRadius: 15, alignItems: 'center' }}>
                                    <Text style={styles.titleName}>Total : {item?.total}</Text>
                                    <Text style={styles.titleName}>Id Transaction: {item?.id}</Text>
                                    <Text style={styles.titleName}>Product Id :{item?.productId}</Text>
                                    <Text style={styles.titleName}>User id: {item?.userId}</Text>
                                    <Text style={styles.titleName}>Point: {item?.userId}</Text>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>Detail</Text>
                                        <Text>Nama Product: {values.product?.name}</Text>
                                        <Text>Nama: {values.user?.name} , Umur:  {values.user?.age}</Text>
                                        <Text>Total point : {values.totalPoints}</Text>
                                    </View>

                                </Pressable>
                            )
                        }) : null}
                    </View>

                )}
                keyExtractor={(item, i) => i.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    imageCard: { height: 100, width: 100 },
    titleName: { color: '#42494D', fontSize: 14, fontWeight: '700', marginBottom: 10, textAlign: 'left' },
    subTitle: { color: code_color.electric, fontSize: 16, lineHeight: 30, fontWeight: '700', },
});
const mapStateToProps = state => {
    const { pokemonList, pokemonData, pokemonType } = state.home;
    return {
        pokemonList, pokemonData, pokemonType
    };
};

export default connect(mapStateToProps, {  })(DiscoverScreen);

