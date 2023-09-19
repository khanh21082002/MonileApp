import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Header from "../../component/Header";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";
import Icons from 'react-native-vector-icons/EvilIcons';

import { useDispatch, useSelector } from 'react-redux'
import { selectedStudent, updateStudent } from "../../redux/actions/updateStudent";



export default DetailInfoScreen = ({ route }) => {

    const { student } = route.params;
    const { title } = route.params

    const [note, setNoteText] = useState(title);
    const [name, onchangename] = React.useState(student[1]);
    const [gender, onchangegender] = React.useState(student[2]);
    const [dob, onchangedob] = React.useState(student[3]);
    const [parent, onchangeparent] = React.useState(student[4]);
    const [comment, onchangecomment] = React.useState(student[5]);

    const dispatch = useDispatch()
    const infoS = useSelector((state) => state.studentInfor)
   
    useEffect(() => {
        setNoteText(title);
    }, [title])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    textStyle={styles.text}
                    text1="Thông tin chi tiết"
                    text2="Thông báo"
                    note={note}
                    
                />
            </View>
            <ScrollView style={styles.main}>
                <View>
                    <Text style={styles.textMain}>Thông tin chi tiết của học sinh:  {student[1]}</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: 15 }}>Stt: {student[0]}</Text>
                        <TouchableOpacity >
                            <Icons name="pencil" size={35} />
                        </TouchableOpacity>

                    </View>

                    <Text style={{ marginTop: 15 }}>Họ và Tên: {student[1]}</Text>
                    <Text style={{ marginTop: 15 }}>Giới tính: {student[2]}</Text>
                    <Text style={{ marginTop: 15 }}>Ngày sinh: {student[3]}</Text>
                    <Text style={{ marginTop: 15 }}>Tên phụ huynh: {student[4]}</Text>
                    <Text style={{ marginTop: 15 }}>Nhận xét giáo viên: {student[5]}</Text>
                </View>
            </ScrollView>


            {/* <View style={styles.header}>
                <View>
                    <Text>Stt: {infoS.stt} </Text>
                    <TextInput
                        style={{ height: 40, width: 100, borderWidth: 1 }}
                        placeholder={student[0]}

                    />
                </View>
                <View>
                    <Text>Họ và tên: {infoS.name}</Text>
                    <TextInput
                        style={{ height: 40, width: 100, borderWidth: 1 }}
                        onChangeText={onchangename}
                        value={name}
                    />
                </View>

                <View>
                    <Text>Giới tính: {infoS.gender}</Text>
                    <TextInput
                        style={{ height: 40, width: 100, borderWidth: 1 }}
                        onChangeText={onchangegender}
                        value={gender}
                    />
                </View>

                <View>
                    <Text>Ngày sinh: {infoS.dob}</Text>
                    <TextInput
                        style={{ height: 40, width: 100, borderWidth: 1 }}
                        onChangeText={onchangedob}
                        value={dob}
                    />
                </View>

                <View>
                    <Text>Tên phụ huynh: {infoS.parent}</Text>
                    <TextInput
                        style={{ height: 40, width: 100, borderWidth: 1 }}
                        onChangeText={onchangeparent}
                        value={parent}
                    />
                </View>
                <View>
                    <Text>Nhận xét giáo viên: {infoS.comment}</Text>
                    <TextInput
                        style={{ height: 40, width: 100, borderWidth: 1 }}
                        value={comment}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => dispatch(updateStudent({
                        stt: infoS.stt,
                        name: name,
                        gender: gender,
                        dob: dob,
                        parent: parent,
                        comment: comment,

                    }))}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>

            </View> */}

            {/* <View style={styles.footer}>
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
                /> 
            </View> */}


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


