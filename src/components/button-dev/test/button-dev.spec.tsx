import { newSpecPage } from '@stencil/core/testing';
import { ButtonDev } from '../button-dev';

describe('button-dev', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonDev],
      html: `<button-dev></button-dev>`,
    });
    expect(page.root).toEqualHtml(`
      <button-dev>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-dev>
    `);
  });
});
