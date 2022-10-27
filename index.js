function createEmployeeRecord(array) {
    // console.log(array)
    
    const object = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return object
  
}
// createEmployeeRecord()

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map((array) => createEmployeeRecord(array))
}
// createEmployeeRecords()

function createTimeInEvent(dateStamp) {
 console.log(dateStamp)
 const myObj = {
    type: "TimeIn",
    hour: parseInt(dateStamp.split(" ")[1]),
    date: dateStamp.split(" ")[0],
 }
 this.timeInEvents.push(myObj)
 return this

}
// createTimeInEvent()

function createTimeOutEvent(dateStamp) {
    const myObj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    }
    this.timeOutEvents.push(myObj)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    // console.log(dateStamp)
    const clockIn = this.timeInEvents.find((eventObject) => eventObject.date === dateStamp)
    // console.log(clockIn)
    const clockOut = this.timeOutEvents.find((eventObject) => eventObject.date === dateStamp)
    // console.log(clockOut)
    return (clockOut.hour - clockIn.hour) / 100
}
// hoursWorkedOnDate()

function wagesEarnedOnDate(dateStamp) {
  return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
  
} 
// wagesEarnedOnDate()

function allWagesFor() {
    const dateWorked = this.timeInEvents.map((obj) => obj.date)
    return dateWorked.reduce((total, counter) => wagesEarnedOnDate.call(this, counter) + total, 0)
}


function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((name) => name.firstName === firstName)
}
// findEmployeeByFirstName()

function calculatePayroll(array) {
//   console.log(array)
return array.reduce((total, object) => allWagesFor.call(object) + total, 0)
}












/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

