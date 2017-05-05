import { TestAngularAdvancedAnimationsPage } from './app.po';

describe('test-angular-advanced-animations App', () => {
    let page: TestAngularAdvancedAnimationsPage;

    beforeEach(() => {
        page = new TestAngularAdvancedAnimationsPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
