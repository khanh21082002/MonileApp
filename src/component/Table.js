import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const TableMeal = () => {
  const tableData = [
    ['Thời gian', 'Thực đơn'],
    ['8h-9h', 'Uống sữa'],
    ['10h30-11h30', 'Ăn trưa: Cơm, canh, thịt lợn'],
    ['14h-15h', 'Ăn cháo'],
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
  text: { margin: 6 },
});

export default TableMeal