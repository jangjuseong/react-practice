import { Label } from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
};

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '리액트 공부하기',
};
