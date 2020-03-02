// async tests

const sum = (a,b) => a + b;
const diff = (a,b) => a - b;

//------------testing under the hood-------------
export const testSum4 = ()=> {
    const result = sum(2,3);
    const expected = 5;
    expect(result).toBe(expected);   // like an assertion library
}

async function test(title, callback){
    try {
        await callback();
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

export function tests4(){
    test('test addition4', testSum4);
    test('test Diff4', async () => {
        const result = await diff(3,2);
        const expected = 1;
        expect(result).toBe(expected);    
    });
}

