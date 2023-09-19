import React, { useState } from "react";
import { TouchableOpacity, View, Modal, Text } from "react-native";
import DatePicker from "react-native-modern-datepicker"
import { useNavigation } from "@react-navigation/native";
import {getToday, getFormatedDate} from "react-native-modern-datepicker"



export default function Calendar() {
    
    const today = getToday();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(today);

    const startDate = getFormatedDate(today, "YYYY/MM/DD");
 
    function handleChange(date) {
        setDate(date)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!open}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:130 }}>
                <View style={{
                    margin: 20, backgroundColor: 'white', padding: 20, borderRadius: 20, width: '90%',
                    padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25, shadowRadius: 4, elevation: 5
                }}>
                    <DatePicker
                        mode="calendar"
                        minimunDate={startDate}
                        selected={date}
                        onDateChanged={handleChange}
                    />
                   
                </View>
            </View>
        </Modal>

    )

}