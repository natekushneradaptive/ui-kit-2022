import React from 'react';

import TypesPage from './types-page';

export default {
  title: 'Typography/Examples',
  component: TypesPage,
};

const Template = (args) => <TypesPage {...args} />;

export const TypesPageStory = Template.bind({});

TypesPageStory.args = {};
