import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";


export default NotificationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    textStyle={styles.text}
                    text1="Sự kiện"
                    text2="Thông báo"                
                    iconName="bell"
                />
            </View>
            <ScrollView style={styles.main}>
                  <Text style={styles.textMain}>Các sự kiện gần đây của nhà trường:</Text>                              
            </ScrollView>

            <View style={styles.footer}>
                {/* <Footer
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
                /> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary.background,
    },
    main: {
        flex: 1,
        padding: 16,
    },
    text: {
        color: colors.primary.primary,
        fontFamily: fonts.primary.primary,
        fontWeight: "bold",
        fontSize: 16,
    },

    textMain: {
        color: colors.base.text,
        fontFamily: fonts.primary.primary,
        fontWeight: "bold",
        fontSize: 16,
    },
    header: {
        backgroundColor: colors.primary.colorbutton,
    },
    footer: {
        backgroundColor: colors.primary.colorbutton,
    },
    
});
