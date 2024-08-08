import {addons} from '@storybook/manager-api';
import {create} from '@storybook/theming';

addons.setConfig({
    theme:  create({
        base: 'light',
        brandTitle: 'Buenamano',
        brandImage: 'logo.png',
        colorSecondary: '#93c2bc',
        fontBase: 'sans-serif',
        fontCode: 'Montserratregular',
        appBorderRadius: 2,
        inputBorderRadius:4,
    }),

});