import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux'
import SubscriptionItem from '../../components/UI/Subscription/SubscriptionItem'
import { Colors } from '../../Constants/Color'
import CategoryButtons from '../../components/util/Buttons/ButtonsGroup/CategoryButtons'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import SubscriptionMeal from '../../components/UI/Subscription/SubscriptionMeal'
import { Add } from '../../Constants/SVG';
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll';
import { subscriptionActions } from '../../store/subscription';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const SubscriptionSetup = ({ navigation }) => {
  const dispatch = useDispatch()
  const input = useSelector(state => state.subscription.item)

  const [buttonEnable, setButtonEnable] = React.useState(false)
  const mealAddhandler = () => {
    dispatch(subscriptionActions.mealAdd())
  }

  const deleteHandler = (index) => {
    dispatch(subscriptionActions.deleteItem(index))
  }
  const continueHandler = () => {
    if (buttonEnable) {
      navigation.navigate("subDuration")
    }
  }

  useEffect(() => {
    input.map((item) => {
      if (item.breakfast || item.lunch || item.dinner) {
        setButtonEnable(true)
      }
      if (!item.breakfast && !item.lunch && !item.dinner) {
        setButtonEnable(false)
      }
      console.log("lunch" + item.lunch);
      console.log("breakfast : " + item.breakfast);
      console.log("dinner :" + item.dinner);
    })
  }, [input])
  return (
    <View style={styles.container}>
      <HeaderBarWithoutScroll text={"Setup Meals"} />
      <View style={{ flex: 7 }}>
        <ScrollView style={{ paddingHorizontal: 16, flex: 1 }} contentContainerStyle={{}}>
          <View style={styles.textContainer}>
            <Text style={styles.fallbackText}>Create a meal combination in one token and specify number of meals required with it.</Text>
            <Text style={styles.fallbackText}>Example: Non-Veg + Healthy + Breakfast for 2 people. </Text>
            <Text style={styles.fallbackText}>Use another token for a different combination</Text>
          </View>
          {input.map((u, i) => (


            <View style={styles.innerContainer} key={i}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.text}>Token No.{i + 1}</Text>
                {i > 0 &&
                  <TouchableOpacity style={styles.deleteContainer} onPress={() => { deleteHandler(i) }}>
                    <MaterialIcons name="delete" size={24} color={Colors.orange100} />
                  </TouchableOpacity>}
              </View>
              <SubscriptionItem id={i} item={u} />
              <CategoryButtons id={i} item={u} />
              <SubscriptionMeal id={i} item={u} />
            </View>
            //   : Alert.alert("Token Limit Exceeded", "You can only add 3 token")
            // )
          ))
          }
          <PrimaryButton onPress={mealAddhandler} styless={styles.anotherButton} >
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <SvgXml xml={Add} height="20"></SvgXml>
              <Text style={{ fontFamily: "ExtraBold", color: Colors.deepBlue100, }}> Add Another</Text>
            </View>
          </PrimaryButton>
        </ScrollView >
      </View>
      <View style={{ backgroundColor: Colors.grey95, height: 1 }}></View>
      <PrimaryButton onPress={continueHandler} styless={{ height: 64, marginHorizontal: 16, marginVertical: 8 }}>Continue</PrimaryButton>
    </View >
  )
}

export default SubscriptionSetup

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  innerContainer: {
    borderWidth: 1,
    borderColor: Colors.grey95,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8
  },
  deleteContainer: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    padding: 0,
    borderWidth: 1,
    borderColor: Colors.orange100,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  menuIconContainer: {
    position: 'absolute',
    marginTop: screenHeight / 1.4,
    backgroundColor: Colors.yellow100,
    padding: 20,
    borderRadius: 20,
    marginLeft: screenWidth / 1.3,
    justifyContent: 'flex-end',
    overflow: "hidden",
  },
  text: {
    fontFamily: 'Bold',
    marginVertical: 8,

  },
  textContainer: {
    borderWidth: 1,
    borderColor: Colors.grey95,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
    marginTop: 16,
  },
  fallbackText: {
    color: Colors.deepBlue100,
    fontFamily: "Regular",
    marginVertical: 4,
    fontSize: 16
  },
  anotherButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    height: 64
  },
})