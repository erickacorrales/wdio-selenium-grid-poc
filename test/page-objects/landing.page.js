import Page from './page';
class LandingPage extends Page {

    open() {
        super.open("/");
    }

}

export default new LandingPage();