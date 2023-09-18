import React, {useState} from "react";
import colors from '../../theme/color';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native'
import CustomTextInput from "../../component/CustomTextInput";



export default LoginScreen = ({navigation}) => {
    // const [text, onChangeText] = React.useState('');

    const [text, onChangeText] = React.useState('');
    const [pass, onChangePass] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.fixToImg}>
                    <Image source={require('AwesomeProject/image/left.png')}

                    />

                    <Image source={require('AwesomeProject/image/right.png')}

                    />
                </View>

                <View style={styles.container}>
                    <Image source={require('AwesomeProject/image/undraw_Login_re_4vu2.png')}
                        style={styles.image}
                    />                    

                    <CustomTextInput
                        containerStyle={styles.containerStyle}
                        style={styles.input}
                        iconName="user"
                        value={text}
                        onChangeText={onChangeText}
                        placeholder="Tên đăng nhâp"
                    />

                    <CustomTextInput
                        containerStyle={styles.containerStyle}
                        style={styles.input}
                        iconName="key"
                        value={pass}
                        onChangeText={onChangePass}
                        placeholder="Mật khẩu"
                        isPassword={true}                      
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Main')}
                    >
                        <Text style={styles.buttonText} >Đăng Nhập</Text>
                        
                    </TouchableOpacity>
                    <Image
                        source={require('AwesomeProject/image/undraw_true_friends_c94g.png')}
                        style={styles.footer}
                    />
                </View>
            </View>

        </SafeAreaView >

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.background
    },

    image: {
        width: 150,
        height: 150
    },
    button: {
        width: 400,
        height: 50,
        backgroundColor: colors.primary.colorbutton,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30

    },

    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primary.primary
    },

    text: {
        paddingTop: 50,
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 150
    },
    fixToImg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
    },

    containerStyle: {
        borderWidth: 2,
        borderColor: 'black',
        width: 400,
        height: 50,
        backgroundColor: colors.primary.background,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 30
    },

    input: {
               
        width: 250,
        height: 40,
        backgroundColor: colors.primary.background,
        flexDirection: 'row',
        alignItems: 'center',
        
        
    },

    inputText: {
        height: 60,
        width: 336,
        color: 'red',
        borderRadius: 30
    },

    footer: {
        height: 250,
        width: 250,

    }

});
