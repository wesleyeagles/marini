// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledButton from '../styledcomponents/Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const Primary: ComponentStory<typeof StyledButton> = () => <StyledButton primary>Button</StyledButton>;
