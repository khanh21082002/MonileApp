import React, {useEffect, useState} from "react";
import { View , TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

function HeaderText({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

function Header(props) {
    const navigation = useNavigation();

    const { text1 = '', text2 = '', textStyle, iconName='', note = '' ,iconBack='' } = props;
    const [noteText, setNoteText] = useState(note);
    useEffect(()=>{
        setNoteText(note);
    },[note])

    let conditionalIcon = null;

  if (text1 === 'Thời khóa biểu') {
    conditionalIcon = (
      <TouchableOpacity >
        <Icon name={iconBack} size={25} color="white" style={{ marginRight: 10 }} onPress={() => navigation.goBack()} />
      </TouchableOpacity>
    );
  }

    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }]}>

           {conditionalIcon}
            {/* <TouchableOpacity>
                <Icon name={iconBack} size={25} color="white" style={{ marginRight: 10 }} />
            </TouchableOpacity> */}
            <View style={[{ flexDirection: 'column', alignItems: 'center', margin: 2 }]}>
                <HeaderText text={text1} style={textStyle} />
                <HeaderText text={noteText} style={textStyle} />
            </View>

            <TouchableOpacity style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 2 }]}>
                <HeaderText text={text2} style={textStyle} />
                <Icon name={iconName} size={25} color="white" style={{ marginLeft: 10 }} />
            </TouchableOpacity>

        </View>
    );
}

export default Header