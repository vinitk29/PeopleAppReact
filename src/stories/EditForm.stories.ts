import type { Meta, StoryObj } from '@storybook/react';
import EditForm from '../Components/EditForm';

const meta = {
  title: 'PeopleAppReact/EditForm',
  component: EditForm,
  argTypes: {closeModal: {action: "Close Modal"} }
} satisfies Meta<typeof EditForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form1: Story = {
  args: { 
    id: 1,
    name: "Lucifer Morningstar",
    email: "Lucifer@email.com", 
    website: "Lucifer.tv",
    phone: "99999",
    isModalOpen: true
  },
};
