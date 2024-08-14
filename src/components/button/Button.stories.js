import { ClassNames } from 'storybook/internal/theming';
import Button from './Button';


export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
}

export const Default = {
    args: {
       className:'default-bttn',
       children: 'Default'
        
    }
}

export const Current = {
    args: {
       className: 'current-bttn',
       children: 'Current',
    }
}

