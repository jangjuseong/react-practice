import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = args => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: '삭제',
};
export const BlueButton = Template.bind({});
BlueButton.args = {
  label: '추가',
  color: '#304FFE',
};
