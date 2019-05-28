import HelpPage from '../page-objects/help.page.js';
import { expect } from 'chai';

describe('test help pagen', () => {
    it('should contain text', () => {
        HelpPage.open();
        //browser.debug();
        expect(HelpPage.header.getText()).to.equal("NEED HELP?");

    });
});