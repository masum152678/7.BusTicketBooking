function accessToTicket() {
    hideElementById('banner')
    hideElementById('offers')
    showElementById('ticketing')
}
function accessToSuccess(){
    hideElementById('ticketing')
    showElementById('confirmation')
   
}
function addEventByKeyUp(){
    const nameInput = getInnerValueById('name-input')
    const numInput = getInnerValueById('num-input')
    // console.log(numInput.length)
    if(nameInput.length >= 3 && numInput.length == 11){
       hideDisable('next-success')
    }
    // console.log(nameInput, numInput)
}
document.addEventListener('keyup', addEventByKeyUp)

function accessToHomePage(){
    hideElementById('confirmation')
    showElementById('banner')
    showElementById('offers')
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function hideDisable(elementId){
    const element = document.getElementById(elementId)
    element.removeAttribute('disabled','')
    return element
}
function getInnerValueById(elementId){
    const element = document.getElementById(elementId).value
    return element
}
// function getInnerValueIntById(elementId){
//     const element = document.getElementById(elementId).value
//     const elementInt = parseInt(element)
//     console.log(elementInt)
// }
function setBackgroundById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-[#1DD100]')
}
function disableBtnById(elementId){
    const element = document.getElementById(elementId)
    // element.disabled = true //eivabeo kora jay
    element.setAttribute('disabled','')
}
function getinnerValueById(elementId){
    const element = document.getElementById(elementId).innerText
    const value = parseInt(element)
    return value
}
function getInnerText(elementId){
    const element = document.getElementById(elementId).innerText
    return element
}
function getAndSetElementById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}
function activeElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
    return element
}

let holdSeat = []

function addEventByClick(event){
        const customerPressId = event.target
        const customerPress = customerPressId.innerText
        // const firstSelection = getInnerText('first-selection')
        // let availableSeat =  getinnerValueById('available-seat')
        // let selectedNumber = getinnerValueById('selected-number')
        // removeBanckgroundColorById(customerPress)
        setBackgroundById(customerPress)
        
        holdSeat.push(customerPress)
        console.log(holdSeat)
        console.log(holdSeat.length)
        if(holdSeat.length >= 5){
            disableBtnById(customerPress)
        }
        
        // availableSeat = availableSeat - 1
        // getAndSetElementById('available-seat', availableSeat)
        // selectedNumber = selectedNumber + 1
        // getAndSetElementById('selected-number', selectedNumber)
        getAndSetElementById('first-selection', holdSeat[0])
        getAndSetElementById('second-selection', holdSeat[1])
        getAndSetElementById('third-selection', holdSeat[2])
        getAndSetElementById('fourth-selection', holdSeat[3])
        
        if(holdSeat.length == 1){
            activeElementById('selection1')
            getAndSetElementById('total', 550)
            getAndSetElementById('grandTotal', 550)
            getAndSetElementById('available-seat', 39)
            getAndSetElementById('selected-number',1)
        }
        else if(holdSeat.length == 2){
            activeElementById('selection2')
            getAndSetElementById('total', 1100)
            getAndSetElementById('grandTotal', 1100)
            getAndSetElementById('available-seat', 38)
            getAndSetElementById('selected-number',2)
        }
        else if(holdSeat.length == 3){
            activeElementById('selection3')
            getAndSetElementById('total', 1650)
            getAndSetElementById('grandTotal', 1650)
            getAndSetElementById('available-seat', 37)
            getAndSetElementById('selected-number',3)
        }
        else if(holdSeat.length == 4){
            activeElementById('selection4')
            getAndSetElementById('total', 2200)
            getAndSetElementById('grandTotal', 2200)
            getAndSetElementById('available-seat', 36)
            getAndSetElementById('selected-number',4)
        }
}


document.addEventListener('click', addEventByClick)

