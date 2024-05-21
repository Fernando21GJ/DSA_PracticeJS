const strings = ["a","b","c","d"];

console.log("This is a array of String" + "  " + strings);

//push
strings.push("e");

console.log("This is a array new of String" + "  " + strings);

//pop

strings.pop();
strings.pop();
console.log("This is a array pop" + "  " + strings);

//unshift

strings.unshift("x");
console.log("This is a array unshift" + "  " + strings);

//splice

strings.splice(2, 0, "alien");
console.log("This is a array splice" + "  " + strings);