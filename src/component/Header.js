import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import Icons from 'react-native-vector-icons/EvilIcons';

function HeaderText({ text, style }) {
  return <Text style={style}>{text}</Text>;
}

function Header(props) {
  const navigation = useNavigation();

  const { text1 = '', text2 = '', textStyle, iconName = '', note = '' } = props;
  const [noteText, setNoteText] = useState(note);
  useEffect(() => {
    setNoteText(note);
  }, [note])

  let conditionalIcon = null;

  if (text1 === 'Thời khóa biểu') {
    conditionalIcon = (
      <TouchableOpacity >
        <Icon name="chevron-left" size={25} color="white" style={{ marginRight: 10 }} onPress={() => navigation.goBack()} />
      </TouchableOpacity>
    );
  }

  if (text1 === 'Lớp học' || text1 === 'Bữa ăn' || text1 === 'Sự kiện' || text1 === 'Thông tin chi tiết') {
    conditionalIcon = (
      <TouchableOpacity >
        <Icons name="close" size={25} color="white" style={{ marginRight: 10 }} onPress={() => navigation.goBack()} />
      </TouchableOpacity>
    );

  }

  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between' , margin: 20, height: 30 }]}>
      <View style={{flexDirection:'row'}}>
        {conditionalIcon}
        <View style={[{ flexDirection: 'column', alignItems: 'center', margin: 2 }]}>
          <HeaderText text={text1} style={textStyle} />
          <HeaderText text={noteText} style={textStyle} />
        </View>
      </View>

      <TouchableOpacity style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 2 }]}>
        <HeaderText text={text2} style={textStyle} />
        <Icon name={iconName} size={25} color="white" style={{ marginLeft: 10 }} />
      </TouchableOpacity>

    </View>
  );
}

export default Header