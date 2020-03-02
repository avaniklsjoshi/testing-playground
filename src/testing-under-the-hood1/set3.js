// which is throwing error

const sum = (a,b) => a + b;
const diff = (a,b) => a - b;

//------------testing under the hood-------------
export const testSum3 = ()=> {
    const result = sum(2,3);
    const expected = 85;
    expect(result).toBe(expected);   // like an assertion library
}

export const testDiff3 = ()=> {
    const result = diff(3,2);
    const expected = 1;
    expect(result).toBe(expected);    
}

function test(title, callback){
    try {
        callback();
        console.log(`✅ ${title}`);

    } catch(err){
        console.error(`❌ ${title}`);
        console.error(err);
    }
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

export function tests3(){
    test('test addition3', testSum3);
    test('test Diff3', () => {
        const result = diff(3,2);
        const expected = 1;
        expect(result).toBe(expected);    
    });
}

