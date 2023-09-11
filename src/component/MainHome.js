import React from "react";
import { Text, View } from "react-native";
import Flag from "./Flag";
import { ScrollView } from "react-native";

function MainText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function MainHome(props) {
    const { text = '', textStyle, flags } = props
    return (

        <View style={{ flexDirection: 'row', margin: 10, backgroundColor: 'white', borderRadius: 5 }}>
            <MainText text={text} style={textStyle} />
            <ScrollView horizontal={true}>
                {flags && flags.map((flag, index) => (
                    <Flag key={index} {...flag} />
                ))}
            </ScrollView>
        </View>

    )
};

export default MainHome