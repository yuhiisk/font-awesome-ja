import { FontAwesomeSearchPage } from './app.po';

describe('font-awesome-search App', function() {
  let page: FontAwesomeSearchPage;

  beforeEach(() => {
    page = new FontAwesomeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
