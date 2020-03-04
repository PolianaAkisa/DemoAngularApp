import { PolianaProjectPage } from './app.po';

describe('poliana-project App', function() {
  let page: PolianaProjectPage;

  beforeEach(() => {
    page = new PolianaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
