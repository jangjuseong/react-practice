import { Header } from '.';

export default {
  title: 'Organisms/Header',
  component: Header,
};

const Template = () => <Header />;

export const Default = Template.bind({});
Default.args = {
  value: '리액트 공부하기',
};
