import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  viewMode: 'docs',
  
  docs: {
    page: DocsPage,
    container: DocsContainer,
  },
});
