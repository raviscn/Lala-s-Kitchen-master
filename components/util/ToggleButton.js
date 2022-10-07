import { StyleSheet, View, Text, Switch } from 'react-native'
import { Colors } from '../../Constants/Color'
import SwitchToggle from "react-native-switch-toggle";
const ToggleButton = ({ state, meal }) => {
    return (
        // <View style={{ marginHorizontal: 15 }}>
            <SwitchToggle
                switchOn={state}
                onPress={meal}
                circleColorOff='#707070'
                circleColorOn={Colors.yellow100}
                backgroundColorOn='white'
                backgroundColorOff='white'
                containerStyle={{
                    width: 48,
                    height: 24,
                    borderRadius: 24,
                    borderColor: state ? Colors.yellow100 : "#707070",
                    borderWidth: 1,
                }}
                circleStyle={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                }}
            />
        // </View>

    )
}

export default ToggleButton

const styles = StyleSheet.create({})