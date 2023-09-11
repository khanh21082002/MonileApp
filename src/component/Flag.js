import React from "react";
import { Image, Text, View } from "react-native";

function MainText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Flag(props) {
    const {image = '', textList, styleList, styleImg = '' } = props
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginRight:40 }]}>
            <View style={{ flexDirection: 'column', margin: 10 }} >
                <Image style={styleImg} source={image} />
                <MainText style={styleList} text={textList} />
            </View>
        </View>
    )
};
export default Flag