import type { Meta, StoryObj } from '@storybook/react';
import PersonCard from '../Components/PersonCard';

const meta = {
  title: 'PeopleAppReact/Card',
  component: PersonCard,
} satisfies Meta<typeof PersonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card1: Story = {
  args: { 
    id: 1,
    name: "Lucifer Morningstar",
    email: "Lucifer@email.com", 
    website: "Lucifer.tv",
    phone: "99999",
    username: "luci",
  },
};
