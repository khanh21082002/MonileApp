import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function CustomTextInput(props) {


    const { value = "", style = {}, placeholder = "", onChangeText, iconName, isPassword = false, containerStyle, } = props
    const [isPasswordHidden, setIsPasswordHidden] = useState(false);
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, containerStyle]}>
            <Icon name={iconName} size={25} color="black" style={{ marginRight: 10, marginLeft: 10 }} />
            <View>
                <TextInput
                    style={style}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={isPassword ? !isPasswordHidden: false}
                />
            </View>

            {isPassword && (                
                <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
                <Icon                   
                    name={isPasswordHidden ? 'eye-slash' : 'eye'}
                    size={25} color="black"
                    style={{ marginLeft: 50 }}
                />
            </TouchableOpacity>
            )}
            
        </View>
    )
};

export default CustomTextInput