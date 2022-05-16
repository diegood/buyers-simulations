import { faker } from '@faker-js/faker';
import moment from 'moment';
import User from './stimations/User.js';
import Count from './stimations/Count.js';
import generateReport from './stimations/Report.js'

const maxUserPerDay = 4;
const NumberOfSimulations = 100;
const maxTimeItWillTakeToContract = 90; // in days


// console.log(getCountByYear());

function getCountByYear(){
  const count = new Count()
  for (let monthNumber = 0; monthNumber <= 11; monthNumber++) {
    createUsersPerMonth(monthNumber, count)
  }
  count.profits.byYear = count.profits.byMonth.getCumulativeCount().reduce((a, b) => a + b, 0)
  return count
}

function createUsersPerMonth(monthNumber, count){
  for (let dayNumber = 0; dayNumber <= moment().month(monthNumber).daysInMonth(); dayNumber++) {
    createUsersPerDay(monthNumber, count)
  }
}

function createUsersPerDay(monthNumber, count){
  const limit = faker.mersenne.rand(0, maxUserPerDay)
  for (let i = 0; i <= limit; i++) {
    const user = new User()
    count.users.total++
    count.users.byMonth.addCount(monthNumber, 1)
    if (user.goingToHire) {
      count.subscriptions.total++
      count.subscriptions.byMonth.addCount(monthNumber, 1)
      count.profits.byMonth.addCount(monthNumber, user.whoWillHire.price)
      count.plans[user.whoWillHire.name].addCount(monthNumber, 1)
      if (!count.bestClient || count.bestClient.countOfClients < user.countOfClients) {
        count.bestClient = user //TODO cual es el mejor cliente?
      }
    }
  }
}


function createSimulations(){
  const simulations = []
  for (let i = 0; i < NumberOfSimulations; i++) {
    simulations.push(getCountByYear())
  }
  const averangeSubscriptions = simulations.map(s => s.profits.byYear).reduce((a, b) => a + b, 0) / NumberOfSimulations
  return {
    worst: simulations.sort((a, b) => a.profits.byYear - b.profits.byYear)[0],
    best: simulations.sort((a, b) => b.profits.byYear - a.profits.byYear)[0],
    average: simulations.find(s => s.profits.byYear <= averangeSubscriptions),
  }
}

// console.log(createSimulations());



generateReport(createSimulations())