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

function main() {
    const list: List<string> = new List<string>();
    list.add('One');
    list.add('Two');
    list.add('Three');
    list.add('Four');
    list.add('Five');
    list.add('Six');

    // read all the values
    for (const val of list.values) {
        console.log(val);
        
    }

    console.log('----------');
    // remove a value. Remove FOUR from the list
    const newList = list.remove(3);

    // read all the values
    for (const val of newList) {
        console.log(val);
    }

    console.log('----------');
    // get the value at the index
    console.log(newList[4]);

    console.log('----------');
    console.log(newList.length);

}

main();
