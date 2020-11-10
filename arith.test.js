const {add,mul,sub,div}=require('./arith');

test('2+3=5',()=>{
    expect(add(2,3)).toBe(5);
});
test('2*3=6',()=>{
    expect(mul(2,3)).toBe(6);
});
test('4-3=1',()=>{
    expect(sub(4,3)).toBe(1);
});
test('9/3=3',()=>{
    expect(div(9,3)).toBe(3);
});