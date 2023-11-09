// celsius to fahrenheit converter
function celsiusToFahrenheit(celsius) {
    let fahrenheit
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

// displays the fahrenheit on the page
function displayFahrenheit(fahrenheit) {
    let farSpan = document.querySelector("#far")
    farSpan.textContent = fahrenheit
}

function handleFormSubmit(event) {
    event.preventDefault()

    const celsius = event.target.celsius.value 
    
    if(celsius) {
      const fahrenheit = celsiusToFahrenheit(celsius)
      displayFahrenheit(fahrenheit)
    }

}

const celsiusForm = document.querySelector("#form")

celsiusForm.addEventListener("submit", handleFormSubmit)