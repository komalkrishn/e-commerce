const lib=require('../testingDemo/lib');
describe('testing numbeers',()=>{
    it('testing the numbers',()=>{
        const result=lib.absolute(1);
 expect(result).toBe(1);
 });
 it('testing strings in an array',()=>{
     const result=lib.greet('mosh');
     expect(result).toContain('mosh');
 })
 
}); 

describe('currencies',()=>{
    it('testing the currencies',()=>{
        const result=lib.getCurrrencies();
        expect(result).toBe(ex)
    })
})