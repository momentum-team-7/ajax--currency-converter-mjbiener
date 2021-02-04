let dropDownMenus = document.querySelectorAll("select");
let convertButton = document.querySelector("button")

const url = "https://api.exchangeratesapi.io/latest?base="

for (let currencies of dropDownMenus) {
    currencies.addEventListener("change", changeCurrencies);
}

convertButton.addEventListener("click", convertClicked);


populateDropDownMenus()
changeCurrencies()


function convertClicked() {
    let fromCurrency = document.querySelector("#from-currency").value;
    let toCurrency = document.querySelector("#to-currency").value;
    let startingValue = parseInt(document.querySelector("input").value);
    let resultInfo = document.querySelector(".final-currency");
  
    let result;

    fetch(url+fromCurrency)  //from  or base//
    .then(response => {
        return response.json()
    })
    .then(data => {
        const conversionRate=data.rates[toCurrency];
        result = calculateConversion(startingValue, conversionRate);
        resultInfo.textContent = formatFinalCurrency(result);
    })
}


function calculateConversion(amount, conversionRate) {
  return amount * conversionRate  
}

function formatFinalCurrency(result) {
    return `$${result.toFixed(2)}`
}

function populateDropDownMenus() {
    let fromDropDown = document.querySelector("#from-currency");
    let toDropDown = document.querySelector("#to-currency");
    for (let i=0; i < currencies.length; i++) {
    let newOption1 = document.createElement("option");
    let newOption2 = document.createElement("option");
    newOption1.textContent = newOption2.textContent = currencies[i];
        
    fromDropDown.appendChild(newOption1);
    toDropDown.appendChild(newOption2);
    fromDropDown.selectedIndex = currencies.indexOf("USD");
    }
}

function changeCurrencies() {
    let baseLabel = document.querySelector("#currency");
    let baseCurrency = document.querySelector("#from-currency").value;
    let targetLabel = document.querySelector(".end-currency");
    let targetCurrency = document.querySelector("#to-currency").value;

    baseLabel.textContent = baseCurrency
    targetLabel.textContent = targetCurrency;
    clearFields()
}

function clearFields() {
    let r = document.querySelector(".final-currency")
    let i = document.querySelector("input")

    if (i.value !== "") {
        r.textContent = ""
    }
}








// const form = document.querySelector("#currency-converter")
// let formisvalid

// window.addEventListener('submit', event => {
//     event.preventDefault()
// })


// //when user selects the to currency need to pull the conversion factor from the base currency conversion list //



// // when user selects convert need to calculate the final currency value base on the inital currency amount and the conversion factor. display the amount on the screen. //

// form.addEventListener('submit', validate)


// function validate(event)
// // confirmValidForm
// // loadBaseCurrency ();






// // function loadBaseCurrency() {
// // code in here to pull the base currency page from API for starting currency selected by user 

// //when user selects the to currency need to pull the conversion factor from the base currency conversion list //

// // when user selects convert need to calculate the final currency value base on the inital currency amount and the conversion factor. display the amount on the screen. //



// const currencyConversion = document.querySelector('.currency-converter')


// const url = "https://api.exchangeratesapi.io/latest?base=USD"
// const rootElement = document.querySelector(".container")

// fetch(url).then(response => response.json())
//         .then(data => {
//             console.log(data)
//             // let h2 = document.createElement('h2')
//             // h2.innerText = data[0].base
//             // rootElement.appendChild(h2)
//             // return data.base_url
//             // from Amy's example line 38 what data. ???? url am i supposed to return here?
            

//             // const info = data[0].name
//             // document.querySelector('.contatiner').innerHTML = `<p> ${info}</p>`
// })


// // Object.keys(data.rates)