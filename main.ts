input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A)
    basic.showString("+")
    basic.showNumber(B)
    ADD = 0 + 0
    basic.showString("=")
    basic.pause(300)
    basic.clearScreen()
    basic.showNumber(ADD)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A)
    basic.showString("-")
    basic.showNumber(B)
    SUBTRACT = A - B
})
let SUBTRACT = 0
let ADD = 0
let B = 0
let A = 0
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.clearScreen()
basic.forever(function () {
	
})
