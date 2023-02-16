function updatePhoneNumber(isIncrease) {
    const phoneInputfield = document.getElementById('phone-number-field')
    const phoneInputText = phoneInputfield.value;
    const previousPhoneNumber = parseInt(phoneInputText);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneInputfield.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneNumberPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total')
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('phone-plus-btn').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneNumberPrice(newPhoneNumber);

    // calculate total
    calculateSubtotal()


})
document.getElementById('phone-minus-btn').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneNumberPrice(newPhoneNumber);

    // calculate total
    calculateSubtotal();
})


// document.getElementById('phone-plus-btn').addEventListener('click', function(){
//     const phoneInputfield = document.getElementById('phone-number-field')
//     const phoneInputText = phoneInputfield.value;
//     const newPhoneNumber = parseInt(phoneInputText);

//     const previousPhoneNumber = newPhoneNumber + 1;
//     phoneInputfield.value = previousPhoneNumber


// })

// document.getElementById('phone-minus-btn').addEventListener('click', function(){
//     const phoneInputfield = document.getElementById('phone-number-field')
//     const phoneInputText = phoneInputfield.value;
//     const newPhoneNumber = parseInt(phoneInputText);

//     const previousPhoneNumber = newPhoneNumber - 1;
//     phoneInputfield.value = previousPhoneNumber

// })


