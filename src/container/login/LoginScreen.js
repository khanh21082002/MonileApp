import React from "react";
import colors from '../../theme/color';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native'
import CustomTextInput from "../../component/CustomTextInput";


const LoginScreen = () => {
    // const [text, onChangeText] = React.useState('');

    const onChangeText = () => {
        // alert(te)
    }
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

                    {/* <View style={styles.input} >
                    <Icon name="user" size={30} color='black' marginLeft={20}/>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={onChangeText}
                             
                            placeholder={"Tên đăng nhập"}
                        />
                    </View> */}

                    <CustomTextInput
                        containerStyle={styles.input}
                        iconName="user"
                        value=""
                        onChangeText={onChangeText}
                        placeholder="Tên đăng nhâp"
                    />

                    <CustomTextInput
                        containerStyle={styles.input}
                        iconName="key"
                        value=""
                        onChangeText={onChangeText}
                        placeholder="Tên đăng nhâp"
                        iconName1="eye"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('pass')}
                    >
                        <Text style={styles.buttonText}>Đăng Nhập</Text>
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

    input: {
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

export default LoginScreen