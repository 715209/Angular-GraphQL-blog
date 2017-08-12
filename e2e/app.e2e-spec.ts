import { AngularGraphqlBlogPage } from './app.po';

describe('angular-graphql-blog App', () => {
  let page: AngularGraphqlBlogPage;

  beforeEach(() => {
    page = new AngularGraphqlBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
