import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Props {
    text: string,
    color?: string,
    wider?: boolean;
    action: ( textNumber: string ) => void;
}

export const ButtonCalc = ({text, color = "#2D2D2D", wider = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
        <View style={{
            ...styles.button,
            backgroundColor: color,
            width: (wider) ? 180 : 80
        }}>
            <Text style={{...styles.textButton,
                        color: (color === '#9B9B9B') ? 'black' : 'white'}}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}
