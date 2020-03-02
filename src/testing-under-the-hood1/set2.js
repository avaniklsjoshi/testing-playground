// Refactoring

const sum = (a,b) => a + b;
const diff = (a,b) => a - b;

//------------testing under the hood-------------
export const testSum2 = ()=> {
    let result = sum(2,3);
    let expected = 5;
    expect(result).toBe(expected);   // like an assertion library
    console.info('Test Sum2 Passed');
}

export const testDiff2 = ()=> {
    let result = diff(3,2);
    let expected = 1;
    expect(result).toBe(expected);    
    console.info('Test Diff2 Passed');
}

function expect(actual){
    return {
        toBe(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}
