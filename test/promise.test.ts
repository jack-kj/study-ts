import {sendRequestPromise, succesUrl} from "../src/promise"
import {increase} from "../src/types"

class Calc {
    private count = 1

    increase() {
        return ++this.count
    }

    decrease() {
        return --this.count
    }

    getCount() {
        return this.count
    }
}

test("sendRequestPromise", async ()=> {
    let result = 0
    await sendRequestPromise(succesUrl, Calc)
        .then((calc)=> {
            result = calc.increase()
            console.log(`success result=${result}`)
        })
        .catch((error)=> {
            result = -1
            console.log(`error result=${result}`)
        });

    expect(result).toEqual(2)
})

test("sendRequestPromiseNoParam", async ()=> {
    let result = 0
    await sendRequestPromise(succesUrl, Calc)
        .then((calc)=> {
            result = calc.increase()
            console.log(`success result=${result}`)
        })
        .catch((error)=> {
            result = -1
            console.log(`error result=${result}`)
        });

    expect(result).toEqual(2)
})


test("usingDeclaredFunction", ()=> {
    expect(increase(1)).toEqual(2)
})
