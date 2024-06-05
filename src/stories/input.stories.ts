import { MyInput } from '@/features/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyInput> = {
  title: 'Input',
  component: MyInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter input'
  },
};



