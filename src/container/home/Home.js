import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, BackHandler, Alert } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";
import MainHome from "../../component/MainHome";

import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from "../../redux/actions/updateAction";
import {  useIsFocused } from "@react-navigation/native"


export default Home = () => {
    const localImage = require('AwesomeProject/image/class.png');


    const info = useSelector((state) => state.personalInfor)
    const [text, onchangeText] = React.useState("");
    const dispatch = useDispatch()

    const isFocused = useIsFocused();


    useEffect(() => {
        console.log("Info: ", info)
    })

    useEffect(() => {
        const backAction = () => {
            if (isFocused){
                Alert.alert('Thông báo!', 'Bạn có muốn thoát khỏi ứng dụng?', [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'YES', onPress: () => BackHandler.exitApp() },
                ]);
            return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [isFocused]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    textStyle={styles.text}
                    text1="Trang chủ"
                    text2="Thông báo"
                    iconName="bell"

                />
            </View>



            <ScrollView style={{ backgroundColor: '#D9D9D9' }}>
                <MainHome
                    text="Lớp học"
                    textStyle={styles.textFlag}
                    flags={[
                        {
                            image: localImage,
                            textList: "Lớp Mầm",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Class"
                        },
                        {
                            image: localImage,
                            textList: "Lớp Chồi",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Class"
                        },
                        {
                            image: localImage,
                            textList: "Lớp Lá",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Class"
                        },
                        {
                            image: localImage,
                            textList: "Lớp 5 tuổi",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Class"
                        },

                    ]}

                />

                <MainHome
                    text="Bữa ăn"
                    textStyle={styles.textFlag}
                    flags={[
                        {
                            image: localImage,
                            textList: "Thứ 2",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Meal"
                        },
                        {
                            image: localImage,
                            textList: "Thứ 3",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Meal"
                        },
                        {
                            image: localImage,
                            textList: "Thứ 4",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Meal"
                        },
                        {
                            image: localImage,
                            textList: "Thứ 5",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Meal"
                        },
                        {
                            image: localImage,
                            textList: "Thứ 6",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Meal"
                        },

                    ]}
                />
                <MainHome
                    text="Sự kiện"
                    textStyle={styles.textFlag}
                    flags={[
                        {
                            image: localImage,
                            textList: "Lớp Mầm",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                            link: "Notification"
                        },
                        {
                            image: localImage,
                            textList: "Lớp Chồi",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Lớp Lá",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Lớp 5 tuổi",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },

                    ]}
                />
                <MainHome
                    text="ABC"
                    textStyle={styles.textFlag}
                    flags={[
                        {
                            image: localImage,
                            textList: "Lớp Mầm",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Lớp Chồi",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Lớp Lá",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Lớp 5 tuổi",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },

                    ]}
                />
            </ScrollView>

            {/* test */}
            {/* <View style={styles.header}>
                <Text>User: {info.user}</Text>
                <Text>Password: {info.password}</Text>
                <Text>Address: {info.address}</Text>
                <Text>ID: {info.id}</Text>
                    <TextInput 
                        style={{height:40 , width:100 , borderWidth:1}}
                        onChangeText={onchangeText}
                        value={text}
                    />

                    <TouchableOpacity 
                        onPress={() => dispatch(updateUser(text))}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>

            </View> */}
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary.background
    },

    text: {
        color: colors.primary.primary,
        fontFamily: fonts.primary.primary,
        fontWeight: 'bold',
        fontSize: 16
    },
    header: {
        backgroundColor: colors.primary.colorbutton
    },

    textFlag: {
        color: colors.base.text,
        fontFamily: fonts.primary.primary,
        fontWeight: 'bold',
        fontSize: 14
    },
    textList: {
        color: colors.base.text,
        fontFamily: fonts.primary.primary,
        fontSize: 13,
    },
    styleImg: {
        width: 100,
        height: 100
    },
    footer: {
        backgroundColor: colors.primary.colorbutton

    }


});

