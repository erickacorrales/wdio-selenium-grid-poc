import Page from './page';
class HelpPage extends Page {

    open() {
        super.open("/help.html");
    }
    get header() {
        return $('header h1');
    }

}

export default new HelpPage();