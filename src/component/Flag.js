import React from "react";
import { Image, Text, View , TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MainText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Flag(props) {
    const {image = '', textList, styleList, styleImg = '' , link='' } = props
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[{ flexDirection: 'row', justifyContent: 'space-between', marginRight:40 }]} onPress={() => navigation.navigate(link)}>
            <View style={{ flexDirection: 'column', margin: 10 }} >
                <Image style={styleImg} source={image} />
                <MainText style={styleList} text={textList} />
            </View>
        </TouchableOpacity>
    )
};
export default Flag