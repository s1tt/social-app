import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Modal from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    lazy: false,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi officiis minima dignissimos ex suscipit laudantium, maxime autem consequuntur possimus sed rerum odio neque error iste voluptate eligendi sunt numquam, ipsum quis amet pariatur? Maiores provident error libero sed doloribus placeat ad cumque odio natus voluptatibus suscipit pariatur recusandae,'
  }
};

export const Dark: Story = {
  args: {
    isOpen: true,
    lazy: false,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi officiis minima dignissimos ex suscipit laudantium, maxime autem consequuntur possimus sed rerum odio neque error iste voluptate eligendi sunt numquam, ipsum quis amet pariatur? Maiores provident error libero sed doloribus placeat ad cumque odio natus voluptatibus suscipit pariatur recusandae,'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
