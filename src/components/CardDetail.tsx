
import * as React from 'react';
import { View, Image, Modal, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import { IcLogo, IcBar, IcBackground, IcClose } from './../assets/index';
import colors from './../assets/colors/Colors';
import i18n from './../i18n';
import { code_color } from './../utils/ArrayColor';

interface IDetail {
    detailCard?: React.ReactNode;
    onPressType?: () => void;
    onPressDetail?: () => void;
}

const CardDetail = ({ detailCard, onPressType, onPressDetail }: IDetail) => {
    return (
        <View style={{
            flex: 1,
            margin: 20
          }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: detailCard?.sprites?.other?.home?.front_default }} style={styles.imageCard} resizeMode='contain' />
            </View>
            <Text style={styles.titleName}>{detailCard?.name}</Text>
            <Text style={styles.subTitle}>{i18n.t('weight')}: {detailCard?.weight}</Text>
            <Text style={styles.subTitle}>{i18n.t('height')}:  {detailCard?.height}</Text>
            <View style={styles.rowCenter}>
              <View style={{ flex: 0.6 }}>
                <Text style={styles.subTitle}>{i18n.t('abilities')} :</Text>
              </View>
              <View style={{ flex: 0, alignItems: 'flex-start', marginVertical: 15 }}>
                {detailCard?.abilities?.map((value: any, i: number) => {
                  return (
                    <Text style={styles.subAbilities}>• {value?.ability?.name} {value?.is_hidden ? '(hidden)' : null}</Text>
                  )
                })}
              </View>
            </View>
            <View style={styles.rowCenter}>
              <View style={{ flex: 0.6 }}>
                <Text style={styles.subTitle}>{i18n.t('type')} :</Text>
              </View>
              <View style={{ flex: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
                {detailCard?.types?.map((value: any, i: number) => {
                  return (
                    <Pressable onPress={() => onPressType(value?.type?.name, value?.type?.url)} style={[styles.cardType, {backgroundColor: code_color[`${value?.type?.name}`]}]}>
                      <Text style={styles.titleSmallCard}>{value?.type?.name}</Text>
                    </Pressable>
                  )
                })}
              </View>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <Pressable onPress={() => onPressDetail()} style={styles.cardButton}>
                <Text style={styles.titleSmallCard}>{i18n.t('moreDetail')}</Text>
              </Pressable>
            </View>
          </View>
    );
};
const styles = StyleSheet.create({
    imageCard: { height: 100, width: 100 },
    titleName: { color: '#42494D', fontSize: 36, lineHeight: 48, fontWeight: '700', marginBottom: 10, textAlign: 'left' },
    subTitle: { color: '#42494D', fontSize: 16, lineHeight: 30, fontWeight: '700', },
    rowCenter: { flexDirection: 'row', alignItems: 'center' },
    subAbilities: { color: '#42494D', fontSize: 14, lineHeight: 18, fontWeight: '400', textAlign: 'center', marginVertical: 5 },
    titleSmallCard: { color: colors.white, fontSize: 14, lineHeight: 18, fontWeight: '700', textAlign: 'center' },
    cardType: { paddingVertical: 10, paddingHorizontal: 20, margin: 5, borderRadius: 20 },
    cardButton: { backgroundColor: '#E6AB09', alignItems: 'center', width: 120, padding: 10, borderRadius: 15 }
  });

export default React.memo(CardDetail);