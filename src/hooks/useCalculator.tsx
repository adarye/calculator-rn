import { useRef, useState } from "react";

enum Operators
{
    add, substract, multiply, divide
}

export const useCalculator = () => {
    
    const [previousNumber, setPreviousNumber] = useState('0')
    const [number, setNumber] = useState('0')
    const operation = useRef<Operators>()


    const clean = () => {
        setNumber('0')
        setPreviousNumber('0')
    }

    const buildNumber = (textNumber : string) => 
    {
        if(number.includes('.') && textNumber === '.') return

        if(number.startsWith('0') || number.startsWith('-0'))
        {
            if(textNumber === '.')
            {
                setNumber(number + textNumber)
            }
            else if(textNumber === '0' && number.includes('.'))
            {
                setNumber(number + textNumber)
            }
            else if(textNumber !== '0' && !number.includes('.'))
            {
                setNumber(textNumber)
            }
            else if(textNumber === '0' && !number.includes('.'))
            {
                setNumber(number)
            }
            else
            {
                setNumber(number + textNumber)
            }
        }
        else
        {   
            setNumber(number + textNumber)
        }
    }

    const sumOrRest = () => 
    {
        if(number.includes('-'))
        {
            setNumber( number.replace('-', ''))
        }
        else
        {
            setNumber('-' + number)
        }
    }

    const btnDelete = () => {
        let negative = ''
        let numberTemp = number
        if(number.includes('-'))
        {
            negative = '-'
            numberTemp = number.substring(1)
        }

        if(numberTemp.length > 1)
        {
            setNumber(negative + numberTemp.slice(0, -1))
        }
        else
        {
            setNumber('0')
        }
    }

    const changePreviousNumber = () => 
    {
        if(number.endsWith('.'))
        {
            setPreviousNumber(number.slice(0, -1))
        }
        else
        {
            setPreviousNumber(number)
        }

        setNumber('0')
    }

    const btnDivide = () => 
    {
        changePreviousNumber()
        operation.current = Operators.divide
    }

    const btnMultiply = () => 
    {
        changePreviousNumber()
        operation.current = Operators.multiply
    }

    const btnSubstract = () => 
    {
        changePreviousNumber()
        operation.current = Operators.substract
    }

    const btnAdd = () => 
    {
        changePreviousNumber()
        operation.current = Operators.add
    }

    const calculate = () => 
    {
        const num1 = Number(number)
        const num2 = Number(previousNumber)

        switch (operation.current) 
        {
            case Operators.add:
                setNumber(`${num1 + num2}`)
            break;
            case Operators.substract:
                setNumber(`${num2 - num1}`)
            break;
            case Operators.multiply:
                setNumber(`${num1 * num2}`)
            break;
            case Operators.divide:
                setNumber(`${num2 / num1}`)
            break;
            default:
                break;
        }

        operation.current = undefined

        setPreviousNumber('0')
    }

    return {
        previousNumber,
        number,
        clean,
        sumOrRest,
        btnDelete,
        btnDivide,
        buildNumber,
        btnSubstract,
        btnAdd,
        calculate,
        btnMultiply
    }
}