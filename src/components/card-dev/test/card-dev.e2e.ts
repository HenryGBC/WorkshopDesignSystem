import { newE2EPage } from '@stencil/core/testing';

describe('card-dev', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-dev></card-dev>');

    const element = await page.find('card-dev');
    expect(element).toHaveClass('hydrated');
  });
});
