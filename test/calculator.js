let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('12');
        homepage.enterSecondnumber('3');
        homepage.clickGo();
        homepage.verifyResult('5');
        browser.sleep(3000)
    });
    //it('subtractiontes', function () {

    //}) 
});