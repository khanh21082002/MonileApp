import React from 'react';
import colors from '../../theme/color';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView } from 'react-native'

const startScreen = () => {
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
                    <Image source={require('AwesomeProject/image/undraw_education_f8ru.png')}
                        style={styles.image}
                    />

                    <Text style={styles.text}>
                        Xin chào
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('pass')}
                    >
                        <Text style={styles.buttonText}>GetStart!!</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
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
        width: 200,
        height: 200
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


});

export default startScreen
