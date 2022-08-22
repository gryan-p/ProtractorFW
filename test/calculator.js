let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('1');
        homepage.enterSecondnumber('3');
        homepage.clickGo();
        homepage.verifyResult('4');
        browser.sleep(3000)
    });

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('1');
        homepage.enterSecondnumber('3');
        homepage.clickGo1();
        homepage.verifyResult('4');
        browser.sleep(3000)
    });
    //it('subtractiontes', function () {

    //})
});