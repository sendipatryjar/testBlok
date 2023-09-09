
import * as React from 'react';
import { View, Image, Modal, Pressable, SafeAreaView, Dimensions, Text } from 'react-native';
import { IcClose } from './../assets/index';

interface IMenu {
    visible: boolean;
    onClose?: () => void;
    pressMenu?: () => void;
    pressType?: () => void;
    name?: any;
}

const HeaderModal = ({ visible, onClose, name, pressMenu, pressType }: IMenu) => {
    return (
        <Modal
            animationType="fade"
            visible={visible}
            style={{
                width: '50%',
                height: '50%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 20 }}>
                    <Pressable onPress={() => onClose(!visible)} style={{ flex: 1, alignItems: 'flex-end' }}>
                        <IcClose />
                    </Pressable>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 40, }}>
                    <Text style={{ color: '#42494D', fontSize: 16, lineHeight: 24, fontWeight: '700', marginBottom: 10 }} >{name}</Text>
                </View>
            </SafeAreaView>

        </Modal>
    );
};

export default React.memo(HeaderModal);