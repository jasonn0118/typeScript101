let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;//Absolutely any data type can be accepted

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string,number];

myString = 'Hello World'.slice(0,3);
myNum = 22;
myBool = true;
myVar = 5;

strArr = ['Hello', 'World'];
numArr = [1,2,3];
boolArr = [true,false,true];

strNumTuple = ['Hello', 5];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;
//void  accepts null, undefined

console.log(myVoid);