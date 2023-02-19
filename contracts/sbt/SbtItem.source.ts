import {combineFunc} from "../utils/combineFunc";

export const SbtItemSource = combineFunc(__dirname, [
    '../sources/utils/stdlib.fc',
    '../sources/utils/op-codes.fc',
    '../sources/utils/params.fc',
    '../sources/sbt-item.fc',
])

export const SbtSingleSource = combineFunc(__dirname, [
    '../sources/utils/stdlib.fc',
    '../sources/utils/op-codes.fc',
    '../sources/utils/params.fc',
    '../sources/sbt-single.fc',
])
