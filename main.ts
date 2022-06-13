radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.setGroup(0)
