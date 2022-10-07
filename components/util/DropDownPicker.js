import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SvgXml } from 'react-native-svg'
import { Colors } from '../../Constants/Color';
import { Veg_NonVeg } from '../../Constants/SVG';
import { mealsActions } from '../../store/meals';
import { Entypo } from '@expo/vector-icons';
import { addonsActions } from '../../store/addons';
import { useSelector } from 'react-redux';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const DropDownPickerItem = ({ data, placeholder }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [typeItem, setTypeItem] = useState("")
    const [place, setPlace] = useState("select")
    const [ingredientItem, setIngredientItem] = useState("")
    const type = useSelector(state => state.addon.dropDownMealType)
    const typeItems = useSelector(state => state.addon.typeItem)
    const renderItem = (item) => {
        return (
            <View style={{ flexDirection: "row", padding: 8 }}>
                <Text style={{ marginHorizontal: 8, fontFamily: "Regular", color: Colors.deepBlue100 }} >{item.label}</Text>
            </View>
        )
    }
    const PlaceHolderitem = <Text>Select {placeholder}</Text>
    useEffect(() => {

        if (placeholder === 'Type') {
            setTypeItem(value)
            dispatch(addonsActions.typeItemSelected(value))
        }
        else if (placeholder === "Ingredient") {
            setIngredientItem(value)
            dispatch(addonsActions.ingredientItemSelected(value))
        }
    }, [placeholder, value])
    useEffect(() => {
        if (typeItems !== null) {
            setValue("All")

        }
    }, [type])
    return (
        <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={[styles.placeholderStyle, { fontSize: 11 }]}
            containerStyle={styles.dropDownStyle}
            selectedTextStyle={{ fontFamily: "Bold", color: Colors.deepBlue100, fontSize: 14 }}
            data={data}
            labelField="label"
            valueField={(isFocus) ? PlaceHolderitem : "value"}
            placeholder={PlaceHolderitem}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            renderItem={renderItem}
            onChange={item => {
                setValue(item.value);

                setIsFocus(false);
            }}
            renderRightIcon={() => (
                <View style={{ flexDirection: "row" }}>
                    <MaterialIcons name={isFocus ? "arrow-drop-up" : "arrow-drop-down"} size={24} color="black" style={styles.icon} />
                </View>
            )}
        />
    );
};

export default DropDownPickerItem;

const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        padding:8,
        maxHeight: screenHeight/18,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: Colors.yellow100,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    dropDownStyle: {
        borderWidth: 1,
        padding: 8,

        borderColor: Colors.yellow100,
        borderRadius: 8,
        // marginTop:-16,
        backgroundColor:Colors.grey98
    },
    icon: {
        // marginLeft: 16,
    },
    placeholderStyle: {
        fontFamily: "Regular",
        color: Colors.grey44
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: "Regular",
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});