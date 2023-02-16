function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currrentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currrentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementByValue(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubtotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    setTextElementByValue('sub-total', currentSubtotal);

    // calculate tax;
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementByValue('tax-amount', taxAmount);

    const finalAmount = currentSubtotal + taxAmount;
    setTextElementByValue('final-total', finalAmount);

}
