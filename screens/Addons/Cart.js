import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import { useSelector } from 'react-redux'
import AddonsCard from '../../components/util/Cards/AddonsCard'
import CartCard from '../../components/util/Cards/CartCard'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../../Constants/Color'
import { useEffect } from 'react'
import { useState } from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'

const Cart = () => {
  var sum = 0
  const [price, setPrice] = useState(0)
  const itemData = useSelector(state => state.addon.cartData)
  useEffect(() => {
    for (let i = 0; i < itemData.length; i++) {
      sum += itemData[i].price * itemData[i].quantity
      setPrice(sum)
    }
  }, [itemData, sum,price])

  const GST = (price * 9) / 100
  const TotalPrice = price + GST
  console.log("cartt : " + JSON.stringify(itemData));
  return (
    <View style={{ flex: 1, backgroundColor: Colors.grey95 }}>
      <HeaderBarWithoutScroll text={"Cart"} />
      <View style={styles.container}>
        <View style={{flex:7}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor: Colors.greyWhite, borderRadius: 8 }}>
          {itemData.map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
          <View style={styles.priceContainer}>
            <View style={{ alignItems: "flex-start" }}>
              <View style={{ flexDirection: "row", marginVertical: 8, width: 224, justifyContent: "space-between" }}>
                <Text style={styles.priceText}>Total Price</Text>
                <Text style={styles.priceText}>₹{price}</Text>
              </View>
              <View style={{ flexDirection: "row", marginVertical: 8, width: 224, justifyContent: "space-between" }}>
                <Text style={styles.priceText}>GST:9%</Text>
                <View style={{ alignSelf: "flex-end" }}>
                  <Text style={styles.priceText}>₹ {GST}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginVertical: 8, borderTopWidth: 1, borderColor: Colors.grey10, width: 224, justifyContent: "space-between" }}>
                <Text style={[styles.priceText, { marginTop: 8, fontFamily: "Bold", fontSize: 20 }]}>Total Price</Text>
                <Text style={[styles.priceText, { marginTop: 8, fontSize: 20, fontFamily: "ExtraBold" }]}>₹{TotalPrice}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        </View>
        <View style={{ backgroundColor: Colors.grey90, height: 1 }}></View>
      <PrimaryButton  styless={{ height: 80, marginHorizontal: 0, }}>Continue with Payment</PrimaryButton>
      </View>
    </View>
  )
}


export default Cart

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
  },
  priceContainer: {
    padding: 16,
    // flex: 1,
    alignItems: "flex-end",
  },
  priceText: {
    fontFamily: "Regular",
    color: Colors.deepBlue100,
    fontSize: 16,
    textAlign: 'right',
  },
})