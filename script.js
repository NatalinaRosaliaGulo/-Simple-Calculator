const hapus = document.querySelectorAll(".delete_input")
hapus.forEach((delete_input) => {
    delete_input.addEventListener("click", (event) => {
        if (typeof(currentNumber) == 'string') {
            currentNumber = currentNumber.replace(currentNumber.charAt(currentNumber.length-1), '')
        } else {
            currentNumber = currentNumber.toString()
            currentNumber = currentNumber.replace(currentNumber.charAt(currentNumber.length-1), '')
        }
        
        if (currentNumber.length == 0) {
            currentNumber = '0'
            updateScreen(currentNumber)
        }
        updateScreen(currentNumber)
    })
})


const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})


const calculatorScreen = document.querySelector('.calc-screen') 
const updateScreen = (number) => {
    calculatorScreen.value = number
}


let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number 
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(event.target.value) 
    })
})


const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}


const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            if (parseFloat(currentNumber) == 0){
                result = parseFloat(prevNumber) + parseFloat(currentNumber)
            } else{
                result = parseFloat(prevNumber) + parseFloat(currentNumber)
            }             
            break
        case "-":
            if (parseFloat(currentNumber) == 0) {
                result = parseFloat(prevNumber) - parseFloat(currentNumber)
            } else{
                result = parseFloat(prevNumber) - parseFloat(currentNumber)
            }             
            break
        case "*":
            if (parseFloat(currentNumber) == 0) {
                result = parseFloat(prevNumber)
            } else{
                result = parseFloat(prevNumber) * parseFloat(currentNumber)
            }             
            break
        case "/":
            if (parseFloat(currentNumber) == 0) {
                result = parseFloat(prevNumber)
            } else{
                result = parseFloat(prevNumber) / parseFloat(currentNumber)
            }             
            break
        case "%":
            if (parseFloat(currentNumber) == 0) {
                result = parseFloat(prevNumber) /100 
            } else{
                result = 0
            }   
            break           
        default:
            break         
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)  
})
