import moment from 'moment';
export default class Months{
  constructor(){
    this.january = 0
    this.february = 0
    this.march = 0
    this.april = 0
    this.may = 0
    this.june = 0
    this.july = 0
    this.august = 0
    this.september = 0
    this.october = 0
    this.november = 0
    this.december = 0
  }
  addCount(month, count){
    if(typeof month === 'number') month = moment().month(month).format('MMMM').toLowerCase() 
    this[month] += count
  }
  getCumulativeCount(){
    const calculated = []
    Object.values(this).forEach((m, i) => calculated.push(i===0 ? Math.round(m) : Math.round(m) + calculated[i - 1]))
    return calculated
  }
  getCountByMonths(){
    return Object.values(this)
  }
  getTotal(){
    return Object.values(this).reduce((a, b) => a + b, 0)
  }
}