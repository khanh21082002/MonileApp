import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MainText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Flag(props) {
    const { image = '', textList, styleList, styleImg = '', link = '' } = props
    const navigation = useNavigation();
    return (
        <View style={{  backgroundColor: '#F5EFEF', alignItems: 'center', margin: 5 , borderRadius:10 }}>
            <TouchableOpacity style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',margin: 5 }]} onPress={() => navigation.navigate(link, {
                title: textList
            })}>
                <View style={{ flexDirection: 'column', margin: 5 , alignItems: 'center'}} >
                    <Image style={styleImg} source={image} />
                    <MainText style={styleList} text={textList} />
                </View>
            </TouchableOpacity>
        </View>
    )
};
export default Flag