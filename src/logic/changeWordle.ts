import { store } from "../redux/reduxStore"
import { clear } from "../redux/rowsSlice"
import { newWordle } from "../redux/wordleSlice"
import { file } from "../data/getData"

export const changeWordle = () => {

    const newWordleString = file[Math.floor(Math.random()*file.length)]
    const newWordleArray = newWordleString.split("")

    console.log("changewordle")
    store.dispatch(clear())
    store.dispatch(newWordle(newWordleArray))
}