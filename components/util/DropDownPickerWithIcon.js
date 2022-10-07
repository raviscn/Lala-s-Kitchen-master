import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SvgXml } from 'react-native-svg'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Colors } from '../../Constants/Color';
import { NonVegMeal, VegMeal, Veg_NonVeg } from '../../Constants/SVG';
import { addonsActions } from '../../store/addons';
import { mealsActions } from '../../store/meals';

var screenHeight = Dimensions.get('window').height;
const DropDownPickerWithIcon = ({ data }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('All');
    const [isFocus, setIsFocus] = useState(false);
    const [icon, setIcon] = useState(Veg_NonVeg)
    const mealType = useSelector(state => state.addon.dropDownMealType)
    const renderItem = (item) => {
        return (
            <View style={{ flexDirection: "row", padding: 8, alignItems: "center" }}>
                <SvgXml xml={item.icon} />
                <Text style={{ marginHorizontal: 8, fontFamily: "Regular", color: Colors.deepBlue100 }}>{item.label}</Text>
            </View>
        )
    }
    // console.log("value " + value);
    useEffect(() => {
        dispatch(addonsActions.dropDownMealTypeSelected(value))
    }, [value])
    useEffect(() => {
        if (mealType === "All") {
            setIcon(Veg_NonVeg)
        }
        else if (mealType === "Non-Veg") {
            setIcon(NonVegMeal)
        }
        else if (mealType === 'Veg') {
            setIcon(VegMeal)
        }
    }, [mealType])
    return (
        <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            containerStyle={styles.dropDownStyle}
            data={data}
            placeholder=""
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.label);
                setIsFocus(false);
            }}
            renderLeftIcon={() => (
                <View>
                    {<SvgXml xml={icon} />}
                </View>
            )}

            renderItem={renderItem}
            renderRightIcon={() => (
                <MaterialIcons name={isFocus ? "arrow-drop-up" : "arrow-drop-down"} size={24} color="black" style={styles.icon} />
            )}
        />
    );
};

export default DropDownPickerWithIcon;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    dropdown: {
        padding: 8,
        borderColor: Colors.yellow100,
        borderWidth: 1,
        maxHeight: screenHeight / 18,
        flex: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    dropDownStyle: {
        borderWidth: 1,
        borderColor: Colors.yellow100,
        borderRadius: 8,
        width: 150,
        justifyContent: "center",
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
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