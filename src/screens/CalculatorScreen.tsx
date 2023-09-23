import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { ButtonCalc } from "../components/ButtonCalc";
import { useCalculator } from "../hooks/useCalculator";


const CalculatorScreen = () => 
{
    const { previousNumber, number, clean, sumOrRest, btnDelete, btnDivide, btnMultiply, buildNumber, btnSubstract, btnAdd, calculate } = useCalculator()

  return (
    <View style={styles.container}>
        {
            (previousNumber !== '0') && (<Text style={styles.smallResult}>{previousNumber}</Text>)
        }
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
        <View style={styles.row}>
            <ButtonCalc text="C"  color="#9B9B9B" action={clean}/>
            <ButtonCalc text="+/-" color="#9B9B9B" action={sumOrRest}/>
            <ButtonCalc text="del" color="#9B9B9B" action={btnDelete}/>
            <ButtonCalc text="/" color="#FF9427" action={btnDivide}/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text="7"  action={buildNumber}/>
            <ButtonCalc text="8" action={buildNumber}/>
            <ButtonCalc text="9" action={buildNumber}/>
            <ButtonCalc text="X" color="#FF9427" action={btnMultiply}/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text="4"  action={buildNumber}/>
            <ButtonCalc text="5" action={buildNumber}/>
            <ButtonCalc text="6" action={buildNumber}/>
            <ButtonCalc text="-" color="#FF9427" action={btnSubstract}/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text="1"  action={buildNumber}/>
            <ButtonCalc text="2" action={buildNumber}/>
            <ButtonCalc text="3" action={buildNumber}/>
            <ButtonCalc text="+" color="#FF9427" action={btnAdd}/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text="0" wider action={buildNumber}/>
            <ButtonCalc text="." action={buildNumber}/>
            <ButtonCalc text="=" color="#FF9427" action={calculate}/>
        </View>
    </View>
  )
}

export default CalculatorScreen;
