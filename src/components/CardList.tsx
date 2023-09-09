
import * as React from 'react';
import { View, Image, Modal, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import { IcLogo, IcBar, IcBackground, IcClose } from './../assets/index';
import colors from './../assets/colors/Colors';
import i18n from './../i18n';
import { code_color } from './../utils/ArrayColor';

interface IDetail {
    item?: React.ReactNode;
    onPressType?: () => void;
    onPressDetail?: () => void;
}

const CardList = ({ item, onPressType, onPressDetail }: IDetail) => {
    return (
        <Pressable onPress={() => onPressDetail()} style={styles.cardList}>
            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: item?.sprites?.other?.home?.front_default }} style={styles.imageCard} resizeMode='contain' />
            </View>
            <Text style={styles.titleNumber}>#00{item.id}</Text>
            <Text style={styles.cardName}>{item.name}</Text>
            <View style={{ flex: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
                {item?.types?.map((value: any, i: number) => {
                    return (
                        <Pressable key={i} onPress={() => onPressType(value?.type?.name, value?.type?.url)} style={[styles.cardType, { backgroundColor: code_color[`${value?.type?.name}`] }]}>
                            <Text style={styles.titleSmallCard}>{value?.type?.name}</Text>
                        </Pressable>
                    )
                })}
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    imageCard: { height: 100, width: 100 },
    cardList: { backgroundColor: colors.white, marginHorizontal: 20, marginVertical: 10, padding: 20, borderRadius: 15 },
    titleNumber: { color: '#B3B6B8', fontSize: 14, lineHeight: 16, fontWeight: '700', marginBottom: 10 },
    cardName: { color: '#42494D', fontSize: 24, lineHeight: 30, fontWeight: '700', marginBottom: 10 },
    titleSmallCard: { color: colors.white, fontSize: 14, lineHeight: 18, fontWeight: '700', textAlign: 'center' },
    cardType: { paddingVertical: 10, paddingHorizontal: 20, margin: 5, borderRadius: 20 },
    cardButton: { backgroundColor: '#E6AB09', alignItems: 'center', width: 120, padding: 10, borderRadius: 15 },
});

export default React.memo(CardList);