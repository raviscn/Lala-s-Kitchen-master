import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import { Colors } from '../../Constants/Color'
import { SvgXml } from 'react-native-svg'
import { Cash, CreditCard, Google, GooglePay, LightArrow, NetBanking, Wallet } from '../../Constants/SVG'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'


const Payment = () => {
    return (
        <View style={styles.container}>
            <HeaderBarWithoutScroll text={"Payment"} />
            <ScrollView style={{ padding: 16, flex: 1, backgroundColor: "#F5F5F5" }} contentContainerStyle={{ flex: 0 }}>

                <View style={styles.nameContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Text style={styles.text}>Name</Text>
                        <Text style={styles.text}>Phone Number</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Text style={styles.boldText}>Customer Name</Text>
                        <Text style={styles.boldText}>+91-7034551432</Text>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.text}>Total Amount</Text>
                    <Text style={[styles.boldText, { fontSize: 20 }, { color: Colors.deepBlue100 }]}>₹5000.80</Text>
                </View>
                <View style={styles.paymentContainer}>
                    <Text style={[styles.text, { fontFamily: "ExtraBold" }]}>Preferred Payment</Text>
                    <View style={{ flexDirection: "row", padding: 8, marginVertical: 8 }}>
                        <SvgXml xml={GooglePay} />
                        <Text style={[styles.text, { marginHorizontal: 16 }]}>GooglePay</Text>
                    </View>


                    <View style={styles.paymentButton}>
                        <Text style={{ fontFamily: "ExtraBold", color: Colors.deepBlue100, fontSize: 16 }}> Pay with</Text>
                        <SvgXml xml={Google} height={90} width={50}></SvgXml>
                        <Text style={{ fontFamily: "ExtraBold", color: Colors.deepBlue100, fontSize: 16 }}> Pay</Text>
                    </View>


                    <View style={{ marginVertical: 16 }}>
                        <Text style={[styles.text, { fontFamily: "ExtraBold" }, { marginVertical: 8 }]}>Other Payment Options</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8, alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <SvgXml xml={CreditCard} />
                                <Text style={styles.paymentModeText}>Credit Card</Text>
                            </View>
                            <View>
                                <SvgXml xml={LightArrow} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8, alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <SvgXml xml={NetBanking} />
                                <Text style={styles.paymentModeText}>Net Banking</Text>
                            </View>
                            <View>
                                <SvgXml xml={LightArrow} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8, alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <SvgXml xml={Wallet} />
                                <Text style={styles.paymentModeText}>Wallet</Text>
                            </View>
                            <View>
                                <SvgXml xml={LightArrow} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8, alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <SvgXml xml={Cash} />
                                <Text style={styles.paymentModeText}>Cash on Delivery</Text>
                            </View>
                            <View>
                                <SvgXml xml={LightArrow} />
                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView >


        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    paymentContainer: {
        // flex: 6,
        padding: 16,
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        marginVertical: 8,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "white"
    },
    amountContainer: {
        height: 80,
        padding: 16,
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    nameContainer: {
        height: 80,
        padding: 16,
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        marginVertical: 8
    },
    text: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16
    },
    boldText: {
        fontFamily: "Bold",
        marginVertical: 8,
        // color: Colors.deepBlue100,
        fontSize: 16
    },
    paymentModeText: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16,
        marginHorizontal: 8,
        // marginVertical: 8
    },
    paymentButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.yellow100,
        height: 60,
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    }

})