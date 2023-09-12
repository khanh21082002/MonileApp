import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";
import Footer from "../../component/Footer";

export default AccountScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    textStyle={styles.text}
                    text1="Tài khoản"
                    text2="Thông báo"
                    iconName="bell"
                />
            </View>
            <View style={styles.main}>
                <Image source={require("AwesomeProject/image/avatar.jpg")} style={styles.image} />
                <View >
                    <Text style={styles.textLine}>Tên đăng nhập: </Text>
                    <Text style={styles.textLine}>Địa chỉ: </Text>
                    <Text style={styles.textLine}>Phụ huynh của: </Text>

                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Footer
                    textStyle={styles.text}
                    text1="Thời khóa biểu"
                    text2="Trang chủ"
                    text3="Tài khoản"
                    iconName1="calendar-alt"
                    iconName2="home"
                    iconName3="user"
                    link2="Home"
                    link3="Account"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary.background
    },

    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.primary.primary,
        fontFamily: fonts.primary.primary,
        fontWeight: 'bold',
        fontSize: 16
    },

    textLine: {
        color: colors.base.text,
        fontFamily: fonts.primary.primary,
        fontWeight: 'bold',
        fontSize: 15
    },

    button: {
        width: 200,
        height: 50,
        backgroundColor: colors.primary.colorbutton,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30

    },

    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.primary.primary
    },
    header: {
        backgroundColor: colors.primary.colorbutton
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 20
    },
    footer: {
        backgroundColor: colors.primary.colorbutton,
        marginTop:275
    }


});

