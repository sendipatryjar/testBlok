
import * as React from 'react';
import { View, Image, Modal, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import { IcLogo, IcBar, IcBackground, IcClose } from './../assets/index';
import colors from './../assets/colors/Colors';
import i18n from './../i18n';

interface IDetail {
    backgroundStyle?: any;
    isEnabled?: boolean;
    onPressDetail?: () => void;
}

const Header = ({ backgroundStyle, isEnabled, onPressDetail }: IDetail) => {
    return (
        <View style={backgroundStyle}>
            <View style={styles.rowCenter}>
                <View style={{ flex: 1 }}>
                    <IcLogo />
                </View>
                <Pressable onPress={() => onPressDetail(!isEnabled)} style={{ flex: 1, alignItems: 'flex-end' }}>
                    <IcBar />
                </Pressable>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    rowCenter: { flexDirection: 'row', marginHorizontal: 20, marginVertical: 20 },
});

export default React.memo(Header);
