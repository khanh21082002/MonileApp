import React from "react";
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function CustomTextInput(props) {
    const { value="", style = {}, placeholder="", onChangeText, iconName,iconName1, containerStyle} =props
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, containerStyle]}>
            <Icon name={iconName} size={25} color="black" style={{ marginRight: 10 , marginLeft: 10}} />
            <TextInput
                style={style}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
            />
            <Icon name={iconName ===iconName1 ? '' : iconName1} size={25} color="black" style={{marginLeft: 200}} />
        </View>
    )
};

export default CustomTextInput