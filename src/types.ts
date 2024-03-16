function squareOf(n: number) {
    return n*n;
}

export function increase(a: number): number {
    return a+1
}

function testChapter3() {
    let b: any;
    let a: unknown;
    var v = false;
    const c = true;
    const d : number = 3;
    let e = "abc";
    let f = Symbol('b')
    console.log(f == Symbol('b'))
    let g : symbol = Symbol(1)
    const h : unique symbol = Symbol('c')
    let p :{f:string, l:string} = {
        f:"jack",
        l:"ke"
    }

    type Age = number;
    type Retuns = number | string;
    let i = [1,2,3]
    let j : readonly number[] = [1,2,3];
}

enum Color {
    Red = 'red',
    Green = 'green'
};

