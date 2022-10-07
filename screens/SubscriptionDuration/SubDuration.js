import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll';
import { Colors } from '../../Constants/Color';
import { DatePickerItem } from '../../components/UI/SubscriptionDuration/DatePickerItem';
import SubEndDate from '../../components/UI/SubscriptionDuration/SubEndDate';
import { verticalScale } from 'react-native-size-matters';
import { subscriptionActions } from '../../store/subscription';
import PrimaryButton from '../../components/util/Buttons/PrimaryButton';

const SubDuration = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [buttonEnable, setButtonEnable] = useState(false)
    const startDate = useSelector(state => state.subscription.subscriptionStartDate)
    const endDate = useSelector(state => state.subscription.subscriptionEndDate)
    const status = useSelector(state => state.subscription.durationMode)
    var weekly = useSelector(state => state.subscription.weekly)
    var monthly = useSelector(state => state.subscription.monthly)
    const [year, setYear] = useState("    ")
    const [month, setMonth] = useState("     ")
    const [day, setDay] = useState("")
    const dayOfTheMonth = ` ${day} / ${month} / ${year}`
    let date_1 = new Date(startDate);
    let date_2 = new Date(endDate);
    let NoOfDays = 0

    const days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }


    if (status && endDate) {
        NoOfDays = (-(days(date_1, date_2)) + 1)
    }

    useEffect(() => {
        if (!status) {
            dispatch(subscriptionActions.subscriptionEndDateSelected(null))
        }
    }, [status, endDate])
    if (!status) {
        if (startDate) {
            if (weekly) {
                NoOfDays = 8
            }
            if (monthly) {
                NoOfDays = 31
            }
        }
    }
    useEffect(() => {
        if (!status) {
            if (startDate) {
                if (weekly) {
                    var today = new Date(startDate);
                    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
                    var dd = String(nextweek.getDate()).padStart(2, '0');
                    var mm = String(nextweek.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = nextweek.getFullYear();
                    console.log();
                    setYear(yyyy)
                    setMonth(mm)
                    setDay(dd)
                }
                if (monthly) {
                    var today = new Date(startDate);
                    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
                    var dd = String(nextweek.getDate()).padStart(2, '0');
                    var mm = String(nextweek.getMonth() + 1).padStart(2, '0');
                    var yyyy = nextweek.getFullYear();
                    console.log();
                    setYear(yyyy)
                    setMonth(mm)
                    setDay(dd)
                }
            }
        }
    }, [status, startDate, weekly, monthly])
    useEffect(() => {
        if (status) {
            NoOfDays = 0
            setYear("     ")
            setMonth("     ")
            setDay("     ")

        }
    }, [status])
    useEffect(() => {
        if (endDate) {
            var nextweek = new Date(endDate);
            var dd = String(nextweek.getDate()).padStart(2, '0');
            var mm = String(nextweek.getMonth() + 1).padStart(2, '0');
            var yyyy = nextweek.getFullYear();
            setYear(yyyy)
            setMonth(mm)
            setDay(dd)

        }
    }, [endDate])
    const continueHandler = () => {
        if (buttonEnable) {
            navigation.navigate("finalize")
        }
    }
    useEffect(() => {
        dispatch(subscriptionActions.dayAndDate({ NoOfDays: NoOfDays, dayOfTheMonth: dayOfTheMonth }))
    }, [NoOfDays, dayOfTheMonth])
    useEffect(() => {
        if (startDate && day && month && year) {
            setButtonEnable(true)
        }
    }, [startDate, day, month, year])
    return (
        <View style={{ flex: 1 }}>
            <HeaderBarWithoutScroll text={"Subscription Duration"} />
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Choose the start date and dutation of your subscription</Text>
                    <Text style={styles.text}>You can customize the duration if you want</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#E6E6E6" }} />
                <View style={styles.startDateContainer}>
                    <Text style={styles.startDate}>Subscription Start Date</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={styles.textStart} >Start Date :</Text>
                        <View style={{ flex: 1, marginHorizontal: 16 }}>
                            <DatePickerItem color={Colors.yellow100} status={true} />
                        </View>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#E6E6E6" }} />
                <View style={{ flex: 4, zIndex: 2 }}>
                    <SubEndDate />
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#E6E6E6" }} />
                <View style={{ flex: 3, padding: 8, paddingLeft: 8, }}>
                    <View style={{ flex: 1.5 }}>
                        <Text style={styles.startDate}>Subscription End Date</Text>
                        <Text style={[styles.text, { marginVertical: 0 }]}>As per your choices,</Text>
                    </View>
                    <View style={styles.endDateContainer}>
                        <Text style={styles.text}>Subscription End date:</Text>
                        <View style={styles.endDateShownContainer}>
                            <Text style={styles.dateText}> {day} / {month} / {year}</Text>
                        </View>
                    </View>
                    <View style={styles.noOfDaysOuterContainer}>
                        <Text style={styles.text}>Total Number of Days:</Text>
                        <View style={styles.noOfDays}>
                            <View style={styles.noOfDaysInnerContainer}>
                                <Text style={styles.text}>{NoOfDays}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonBorderContainer}>
                    <PrimaryButton onPress={continueHandler} styless={{ backgroundColor: Colors.yellow100, marginVertical: 8 }}>Finalise Your Subscription</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default SubDuration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    text: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16,
        marginHorizontal: 4,
        marginVertical: 0
    }
    ,
    textContainer: {
        flex: 1.5,
        padding: 8,
        justifyContent: "center",
        // alignItems:"center"
    },
    startDateContainer: {
        flex: 1.6,
        padding: 8,
        zIndex: 10,
        marginHorizontal: 4,

    },
    textStart: {
        fontSize: verticalScale(16),
        marginBottom: 8,
        color: Colors.deepBlue100,
        fontFamily: "Regular",
    },
    startDate: {
        fontFamily: "ExtraBold",
        fontSize: 18,
        marginBottom: 8,
        color: Colors.deepBlue100,

    },
    endDateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center",
        marginVertical: 0,
    },
    endDateShownContainer: {
        borderWidth: 1,
        borderColor: Colors.yellow100,
        height: 35,
        flex: 0.9,
        // padding: 8,
        borderRadius: 8,
    },
    noOfDays: {
        height: 35,
        flex: 0.9,
        borderRadius: 8,
        flexDirection: "column",
    },
    buttonBorderContainer: {
        flex: 1.8,
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: Colors.grey95
    },
    noOfDaysOuterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center",
        marginVertical: 8
    },
    noOfDaysInnerContainer: {
        width: 50,
        borderWidth: 1,
        borderColor: Colors.yellow100,
        flex: 1.5,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    dateText: {
        fontFamily: "Regular",
        fontSize: 16,
        color: Colors.deepBlue100
    }

})
