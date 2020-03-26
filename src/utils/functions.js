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

const salarioMinimoHora6am_9pm = 3450
const salarioMinimoHoraNocturna9am_6pm = 4658

const salaryData = {
  salarioMinimoMensual: 828116,
  salarioMinimoDiario: 27604,
  salarioMinimoHora6am_9pm,
  salarioMinimoHoraNocturna9am_6pm,
  auxilioTransporteMensual: 97032,
  auxilioTransporteDiario: 3234,
  horasExtrasDiurnas: salarioMinimoHora6am_9pm * 1.25,
  horasExtrasNocturnas: salarioMinimoHora6am_9pm * 1.75,
  horasExtrasDiurnasFestivas: salarioMinimoHora6am_9pm * 2,
  horasExtrasNocturnasFestivas: salarioMinimoHora6am_9pm * 2.5,
}

export function calculateEmployeeIncome(user) {
    const salary = typeof user.salary === 'number' ? user.salary : salaryData.salarioMinimoMensual
    /*const { salary = {} } = user
    
    return formatNumberToMoney(Object.values(salary).reduce((initial, value) => initial + (+value), 0))*/
    return formatNumberToMoney(salary)
}

export function calculateEmployeeSpend(user) {
    const { salary } = user
    const basic = typeof salary === 'number' ? salary : salaryData.salarioMinimoMensual
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

export function accentsTidy (s){
    var r=s.toLowerCase();
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    return r;
}