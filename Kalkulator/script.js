// bagian numbers
const numbers = document.querySelectorAll(".number")
console.log(numbers)

numbers. forEach((number) => {
console.log(number)})


numbers. forEach((number) => {
    number.addEventListener("click", () => {
        console.log("number is pressed")
    })
})

numbers. forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers. forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber  = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
    currentNumber += number
}
}

numbers. forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//bagian operators
const operators = document.querySelectorAll(".operator")
console.log(operators)

operators. forEach((operator) => {
    operator.addEventListener("click", () => {
        console.log("operator is pressed")
    })
})

operators. forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators. forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

// bagian equal-sign
const equalSign = document.querySelector(".equal-sign")
console.log(equalSign)

equalSign.addEventListener("click", () => {
    calculate ()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

//bagian AC
const clearBtn = document.querySelector(".all-clear")
console.log(clearBtn)

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//bagian decimal
const decimal = document.querySelector(".decimal")
console.log(decimal)

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

//bagian percentage
const percentage = document.querySelector(".percentage")
console.log(percentage)

percentage.addEventListener("click", (event) => {
    console.log(event.target.value)
})

inputPercentage = (percent) => {
    currentNumber += percent
}

percentage.addEventListener("click", (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})

inputPercentage = (percent) => {
    if(currentNumber.includes("%")) {
        return 
    }
    currentNumber /= 100
}

