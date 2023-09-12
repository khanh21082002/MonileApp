import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";
import MainHome from "../../component/MainHome";
import Footer from "../../component/Footer";

export default Home = () => {
    const localImage = require('AwesomeProject/image/class.png');

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
                            link : "Class"
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
                        },
                        {
                            image: localImage,
                            textList: "Thứ 4",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Thứ 5",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
                        },
                        {
                            image: localImage,
                            textList: "Thứ 6",
                            styleList: styles.textList,
                            styleImg: styles.styleImg,
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
                            link:"Notification"
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
            <View style={styles.header}>
                <Footer
                    textStyle={styles.text}
                    text1="Thời khóa biểu"
                    text2="Trang chủ"
                    text3="Tài khoản"
                    iconName1="calendar-alt"
                    iconName2="home"
                    iconName3="user"
                    link1="TimeTable"
                    link2="Home"
                    link3="Account"
                />
            </View>
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

