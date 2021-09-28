import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, jumbotron, content, titleMain,
  }) {
    this.Button = button;
    this.Drawer = drawer;
    this.Content = content;
    this.Jumbotron = jumbotron;
    this.TitleMain = titleMain;

    this.InitialAppShell();
  }

  InitialAppShell() {
    DrawerInitiator.init({
      button: this.Button,
      drawer: this.Drawer,
      content: this.Content,
      jumbotron: this.Jumbotron,
      titleMain: this.TitleMain,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.Content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
