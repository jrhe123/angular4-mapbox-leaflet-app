import { Ng4GpsMapAppPage } from './app.po';

describe('ng4-gps-map-app App', () => {
  let page: Ng4GpsMapAppPage;

  beforeEach(() => {
    page = new Ng4GpsMapAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
