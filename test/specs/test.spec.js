    
import LandingPage from '../page-objects/landing.page';
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        LandingPage.open();
        // browser.debug();
        const result = LandingPage.getUrlAndTitle('someVar');
        expect(result.title).to.contain('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});