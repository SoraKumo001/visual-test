

import * as React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withScreenshot } from 'storycap';
import { storiesOf } from '@storybook/react';
import Page from "../index";
import Page02 from "../page02";

addDecorator(withScreenshot as any);
storiesOf('Pages', module).add('index', () => {
  return <Page />;
}).add('page02', () => {
  return <Page02 />;
});
