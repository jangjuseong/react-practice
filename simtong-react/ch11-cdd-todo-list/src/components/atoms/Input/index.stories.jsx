import { Input } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '리액트 공부하기',
};
