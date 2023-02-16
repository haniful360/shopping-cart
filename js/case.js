function updateCaseNumber(isIncrease) {
    const caseInputField = document.getElementById('case-number-field');
    const caseInputFieldText = caseInputField.value;
    const previousCaseNumber = parseInt(caseInputFieldText);

    // let newCaseNumber = previousCaseNumber + 1;
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1
    }
    caseInputField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('case-plus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;
    updateCasePrice(newCaseNumber)

})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText  = caseTotalPrice;
    updateCasePrice(newCaseNumber)

})



