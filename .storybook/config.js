import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
configure(require.context('../pages', true, /\.stories\.tsx?$/), module);