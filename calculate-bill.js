
function calculateBtnClicked(billString) {

    var billItems = billString.split(',');

    var billTotal = 0;
    if (billString == null || billString == "") {
        return "R0.00"

    }
    else {
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim().toLowerCase();
            console.log(billItem)
            if (billItem === 'call') {

                billTotal += 2.75;
            }
            else if (billItem === 'sms') {
                billTotal += 0.75;
            }
            else {
                return "invalid input"
            }
            var roundedBillTotal = billTotal.toFixed(2);
        }
        return "R" + roundedBillTotal;
    }
    
}

