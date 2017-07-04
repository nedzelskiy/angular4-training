import { FaaPage } from './app.po';

describe('faa App', () => {
  let page: FaaPage;

  beforeEach(() => {
    page = new FaaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
