/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 
const createEmployeeRecord = (array) => {
  const employeeRecord = {
    firstName:array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  return employeeRecord;
}


const createEmployeeRecords = (array) => {
  return array.map((e) => createEmployeeRecord(e))
}


const createTimeInEvent = function(dateStamp){
  const [date, hour] = dateStamp.split(' ');

  const inEvents = {
    type: 'TimeIn',
    hour: parseInt(hour),
    date: date
  }
  this.timeInEvents.push(inEvents)
//debugger
  return this
//debugger Used for checking this
}

const createTimeOutEvent = function(dateStamp){
  const [date, hour] = dateStamp.split(' ');

  const outEvents = {
    type: 'TimeOut',
    hour: parseInt(hour),
    date: date
  }
  this.timeOutEvents.push(outEvents)
//debugger
  return this
//debugger Used for checking this
}

const hoursWorkedOnDate = function(date){
  //debugger

  const timeIn = this.timeInEvents.find((e) => e.date === date)
  const timeOut = this.timeOutEvents.find((e) => e.date === date)

  return (timeOut.hour - timeIn.hour)/100;
  //debugger
}


const wagesEarnedOnDate = function(date){
  //debugger
  const numHour = hoursWorkedOnDate.call(this,date)

  return this.payPerHour * numHour

  //debugger
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function(array, FirstName){
  for(let employee of array){
    if (employee.firstName === FirstName){
      return employee
    } else {
      return undefined
    }
  }
}

const calculatePayroll = function(array){
  return array.reduce((total, rec) => {
    return total + allWagesFor.call(rec)
    
  },0)
}




 