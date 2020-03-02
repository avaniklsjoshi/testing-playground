// Introduction

const sum = (a,b) => a + b;
const diff = (a,b) => a - b;

//------------testing under the hood-------------
export const testSum = ()=> {
    let result = sum(2,3);
    let expected = 5;
    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
    console.info('Test Sum Passed');
}

export const testDiff = ()=> {
    let result = diff(3,2);
    let expected = 1;
    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
    console.info('Test Diff Passed');
}
