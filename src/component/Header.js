import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Alert, Modal } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import Icons from 'react-native-vector-icons/EvilIcons';
import Calendar from "./Calendar";

function HeaderText({ text, style }) {
  return <Text style={style}>{text}</Text>;
}

function Header(props) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const { text1 = '', text2 = '', textStyle, iconName = '', note = '' } = props;
  const [noteText, setNoteText] = useState(note);
  useEffect(() => {
    setNoteText(note);
  }, [note])

  let conditionalIcon = null;
  let conditionalHandle = null;
  let conditionalText2 = null;
  let conditionalText = null;


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


  conditionalHandle = text2 === 'Lịch' ? (
    <TouchableOpacity onPress={openModal}>
      <Icon name="calendar-alt" size={25} color="white" style={{ marginRight: 10 }} />
    </TouchableOpacity>
  ) : (
    <Icons name={iconName} size={25} color="white" style={{ marginLeft: 10 }} />
  );

    conditionalText2 = text1 ==='Tài khoản' || text1 === 'Thông tin chi tiết' ? (
      <TouchableOpacity onPress={() => navigation.navigate('UpdateAccount')}>
          <HeaderText text='Chỉnh sửa thông tin' style={textStyle} />
      </TouchableOpacity>
    ):(<HeaderText text={text2} style={textStyle} />);

    conditionalText = text1 === 'Thông tin chi tiết' ? (
      <TouchableOpacity onPress={() => navigation.navigate('UpdateAccount')}>
          <HeaderText text='Chỉnh sửa thông tin' style={textStyle} />
      </TouchableOpacity>
    ):(<HeaderText text={text2} style={textStyle} />);

  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, height: 30 }]}>
      <View style={{ flexDirection: 'row' }}>
        {conditionalIcon}
        <View style={[{ flexDirection: 'column', alignItems: 'center', margin: 2 }]}>
          <HeaderText text={text1} style={textStyle} />
          <HeaderText text={noteText} style={textStyle} />
        </View>
      </View>

      <TouchableOpacity style={[{ flexDirection: 'row', justifyContent: 'space-between', margin: 2 }]}>

        {conditionalText2}
        {conditionalHandle}
      </TouchableOpacity>





      <Modal visible={isModalVisible} animationType="slide" transparent={true} >
        <View style={{ flex: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <Calendar />
          <TouchableOpacity onPress={closeModal} style={{ position: 'absolute', top: 20, right: 20, marginTop: 130 }}>
            <Text style={{ fontSize: 15 }}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  );
}

export default Header