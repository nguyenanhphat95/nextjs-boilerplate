import { MyButton } from '@/features/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
  title: 'Button',
  component: MyButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary'
  },
};



