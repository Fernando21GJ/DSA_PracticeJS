class MyArray {

    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;

        return this.length;
    }

    pop(){
        const lastIteam = this.data[this.length - 1];

        delete this.data[this.length -1];
        this.length--;

        return lastIteam;
    }

    delete(index){
        const item = this.data[index];

        this.shiftItems(index);

        return item;
    }

    shiftItems(index){
        for(let i = index; i < this.length -1 ; i++){
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new  MyArray();

newArray.push("hi");
console.log(newArray);

newArray.push("you");
console.log(newArray);

newArray.push("!");

console.log(newArray);

newArray.pop();

console.log(newArray);


newArray.delete(1);



console.log(newArray);