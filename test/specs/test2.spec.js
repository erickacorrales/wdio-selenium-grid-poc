import HelpPage from '../page-objects/help.page.js';
describe('test help pagen', () => {
    it('should contain text', () => {
        HelpPage.open();
        //browser.debug();
        expect(HelpPage.header.getText()).to.equal("NEED HELP?");

    });
});