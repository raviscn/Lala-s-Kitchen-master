import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Constants/Color'
import SubscriptionItem from '../Subscription/SubscriptionItem'
import Duration from './Duration'
import { useDispatch } from 'react-redux'
import ToggleButton from '../../util/ToggleButton'
import { DatePickerItem } from './DatePickerItem'
import { mealsActions } from '../../../store/meals'
import { DatePickerEnd } from './DatePickerEnd'
import { useEffect } from 'react'
import SwitchToggle from 'react-native-switch-toggle'
import { subscriptionActions } from '../../../store/subscription'

const SubEndDate = () => {
    const dispatch = useDispatch()
    const [endDate, setEndDate] = useState(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        dispatch(subscriptionActions.durationModeSelected(status))
    }, [status])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Subscription Duration</Text>
            <View style={{ flex: 3, maxHeight: 48, }}>
                <Duration status={status} />
            </View>
            <View style={{ flex: 6 }}>
                <Text style={styles.textDesc}>or,you can choose an end date until which food is delivered</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    
                        <SwitchToggle
                            switchOn={status}
                            onPress={() => setStatus(!status)}
                            circleColorOff='#707070'
                            circleColorOn={Colors.yellow100}
                            backgroundColorOn='white'
                            backgroundColorOff='white'
                            containerStyle={{
                                width: 48,
                                height: 24,
                                top:5,
                                borderRadius: 24,
                                borderColor: status ? Colors.yellow100 : "#707070",
                                borderWidth: 1,
                            }}
                           
                            circleStyle={{
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                            }}
                        />
                    <View style={{ flexDirection: "row", flex: 1, zIndex: 100 }}>
                        <Text style={styles.textEnd} >End Date :</Text>
                        <DatePickerEnd color={status ? Colors.yellow100 : Colors.grey64} status={status} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SubEndDate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        zIndex: 100,marginHorizontal:4
    },
    text: {
        fontFamily: "ExtraBold",
        fontSize: 18,
        marginBottom: 8,
        color: Colors.deepBlue100
    },
    textDesc: {
        // fontSize: 16, 
        marginVertical: 8,
        color: Colors.deepBlue100,
        fontFamily: "Regular"
    },
    textEnd: {
        marginVertical: 8,
        color: Colors.deepBlue100,
        fontFamily: "Regular",
        marginHorizontal: 8
    }
})