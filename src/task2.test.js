import {getPercents} from "./task2"; 

describe( "get Percents", ()=> {
    it ("get Percents Correctly", ()=>{
        expect(getPercents(50,100)).toBe(50);
    })
    it ("get Percents Incorrectly", ()=>{
        expect(getPercents(-50,100)).toBe("incorrect");
    })
    it ("get Percents Incorrectly", ()=>{
        expect(getPercents(200,100)).toBe("incorrect");
    })
    it ("corner Case", ()=>{
        expect(getPercents(100,100)).toBe(100);
    })
})