import { ExamenAngularPage } from './app.po';

describe('examen-angular App', () => {
  let page: ExamenAngularPage;

  beforeEach(() => {
    page = new ExamenAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
