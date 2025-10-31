import type { Meta, StoryObj } from '@storybook/react-vite';
import { Child } from './Child';
import '../base.css';
import './styles.css';

const meta = {
  title: 'Components/Child',
  component: Child,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text content displayed in the child component',
    },
  },
} satisfies Meta<typeof Child>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Child',
  },
};

export const WithLongText: Story = {
  args: {
    label: 'This is a child component with longer text content',
  },
};

export const WithShortText: Story = {
  args: {
    label: 'Short',
  },
};

