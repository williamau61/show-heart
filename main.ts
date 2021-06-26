input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `)
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showString("William")
})
