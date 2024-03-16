// @ts-ignore
console.log("Hello TypeScript!")
let a = 1+2
let b = a+3
let c = {
    apple:a,
    banana:b
}

let d = c.apple *4
let e = 1+1

declare function increase(a: number): number 

type ExportType<T> = T extends unknown[] ? T : T[]

export module "study-ts" {
    export function increase(a: number)
    export type ExportType<T> = T extends unknown[] ? T : T[]
}