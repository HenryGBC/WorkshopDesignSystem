import { newE2EPage } from '@stencil/core/testing';

describe('modal-dev', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<modal-dev></modal-dev>');

    const element = await page.find('modal-dev');
    expect(element).toHaveClass('hydrated');
  });
});
