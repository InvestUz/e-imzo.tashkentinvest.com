window.Helpers = {};

Helpers.timeDelta = function (start) {
    const fill = val => {
        return (val < 10 && val > -10) ? `0${val}` : val
    }
    const end = new Date()

    const delta = Math.round(end - start) / 1000
    const days =  Math.floor(delta / 60 / 60 / 24)
    const withoutDays =  delta % (60 * 60 * 24)
    const hours = Math.floor(withoutDays / 60 / 60) 
    const withoutHours =  withoutDays % (60 * 60)
    const minutes = Math.floor(withoutHours / 60)
    const seconds = Math.round(withoutHours % 60)
    const day = days ? `${days}k ` : ''
    return `${day}${fill(hours)}:${fill(minutes)}:${fill(seconds)}`
}


Helpers.phoneFormat = function (value) {
    if(!value)
        return null

    if (value.toString().length < 9) 
        return value
    
    const code2 = value.toString().slice(-9, -7)
    const number1 = value.toString().slice(-7, -4)
    const number2 = value.toString().slice(-4, -2)
    const number3 = value.toString().slice(-2)

    return `(${code2}) ${number1}-${number2}-${number3}`
}
