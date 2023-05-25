input.onButtonPressed(Button.A, function () {
    displayBusy = true
    basic.showNumber(input.temperature())
    basic.pause(1000)
    displayBusy = false
})
let displayBusy = false
displayBusy = false
basic.forever(function () {
    if (displayBusy == false) {
        led.plotBarGraph(
        input.temperature(),
        50
        )
    }
})
