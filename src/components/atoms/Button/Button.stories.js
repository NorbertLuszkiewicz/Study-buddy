import { Button } from './Button.js';

const Template = (args) => <Button {...args}>Read more</Button>;

export const Default = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};

const Component = {
  title: 'Components/Atoms/Button',
  component: Button,
};

export default Component;
