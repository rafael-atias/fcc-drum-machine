export default function drumpadData() {
    return [
        {
            id: "swipeHigh", textContent: "Q", audioSrc: new URL("https://www.dropbox.com/s/xmys6drdqbvlnd6/dustyroom_cartoon_swipe_high_pitched.mp3")
        },
        {
            id: "biteCrunch", textContent: "W", audioSrc: new URL("https://www.dropbox.com/s/9c0efqwdljbcdla/zapsplat_cartoon_bite_single_crunch_002_29057.mp3")
        },
        {
            id: "blink", textContent: "D", audioSrc: new URL("https://www.dropbox.com/s/398b73kuubsdkk3/zapsplat_cartoon_flutter_blink_high_pitched_003_44032.mp3")
        },
        {
            id: "catMeow", textContent: "E", audioSrc: new URL("https://www.dropbox.com/s/6vn1szduz7wpy5o/zapsplat_cartoon_cat_meow_19819.mp3")
        },
        {
            id: "dogConfusedHuh", textContent: "A", audioSrc: new URL("https://www.dropbox.com/s/phh85ioxe2jgmys/zapsplat_cartoon_dog_confused_huh_vocalisation_002_32269.mp3")
        },
        {
            id: "dolphinLaugh", textContent: "S", audioSrc: new URL("https://www.dropbox.com/s/kil5p7pac2t4iib/zapsplat_cartoon_dolphin_laugh_002_25158.mp3")
        },
        {
            id: "pop", textContent: "Z", audioSrc: new URL("https://www.dropbox.com/s/yh5ds2f841ftmgl/zapsplat_cartoon_pop_mouth_016_46679.mp3")
        },
        {
            id: "pullSqueak", textContent: "X", audioSrc: new URL("https://www.dropbox.com/s/8s6o3851sratlc9/zapsplat_cartoon_pull_squeak_pop_45774.mp3")
        },
        {
            id: "impactThud", textContent: "C", audioSrc: new URL("https://www.dropbox.com/s/qbozlz0fas78c60/zapsplat_cartoon_twang_impact_thud_wobble_45700.mp3")
        }
    ].map(function (obj) {
        return Object.assign(obj, {
            audioSrc: new URL(`${obj.audioSrc.href}?raw=1`)
        });
    });
}