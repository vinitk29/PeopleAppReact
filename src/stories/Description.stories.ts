import type { Meta, StoryObj } from '@storybook/react';
import Description from '../Components/Description';

const meta = {
  title: 'PeopleAppReact/Description',
  component: Description,
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description1: Story = {
  args: { 
    name: "Lucifer Morningstar",
    email: "Lucifer@email.com", 
    website: "Lucifer.tv",
    phone: "99999",
  },
};
