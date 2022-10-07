import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { Backarrow, Diabetic, Healthy, Regular } from '../../Constants/SVG';
import { Colors } from '../../Constants/Color';
import PrimaryButton from '../../components/util/Buttons/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../../components/util/LoadingOverlay';
import { useSelector } from 'react-redux';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;



const Category = ({ setModalVisible }) => {
    console.log(cardData);
    let mealIcon = null
    const navigation = useNavigation();
    const [Loading, setLoading] = React.useState(null)

    const cardData = useSelector(state => state.meal.cardData)
    const mealType = useSelector(state => state.meal.mealType)

    if (cardData.category === "Regular") {
        mealIcon = Regular
    }
    else if (cardData.category === 'Healthy') {
        mealIcon = Healthy
    }
    else if (cardData.category === 'Diabetic') {
        mealIcon = Diabetic
    }
    function onLoading(value, label) {
        setLoading(value)
    }
    const backHandler = () => {
        setModalVisible(false)
    }
    const menuHandler = () => {
        console.log("kkkkkkkkkkkkkkk");
         navigation.navigate("menu")
    }
    return (
        <View style={{ flex: 1, borderRadius: 20 }}>
            {/* {Loading &&
                <View style={{ justifyContent: "center", alignSelf: "center", alignContent: "center" }}>
                    <LoadingOverlay />
                </View>} */}
            <View style={styles.container}>
                <View style={{ flex: 1, borderRadius: 20, backgroundColor: "white" }}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={cardData.image} style={styles.image}
                            onLoadStart={() => onLoading(true, 'onLoadStart')}
                            onLoadEnd={() => onLoading(false, 'onLoadEnd')}
                            resizeMode="cover">
                            <TouchableOpacity style={styles.backContainer} onPress={backHandler}>
                                <SvgXml xml={Backarrow} />
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <SvgXml xml={mealIcon} height={30} width={30} style={{ marginRight: 20, marginVertical: 10, }} />
                                <Text style={[styles.text,]}>{cardData.category}</Text>
                            </View>
                            <View>
                                <SvgXml xml={mealType} />
                            </View>
                        </View>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                    <View style={{ flex: 1 ,margin:8}}>
                        <PrimaryButton onPress={menuHandler}>View Menu</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#b0a9a9"

    },
    imageContainer: {
        height: screenHeight / 2.3,
        width: '100%',
        borderRadius: 20,
    },
    image: {
        height: "100%",
        width: "100%",
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        borderRadius: 20,
        overflow: "hidden"
    },
    backContainer: {
        backgroundColor: Colors.grey90,
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        padding: 10,
        borderRadius: 15
    },
    text: {
        fontSize: 20,
        fontFamily: "ExtraBold",
        color: Colors.deepBlue100,
    },
    description: {
        fontFamily: "Regular",
        textAlign: "justify",
        fontSize: 16
    },
    textContainer: {
        flex: 3,
        margin: 20,
    },
})