export function getMonths() {
    return [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]
}

export function getMonth(index) {
    const months = getMonths()
    return months[+index] || "Mes no reconocido"
}

export function getYears() {
    const years = []
    for (var i = 2019; i <= new Date().getFullYear(); i++) {
        years.push(i)
    }
    return years
}

export function calculateEmployeeIncome(user) {
    const { salary = {} } = user
    return formatNumberToMoney(Object.values(salary).reduce((initial, value) => initial + (+value), 0))
}

export function calculateEmployeeSpend(user) {
    const { salary = {} } = user
    const basic = +salary.basic
    const minime = 828116
    const spends = {
        salud: 0.04,
        pension: 0.04,
        solidaridad: basic >= minime * 4 ? 0.01 : 0,
    }

    return formatNumberToMoney(Object.values(spends).reduce((initial, value) => initial + (basic * value), 0))
}

export function calculateEmployeeTotal(user) {
    const income = calculateEmployeeIncome(user)
    const spend = calculateEmployeeSpend(user)
    return formatNumberToMoney(formatMoneyToNumber(income) - formatMoneyToNumber(spend))
}

export function formatNumberToMoney(value = 0, round = 2) {
    return '$ ' + value.toFixed(round).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function formatMoneyToNumber(value = 0, round = 2) {
    return +(+value.replace(/[$,]/g, '')).toFixed(round)
}

export function getCreatedAt(id) {

}

export function formDataToJSON(e){
    const formData = new FormData(e.target)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    return data
}