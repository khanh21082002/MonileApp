import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';

function HeaderText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Footer(props) {
    const { text1 = '', text2 = '', text3, textStyle, iconName1,iconName2,iconName3 } = props;
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }]}>
            <View style={[{ flexDirection: 'column', alignItems:'center',margin: 2 }]}>
                <Icon name={iconName1} size={25} color="white" />
                <HeaderText text={text1} style={textStyle} />
            </View>
            <View style={[{ flexDirection: 'column',alignItems:'center', margin: 2 }]}>
                <Icon name={iconName2} size={25} color="white" />
                <HeaderText text={text2} style={textStyle} />
            </View>
            <View style={[{ flexDirection: 'column',alignItems:'center', margin: 2 }]}>
                <Icon name={iconName3} size={25} color="white" />
                <HeaderText text={text3} style={textStyle} />
            </View>
        </View>
    );
}

export default Footer