
var settingsBill = function(){

//function settingsBill() {

    var theSmsCost = 0;
    var theCallCost = 0;
    var callcostTotal = 0;
    var smscostTotal = 0;
    var costTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }

    var theWarningLevel = 0;

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }
    var theCriticalLevel = 0;
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function makeCall() {
        console.log(getCallCost());
        if (!hasReachedCriticalLevel()) {
            callcostTotal += getCallCost();
        }
    }
    function sendSms() {
        if (!hasReachedCriticalLevel()) {
            smscostTotal += theSmsCost;
        }
    }

    function getTotalCallCost() {
        return callcostTotal

    }

    function getTotalCost() {
        return callcostTotal + smscostTotal;

    }

    function getTotalSmsCost() {
        return smscostTotal
    }

    function totalClassName() {
        if (getTotalCost() >= getWarningLevel()) {
            return 'warning'
        }
    }

    function totalClassName1() {
        if (getTotalCost() >= getCriticalLevel()) {
            return 'critical'

        }
    }



    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();
    }

    return {
        setCallCost,
        setSmsCost,
        getCallCost,
        getSmsCost,
        //theCriticalLevel,
        //theWarningLevel,
        getCriticalLevel,
        getWarningLevel,
        setCriticalLevel,
        setWarningLevel,
        makeCall,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel,
        totalClassName1

    }
}
