import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { updateAccount } from "../../redux/account/action/UpdateAccount";
import { useNavigation } from "@react-navigation/native";

export default UpdateInfoScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const info = useSelector((state) => state.accountInfo)




    const [user, onChangeUser] = React.useState(info.user);
    const [address, onChangeAddress] = React.useState(info.address);
    const [student, onChangeStudent] = React.useState(info.student);

    const handleUpdate = async () => {
        dispatch(updateAccount(user, address, student));
        navigation.goBack();
    }

    return (

        <SafeAreaView style={{
            justifyContent: 'center', alignItems: 'center', marginTop: 130, margin: 20, backgroundColor: 'white', padding: 20, borderRadius: 20, width: '90%',
            padding: 35, alignItems: 'center', shadowColor: 'red', shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25, shadowRadius: 4, elevation: 20
        }}>
            <View >
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: "space-between" }}>
                    <Text style={{ marginTop: 8, fontWeight: 12, color: 'black' }}> Tên đăng nhập: </Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderWidth: 1, borderRadius: 10 }}
                        onChangeText={onChangeUser}
                        value={user}
                    />


                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: "space-between" }}>
                    <Text style={{ marginTop: 8, fontWeight: 12, color: 'black' }}> Địa chỉ: </Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderWidth: 1, borderRadius: 10 }}
                        onChangeText={onChangeAddress}
                        value={address}
                    />


                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: "space-between" }}>
                    <Text style={{ marginTop: 8, fontWeight: 12, color: 'black' }}> Phụ huynh của: </Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderWidth: 1, borderRadius: 10 }}
                        onChangeText={onChangeStudent}
                        value={student}

                    />
                </View>
                
            </View>
            <View style={{justifyContent:'center'}}>
                    <TouchableOpacity 
                        style={{ borderWidth:1 , borderRadius:8}}
                        onPress={() => handleUpdate()}>
                        <Text style={{ fontWeight: 12, color: 'black' ,margin:10}} >Xác nhận</Text>
                    </TouchableOpacity>
                </View>

        </SafeAreaView>
    )
}