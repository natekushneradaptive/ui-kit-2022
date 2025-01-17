import { Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const VARIANTS = {
  'Header Large': 'h1',
  'Header Small': 'h2',
  'Title Large': 'h3',
  'Title Small': 'h4',
  'Subheader Large': 'subheader1',
  'Subheader Medium': 'subheader2',
  'Subheader Small': 'subheader3',
  'Subheader XSmall': 'subheader4',
  'Body Large': 'body1',
  'Body Small': 'body2',
  Caption: 'caption',
};

export default {
  title: 'Typography/Variants',
  component: Typography,
  argTypes: {
    children: {
      name: 'Text',
      defaultValue: 'Typography',
      control: { type: 'text' },
    },
    variant: {
      name: 'Variant',
      options: Object.keys(VARIANTS),
      mapping: VARIANTS,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ ...args }) => (
  <Typography {...args} />
);

export const Variants = Template.bind({});
Variants.args = {
  variant: Object.keys(VARIANTS)[0],
};
