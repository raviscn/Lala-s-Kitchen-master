import { StyleSheet, View, ScrollView, Text, KeyboardAvoidingView, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import UserInput from '../../components/util/UserInput'
import PickerItem from '../../components/util/Picker'
import { Colors } from '../../Constants/Color'
import { useSelector } from 'react-redux'
const AddressScreen = ({ navigation, style }) => {
    const userDetails = useSelector(state => state.user.userDetails)
    console.log("user aa"+JSON.stringify(userDetails));
    const [area, setArea] = useState("")
    const [inputValues, setInputValues] = useState({
        fName: '',
        lName: '',
        houseName: '',
        location: '',
    });

    // will save user input
    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues(currentInputValues => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue,
            };
        });
    }

    const buttonhandler = () => {
        navigation.navigate('explore')
    }
    const areaSelectedHandler = (selectedInput) => {
        console.log(selectedInput);
        setArea(selectedInput)
    }
    console.log(inputValues
    );
    return (
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.scrollViewContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.textContainer}>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={styles.text}>Tell us about you</Text>
                        <UserInput placeholder="First Name"  value={userDetails.fName} />
                        <UserInput placeholder="LastName" value={userDetails.lName} />
                        <UserInput placeholder="House Name" onChange={inputChangeHandler.bind(this, 'houseName')} value={inputValues.houseName} />
                        <UserInput placeholder="Road/Location" onChange={inputChangeHandler.bind(this, 'location')} value={inputValues.location} />
                    </View>
                    <View style={{ marginVertical: 0 }}>
                        <Text style={styles.fallBackText}>Specify your location as accurate as possible</Text>
                        <PickerItem onSelect={areaSelectedHandler}>Area</PickerItem>
                        <PickerItem>Locality</PickerItem>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <PrimaryButton onPress={buttonhandler}>Confirm</PrimaryButton>
        </Pressable>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "white",
        // marginTop: 20,
    },
    scrollViewContainer: {
        flex: 8,
    },
    backButton: {
        color: "black"
    },
    text: {
        fontFamily: 'ExtraBold',
        fontSize: 15,
        color: Colors.deepBlue100

    },
    fallBackText: {
        // margin: 20,
        fontFamily: 'Regular',
        fontSize: 15,
        color: Colors.deepBlue100
    }
})