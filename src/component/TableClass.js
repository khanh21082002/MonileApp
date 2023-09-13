import React , { useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Table, Row, Rows } from 'react-native-table-component';


const tableData = [
  {
    title: 'Lớp Mầm',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023'],
    ]
  },
  {
    title: 'Lớp Chồi',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023'],
    ]
  },
  {
    title: 'Lớp Lá',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023'],
    ]
  },

  {
    title: 'Lớp 5 tuổi',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023'],
      ['5', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023'],
    ]
  },



];
const TableClass = (props) => {
  const { classroom = '' } = props
  const [selectedClass, setSelectedClass] = useState(classroom); 

  // Lấy dữ liệu của lớp hiện tại
  const currentClassData = tableData.find((item) => item.title === selectedClass);


  return (
    <View style={styles.container}>
      {/* <Picker
        selectedValue={selectedClass}
        onValueChange={(itemValue) => setSelectedClass(itemValue)}>
        {tableData.map((item) => (
          <Picker.Item key={item.title} label={item.title} value={item.title} />
        ))}
      </Picker> */}
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={currentClassData.data[0]} style={styles.head} textStyle={styles.text} />
        <Rows data={currentClassData.data.slice(1)} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default TableClass