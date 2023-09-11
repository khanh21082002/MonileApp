import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';

function HeaderText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Header(props) {
    const { text1 = '', text2 = '', textStyle, iconName } = props;
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }]}>
            <HeaderText text={text1} style={textStyle} />
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 2 }]}>
                <HeaderText text={text2} style={textStyle} />
                <Icon name={iconName} size={25} color="white"  />
            </View>

        </View>
    );
}

export default Header