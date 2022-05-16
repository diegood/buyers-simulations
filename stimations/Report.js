export default function generateReport(simulations){
  profitByMonths(simulations)
  usersByMonths(simulations)
  userVsClients(simulations)
  console.log(`var rowData = ${JSON.stringify(simulations)}`)
}

function profitByMonths(simulations){
  const report ={
    labels: Object.keys(simulations.best.profits.byMonth),
    datasets: [{
      label: 'Mejor',
      data: simulations.best.getTotalsProfitsByMonths(),
      tension: 0.4,
      borderColor: 'rgb(99, 255, 132)',
    }, {
      label: 'Peor',
      data: simulations.worst.getTotalsProfitsByMonths(),
      tension: 0.4,
      borderColor: 'rgb(255, 99, 132)',
    }, {
      label: 'Promedio',
      data: simulations.average.getTotalsProfitsByMonths(),
      tension: 0.4,
      borderColor: 'rgb(32, 99, 255)'
    }]
  }
  console.log(`var profitByMonths = ${JSON.stringify(report)}`)
}

function usersByMonths(simulations){
  const report ={
    labels: Object.keys(simulations.best.users.byMonth),
    datasets: [
      {
      label: 'Mejor',
      data: simulations.best.users.byMonth.getCountByMonths(),
      tension: 0.4,
      borderColor: 'rgb(99, 255, 132)',
    }, {
      label: 'Peor',
      data: simulations.worst.users.byMonth.getCountByMonths(),
      tension: 0.4,
      borderColor: 'rgb(255, 99, 132)',
    }, {
      label: 'Promedio',
      data: simulations.average.users.byMonth.getCountByMonths(),
      tension: 0.4,
      borderColor: 'rgb(32, 99, 255)'
    },
      {
      label: 'subscripciones Mejor',
      data: simulations.best.subscriptions.byMonth.getCountByMonths(),
      tension: 0.4,
      borderColor: 'rgb(132, 255, 132)',
    }, {
      label: ' subscripciones Peor',
      data: simulations.worst.subscriptions.byMonth.getCountByMonths(),
      tension: 0.4,
      borderColor: 'rgb(255, 132, 132)',
    }, {
      label: 'Subscripciones Promedio',
      data: simulations.average.subscriptions.byMonth.getCountByMonths(),
      tension: 0.4,
      borderColor: 'rgb(132, 132, 255)'
    }
  ]
  }
  console.log(`var usersByMonths = ${JSON.stringify(report)}`)
}

function userVsClients(simulations){
  const reportBest =JSON.stringify({
    labels: ['usuarios totales', 'usuarios subscritos'],
    datasets: [{
      data: [simulations.best.users.total, simulations.best.subscriptions.total],
      backgroundColor: ['rgb(255 205 86)', 'rgb(75 192 192)'],
    }]
  })
  const reportWorst ={
    labels: ['usuarios totales', 'usuarios subscritos'],
    datasets: [{
      data: [simulations.worst.users.total, simulations.worst.subscriptions.total],
      backgroundColor: ['rgb(255 205 86)', 'rgb(75 192 192)'],
    }]
  }
  const reportAverage ={
    labels: ['usuarios totales', 'usuarios subscritos'],
    datasets: [{
      data: [simulations.average.users.total, simulations.average.subscriptions.total],
      backgroundColor: ['rgb(255 205 86)', 'rgb(75 192 192)'],
    }]
  }
  
  console.log(`var reportClientsBest = ${reportBest}`)
  console.log(`var reportClientsWorst = ${JSON.stringify(reportWorst)}`)
  console.log(`var reportClientsAverage = ${JSON.stringify(reportAverage)}`)
}