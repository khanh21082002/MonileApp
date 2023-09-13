import React ,{useState, useEffect}from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";
import TableMeal from "../../component/TableMeal";

export default MealScreen = ({route}) => {
    const {title} = route.params
    const [note, setNoteText] = useState(title);
    useEffect(()=>{
        setNoteText(title);
    }, [title])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    textStyle={styles.text}
                    text1="Bữa ăn"
                    text2="Thông báo"
                    note={note}
                    iconName="bell"
                />
            </View>
            <ScrollView style={styles.main}>
                <View>
                    <Text style={styles.textMain}>Bữa ăn của các con</Text>
                </View>
                <TableMeal 
                    day={note}
                />
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

