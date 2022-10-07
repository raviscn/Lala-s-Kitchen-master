import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import ModalDropdown from 'react-native-modal-dropdown';
import { Colors } from '../../Constants/Color';


const PickerItem = ({ children }) => {
  const [area, setArea] = useState(children)
  const [fontBold, setFontBold] = useState("900")
  const selectedtem = (e, value) => {
    console.log("dd" + value);
    setArea(value)
    setFontBold("500")
  }

  return (

    <View style={styles.container}>
      <ModalDropdown
        options={['option 1', 'option 2', 'option3', 'option4', 'option5', 'option6']}
        style={styles.dropDown}
        dropdownStyle={styles.dropDownList}
        defaultValue="Area"
        onSelect={(idx, value) => selectedtem(idx, value)}
      >
        <View style={styles.dropDownInnerContainer}>
          <Text style={{ fontWeight: fontBold,fontFamily:"ExtraBold" }}>{area}</Text>

          <MaterialIcons name="arrow-drop-down" size={24} color="black" style={styles.icon} /></View>

      </ModalDropdown>

    </View>


  )
}

export default PickerItem
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  dropDown: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 8,
    borderColor: Colors.yellow100,
    justifyContent: 'flex-end',
    // marginHorizontal: 10,
  },
  dropDownList: {
    width: 250,
    borderRadius: 10,
    borderWidth: 2,
    // width: "100%",
    borderColor: Colors.yellow100,
    justifyContent: 'flex-end',
  },
  dropDownInnerContainer: {
    flexDirection: "row",
   
    justifyContent: "space-between"
  },
  dropDownText: {
   fontFamily:'Bold'
  },
  icon: {
    fontSize: 30
  }
})