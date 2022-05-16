import Months from "./Months.js"
import {getProductByName} from "./Products.js"
export default class Count{
  constructor(){
    this.users = {
      total: 0,
      byMonth: new Months(),
    }
    this.subscriptions = {
      total: 0,
      byMonth: new Months(),
    }
    this.profits = {
      byMonth: new Months(),
      byYear: 0,
    }
    this.plans = {
      Litfolou: new Months(),
      Midfolou: new Months(),
      Upperfolou: new Months(),
    }
    this.bestClient = null
  }
  getTotalPlans(){
    const litfolou = this.plans.Litfolou.getCumulativeCount()
    const midfolou = this.plans.Midfolou.getCumulativeCount()
    const upperfolou = this.plans.Upperfolou.getCumulativeCount()
    return litfolou.map((l, i) => l + midfolou[i] + upperfolou[i])
  }
  getTotalsProfitsByMonths(){
    const litfolou = this.plans.Litfolou.getCumulativeCount().map(c => c * getProductByName('Litfolou').price)
    const midfolou = this.plans.Midfolou.getCumulativeCount().map(c => c * getProductByName('Midfolou').price)
    const upperfolou = this.plans.Upperfolou.getCumulativeCount().map(c => c * getProductByName('Upperfolou').price)
    return litfolou.map((l, i) => l + midfolou[i] + upperfolou[i]).map((m, i, list) => i===0 ? Math.round(m) : Math.round(m) + list[i - 1])
  }
}