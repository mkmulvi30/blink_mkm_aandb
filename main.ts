for (let index = 0; index < 5; index++) {
    basic.showString("M")
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 2)
        led.plot(3, 3)
        led.plot(4, 4)
        basic.pause(500)
        basic.clearScreen()
    }
    while (input.buttonIsPressed(Button.B)) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(2, 2)
        led.plot(1, 3)
        led.plot(0, 4)
        basic.pause(500)
        basic.clearScreen()
    }
})
