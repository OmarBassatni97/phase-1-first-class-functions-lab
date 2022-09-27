// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
const firstTwoDrivers = [drivers[0],drivers[1]]
return firstTwoDrivers
}
const returnLastTwoDrivers = function (drivers) {
    const length = drivers.length
    const lastTwoDrivers = [drivers[length-2],drivers[length-1]]
return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const fareDoubler = (fare) => fare*2

const fareTripler = (fare) => fare*3


function createFareMultiplier (fare) {

    return function fareMultiplier () {
     return fare*fare
    }

    
   }

   const selectDifferentDrivers = (driver,select) => {
    return select(driver)
   }