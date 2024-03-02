

type TsError = {
    status: number,
    reason: string
}

type SuccessCallback<T> = (result: T) => void
type MyErrorCallback = (error: TsError) => void

export declare var succesUrl:string 
export declare var partSuccessUrl:string 
export declare var errorUrl:string 

succesUrl = "success"
partSuccessUrl = "part"
errorUrl = "error"

function doSendRequest<T>(url: string, ctor: new() => T, success: SuccessCallback<T>, streaming: SuccessCallback<T>, error: MyErrorCallback): void {
    if (url === succesUrl) {
        let t = new ctor()
        success(t)
    } else if (url === partSuccessUrl) {
        let t = new ctor()
        streaming(t)
        streaming(t)
        success(t)
    } else {
        error({status:500, reason: "error"})
    }
}

export function sendRequestPromise<T>(url: string, ctor: new() => T): Promise<T> {
    return new Promise((resolve, reject) => {
        doSendRequest(url, ctor, (result: T) => {
            if (resolve) {
                resolve(result)
            }
        },
        (result: T) => {
            if (resolve) {
                resolve(result)
            }
        },
        (error: TsError) => {
            if (reject) {
                reject(error)
            }
        })
    });
}