import { configure } from '@storybook/react';

const requirement= require.context('../src', true, /.stories.js$/);

function loadStories() {
    require('./welcomeStory');
    requirement.keys().forEach(requirement);
    //configure(loadStories, module);

}

configure(loadStories, module);