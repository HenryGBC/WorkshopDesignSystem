import { newE2EPage } from '@stencil/core/testing';

describe('button-dev', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-dev></button-dev>');

    const element = await page.find('button-dev');
    expect(element).toHaveClass('hydrated');
  });
});
