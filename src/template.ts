
class Template<T> {
    t?: T;

    setValue(object: any): boolean {
        if (typeof this.t === 'undefined') {
            console.log("t 未赋值，将其视为匹配");
            return true;
        }

        if (typeof object === typeof this.t) {
            console.log("类型匹配");
            return false;
        }

        let a: number = 1;
        let b: string = "";
        console.log("类型不匹配");

        return false;
    }
}



