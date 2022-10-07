import { StyleSheet, View, ScrollView, Text, Alert, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import OutlinedButton from '../../components/util/Buttons/SecondaryButton'
import UserInput from '../../components/util/UserInput'
import { Colors } from '../../Constants/Color'
import { useEffect } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/User'

const AccountCreation = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({ enteredNumber: "", fName: "", lName: "" })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const buttonhandler = () => {

    if (!userDetails.enteredNumber.trim()) {
      setError("Numbers can't be blank")
      setUserDetails({ enteredNumber: "" })
      // Alert.alert('please check your number')
      return;
    }
    if (userDetails.enteredNumber.length < 10) {
      setError('Please enter 10 numbers')
      return;
    }
    dispatch(userActions.userDetailsSelected(userDetails))
    navigation.navigate('otpScreen', { number: userDetails.enteredNumber })
  }
  const inputHandler = (inputIdentifier, enteredValue) => {
    setUserDetails(currentInputValues => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  useEffect(() => {
    if (userDetails.enteredNumber.length === 10) {
      setError("")
    }
    // if (enteredNumber.trim()) {
    //   setError("")
    // }

  }, [error, userDetails.enteredNumber])
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.scrollViewContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <View style={{ marginVertical: 16 }}>
          <Text style={styles.welcomeText}>Create  Account</Text>
          <Text style={styles.fallbackText}>Create your account by adding personal details and verifying phone number.</Text>
        </View>
        <Text style={styles.text}>First Name</Text>
        <UserInput
          placeholder="Enter First Name"
          onChange={inputHandler.bind(this, 'fName')}
          value={userDetails.fName}
          maxLength={10}
        >Enter  your Mobile Number</UserInput>
        <Text style={styles.text}>Last Name</Text>
        <UserInput
          placeholder="Enter Last Name"
          onChange={inputHandler.bind(this, 'lName')}
          value={userDetails.lName}
          maxLength={10}
        >Enter  your Mobile Number</UserInput>
        <Text style={styles.text}>Phone number</Text>
        <UserInput
          keyboardType="number-pad"
          placeholder="Enter 10 Digit Phone Number"
          onChange={inputHandler.bind(this, 'enteredNumber')}
          value={userDetails.enteredNumber}
          maxLength={10}
        >Enter  your Mobile Number</UserInput>
        <Text style={styles.errorText}>{error}</Text>


      </KeyboardAvoidingView>
      <PrimaryButton onPress={buttonhandler}>Verify</PrimaryButton>
    </Pressable>
  )
}

export default AccountCreation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
  },
  scrollViewContainer: {
    flex: 8,
  },
  welcomeText: {
    fontSize: 28,
    marginVertical: 10,
    fontFamily: 'Bold',
    lineHeight: 30,
    color: Colors.deepBlue100
  },

  fallbackText: {
    color: Colors.grey50,
    fontFamily: 'Regular',
    fontSize: 16,
    // marginVertical: 25,
    color: Colors.deepBlue100
  },
  text: {
    fontFamily: "Regular",
    fontSize: 16,
    marginTop: 8,
    color: Colors.deepBlue100,
  },
  errorText: {
    color: Colors.orange100,
    fontSize: 15
  },
})