import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MERRIWEATHER, ROBOTO } from '../../../src';
import TypeCard from './type-card';
export default {
  title: 'Typography/Examples',
  component: TypeCard,
  argTypes: {
    title: {
      options: ['REGULAR', 'MEDIUM', 'LIGHT ITALIC'],
      control: { type: 'radio' },
    },
    fontFamily: {
      options: [ROBOTO, MERRIWEATHER],
      control: { type: 'radio' },
    },
    fontWeight: {
      options: ['300', '400', '500'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TypeCard>;

const Template: ComponentStory<typeof TypeCard> = (args) => {
  return <TypeCard {...args} />;
};

export const TypeCardStory = Template.bind({});

TypeCardStory.args = {
  title: 'REGULAR',
  letter: 'Aa',
  fontFamily: ROBOTO,
  fontWeight: '300',
};
