import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";
import Footer from "../../component/Footer";

const MealScreen = () => {
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
            <ScrollView style={styles.main}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.columnHeader]}>
                        Head
                    </Text>
                    <Text style={[styles.tableCell, styles.columnHeader]}>
                        Head2
                    </Text>
                    <Text style={[styles.tableCell, styles.columnHeader]}>
                        Head3
                    </Text>
                    <Text style={[styles.tableCell, styles.columnHeader]}>
                        Head4
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.borderRight]}>1</Text>
                    <Text style={[styles.tableCell, styles.borderRight]}>2</Text>
                    <Text style={[styles.tableCell, styles.borderRight]}>3</Text>
                    <Text style={[styles.tableCell, styles.borderRight]}>4</Text>
                </View>
                {/* Thêm các hàng khác ở đây */}
            </ScrollView>

            <View style={styles.footer}>
                <Footer
                    textStyle={styles.text}
                    text1="Thời khóa biểu"
                    text2="Trang chủ"
                    text3="Tài khoản"
                    iconName1="calendar-alt"
                    iconName2="home"
                    iconName3="user"
                />
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
    header: {
        backgroundColor: colors.primary.colorbutton,
    },
    footer: {
        backgroundColor: colors.primary.colorbutton,
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#ccc",
    },
    tableCell: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "transparent", // Đặt màu nền trong suốt
    },
    columnHeader: {
        borderWidth: 1,
        borderColor: "#000",
        borderTopWidth: 0, // Loại bỏ border ở phía trên của header cột
    },
    borderRight: {
        borderRightWidth: 1, // Thêm border bên phải của từng ô cột
    },
});

export default MealScreen;
