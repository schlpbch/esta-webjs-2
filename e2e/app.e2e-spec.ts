import { WebjsStarterkitPage } from './app.po';

describe('webjs-starterkit App', function() {
  let page: WebjsStarterkitPage;

  beforeEach(() => {
    page = new WebjsStarterkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
