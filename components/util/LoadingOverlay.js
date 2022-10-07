import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'
import { Colors } from '../../Constants/Color';

function LoadingOverlay() {
    return (
        <View style={styles.rootContainer}>
            <LottieView
                source={require("../../assets/data.json")}
                style={{ width: 100, height: 200 }}
                autoPlay
            />
            <Text style={styles.message}>Loading....</Text>
        </View>
    );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    message: {
        fontSize: 16,
        fontFamily: 'Regular',
        color: Colors.deepBlue100
    },
});
