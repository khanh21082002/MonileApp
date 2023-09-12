import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

function HeaderText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Footer(props) {
    const { text1 = '', text2 = '', text3, textStyle, iconName1, iconName2, iconName3, link1 = '', link2 = '', link3 = '' } = props;
    const navigation = useNavigation();

    return (

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }]}>

            <TouchableOpacity
                style={[{ flexDirection: 'column', alignItems: 'center', margin: 2 }]}
                onPress={() => navigation.navigate(link1)} >
                <Icon name={iconName1} size={25} color="white" />
                <HeaderText text={text1} style={textStyle} />
            </TouchableOpacity>


            <TouchableOpacity style={[{ flexDirection: 'column', alignItems: 'center', margin: 2 }]} onPress={() => navigation.navigate(link2)} >
                <Icon name={iconName2} size={25} color="white" />
                <HeaderText text={text2} style={textStyle} />
            </TouchableOpacity>


            <TouchableOpacity style={[{ flexDirection: 'column', alignItems: 'center', margin: 2 }]} onPress={() => navigation.navigate(link3)} >
                <Icon name={iconName3} size={25} color="white" />
                <HeaderText text={text3} style={textStyle} />
            </TouchableOpacity>

        </View>
    );
}
export default Footer