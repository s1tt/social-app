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
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi officiis minima dignissimos ex suscipit laudantium, maxime autem consequuntur possimus sed rerum odio neque error iste voluptate eligendi sunt numquam, ipsum quis amet pariatur? Maiores provident error libero sed doloribus placeat ad cumque odio natus voluptatibus suscipit pariatur recusandae, magnam temporibus illum dolores expedita nostrum iste explicabo obcaecati minus dolore eligendi itaque distinctio? Id debitis mollitia consectetur doloribus ratione nostrum consequuntur quis amet enim assumenda velit, dicta totam ipsa maiores, repellat laboriosam provident architecto. Eligendi neque harum delectus qui, dicta, quia, nostrum corrupti beatae doloremque laboriosam unde iure ullam! Repellat vitae odit eveniet error beatae nulla placeat amet delectus ad. Quis, amet. Quidem minus, magnam excepturi quae placeat id repellendus ratione libero accusamus reiciendis porro vero modi sit corporis corrupti optio eveniet. Tempore error obcaecati nemo ipsum! Perferendis dolores ut perspiciatis. Rerum magni reiciendis labore illo atque, a sunt harum necessitatibus provident ad, dolorem hic eaque quia ullam delectus, laudantium beatae autem sint omnis obcaecati officia. Esse tempora atque ducimus temporibus in illo nesciunt voluptatem qui nam fuga porro adipisci possimus nihil magni cupiditate rem impedit, repellendus nobis veniam nemo? Eum laudantium autem ratione? Delectus corporis temporibus accusantium obcaecati illo?'
  }
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi officiis minima dignissimos ex suscipit laudantium, maxime autem consequuntur possimus sed rerum odio neque error iste voluptate eligendi sunt numquam, ipsum quis amet pariatur? Maiores provident error libero sed doloribus placeat ad cumque odio natus voluptatibus suscipit pariatur recusandae, magnam temporibus illum dolores expedita nostrum iste explicabo obcaecati minus dolore eligendi itaque distinctio? Id debitis mollitia consectetur doloribus ratione nostrum consequuntur quis amet enim assumenda velit, dicta totam ipsa maiores, repellat laboriosam provident architecto. Eligendi neque harum delectus qui, dicta, quia, nostrum corrupti beatae doloremque laboriosam unde iure ullam! Repellat vitae odit eveniet error beatae nulla placeat amet delectus ad. Quis, amet. Quidem minus, magnam excepturi quae placeat id repellendus ratione libero accusamus reiciendis porro vero modi sit corporis corrupti optio eveniet. Tempore error obcaecati nemo ipsum! Perferendis dolores ut perspiciatis. Rerum magni reiciendis labore illo atque, a sunt harum necessitatibus provident ad, dolorem hic eaque quia ullam delectus, laudantium beatae autem sint omnis obcaecati officia. Esse tempora atque ducimus temporibus in illo nesciunt voluptatem qui nam fuga porro adipisci possimus nihil magni cupiditate rem impedit, repellendus nobis veniam nemo? Eum laudantium autem ratione? Delectus corporis temporibus accusantium obcaecati illo?'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
