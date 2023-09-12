import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const TimeTable = () => {
  const tableData = [
    ['Thứ 2, Ngày 20, Tháng 10 ,Năm 2023'],
    ['Thời gian', 'Hoạt động'],
    ['7h-8h', 'Đón học sinh'],
    ['8h-9h', 'Uống sữa , Vui chơi'],
    ['10h30-11h30', 'Ăn trưa'],
    ['12h-14h', 'Ngủ trưa'],
    ['15h-16h', 'Ăn cháo'],
    ['16h-17h', 'Vừa học vừa chơi'],
    ['17h', 'Đón học sinh về'],
    
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableData[0]} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData.slice(1)} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 , textAlign: 'center' },
});

export default TimeTable;