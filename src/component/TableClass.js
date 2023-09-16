import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';


const tableData = [
  {
    title: 'Lớp Mầm',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },
  {
    title: 'Lớp Chồi',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },
  {
    title: 'Lớp Lá',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },

  {
    title: 'Lớp 5 tuổi',
    data: [
      ['Stt', 'Họ và Tên', 'Giới tính', 'Ngày sinh', 'Tên phụ huynh', 'Nhận xét'],
      ['1', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['2', 'Nguyễn Đình Thành', 'Nam', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['3', 'Nguyễn Thị Thanh Tâm', 'Nữ', '12/12/2023', 'Long', 'Ngoan ngoãn'],
      ['4', 'Nguyễn Thị Thanh ', 'Nữ', '12/10/2023', 'Long', 'Ngoan ngoãn'],
    ]
  },



];
const TableClasss = (props) => {
  const navigation = useNavigation();
  const { classroom = '' } = props;
  const [selectedClass, setSelectedClass] = useState(classroom);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Lấy dữ liệu của lớp hiện tại
  const currentClassData = tableData.find((item) => item.title === selectedClass);

  const handleStudentPress = (student) => {
    setSelectedStudent(student)
    navigation.navigate('DetailStudent', { student })
  }


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
        {currentClassData.data ? (
          <>
            <Row data={currentClassData.data[0].slice(0, 4)} style={styles.head} textStyle={styles.text} />
            {currentClassData.data.slice(1).map((student, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleStudentPress(student)}
                style={styles.studentRow}
              >
                <Row data={student.slice(0, 4)} textStyle={styles.text} />
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text>No data available</Text>
        )}

        {/* <Rows data={currentClassData.data.slice(1)} textStyle={styles.text} /> */}
      </Table>


    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  studentRow: { borderWidth: 1, borderColor: '#c8e1ff' }, // CSS cho dòng học sinh
});

export default TableClasss