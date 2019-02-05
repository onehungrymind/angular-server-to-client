import { Ng2RestAppPage } from './app.po';

describe('angular-server-to-client App', function() {
  let page: Ng2RestAppPage;

  beforeEach(() => {
    page = new Ng2RestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
