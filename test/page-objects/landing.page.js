import Page from './page';
class LandingPage extends Page {

    open() {
        super.open("/");
    }

    getUrlAndTitle(customVars) {
        return  browser.getUrlAndTitle(customVars);
    }

}

export default new LandingPage();