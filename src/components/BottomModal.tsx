
import * as React from 'react';
import { View, Image, Modal, Pressable, SafeAreaView, Dimensions, Text } from 'react-native';
import { IcLogo, IcBar, IcBackground, IcClose } from './../assets/index';

interface IDetail {
    visible: boolean;
    onClose?: () => void;
    detail?: React.ReactNode;
    onPressDetail?: () => void;
}

const BottomModal = ({ visible, onClose, detail, onPressDetail }: IDetail) => {
    return (
        <Modal
            animationType="slide"
            visible={visible}
           
        >
            <View style={{
                height: "auto",
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#fff",
                borderColor: "#777",
                borderWidth: 1,
                position: 'absolute',
                bottom: 0,
               padding: 20,
                borderRadius: 10
            }}>
                <Text>Pokemon Name</Text>
                <Text>Weight: 9999</Text>
                <Text>Height: 9999</Text>
                <Text>Abilities: 9999</Text>
                <Text>Type:</Text>
                <Pressable>
                    <Text>More Detail</Text>
                </Pressable>
            </View>

        </Modal>
    );
};

export default React.memo(BottomModal);