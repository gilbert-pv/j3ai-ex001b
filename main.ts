let LSensor = 0
microbot.microbotInit()
let RSensor = 0
LSensor += 0
let motorspeed = 15
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.stopMelody(MelodyStopOptions.All)
microbot.clearLight()
microbot.setPixelRGBArgs(microbot.Lights.Light1, 9)
microbot.setPixelRGBArgs(microbot.Lights.Light2, 9)
microbot.showLight()
basic.forever(function () {
    if (microbot.readLineFollowerStatus(microbot.LineFollower.S1_OUT_S2_OUT)) {
        RSensor = 0
        LSensor = 0
        microbot.setPixelRGB(microbot.Lights.Light5, RGBColors.Red)
        microbot.setPixelRGB(microbot.Lights.Light6, RGBColors.Red)
    } else if (microbot.readLineFollowerStatus(microbot.LineFollower.S1_OUT_S2_IN)) {
        RSensor = 1
        LSensor = 0
        microbot.setPixelRGB(microbot.Lights.Light6, RGBColors.Green)
    } else if (microbot.readLineFollowerStatus(microbot.LineFollower.S1_IN_S2_OUT)) {
        RSensor = 0
        LSensor = 1
        microbot.setPixelRGB(microbot.Lights.Light5, RGBColors.Green)
    } else {
        RSensor = 1
        LSensor = 1
        microbot.setPixelRGB(microbot.Lights.Light5, RGBColors.Green)
        microbot.setPixelRGB(microbot.Lights.Light6, RGBColors.Green)
    }
    microbot.showLight()
})
