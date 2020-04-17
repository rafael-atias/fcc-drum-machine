import swipeHigh from "../sounds/dustyroom_cartoon_swipe_high_pitched.mp3";
import biteCrunch from "../sounds/zapsplat_cartoon_bite_single_crunch_002_29057.mp3";
import blink from "../sounds/zapsplat_cartoon_flutter_blink_high_pitched_003_44032.mp3";
import catMeow from "../sounds/zapsplat_cartoon_cat_meow_19819.mp3";
import dogConfusedHuh from "../sounds/zapsplat_cartoon_dog_confused_huh_vocalisation_002_32269.mp3";
import dolphinLaugh from "../sounds/zapsplat_cartoon_dolphin_laugh_002_25158.mp3";
import pop from "../sounds/zapsplat_cartoon_pop_mouth_016_46679.mp3";
import pullSqueak from "../sounds/zapsplat_cartoon_pull_squeak_pop_45774.mp3"; import impactThud from "../sounds/zapsplat_cartoon_twang_impact_thud_wobble_45700.mp3";


export default function drumpadData() {

    return [
        {
            id: "swipeHigh", textContent: "Q", audioSrc: swipeHigh
        },
        {
            id: "biteCrunch", textContent: "W", audioSrc: biteCrunch
        },
        {
            id: "blink", textContent: "D", audioSrc: blink
        },
        {
            id: "catMeow", textContent: "E", audioSrc: catMeow
        },
        {
            id: "dogConfusedHuh", textContent: "A", audioSrc: dogConfusedHuh
        },
        {
            id: "dolphinLaugh", textContent: "S", audioSrc: dolphinLaugh
        },
        {
            id: "pop", textContent: "Z", audioSrc: pop
        },
        {
            id: "pullSqueak", textContent: "X", audioSrc: pullSqueak
        },
        {
            id: "impactThud", textContent: "C", audioSrc: impactThud
        }
    ].map(function (obj) {
        return Object.assign(obj, {
            // audioSrc: new URL(`${obj.audioSrc.href}?raw=1`)
            audioSrc: `${obj.audioSrc}`
        });
    });
}