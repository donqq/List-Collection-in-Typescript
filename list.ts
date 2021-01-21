// By Badde Liyanage Don Dilanga. github@dilanga.com. 2021/January

class List<T> {

    private readonly _values = new Array<T>();

    constructor() {
        this._values = [];
    }

    // add values
    public add(value: T) {
        this._values.push(value);
    }

    // remove values
    public remove(index: number): T[] { // 0 based index
        return this._values.filter((value , valueIndex) => {
            return index !== valueIndex;
        })
    }

    // get the number at the index
    public index(index: number) : T {
        return this._values[index];
    }

    get size(): number {
        return this._values.length;
    }

    get values(): Array<T>{
        return this._values;
    }
}

