import { PageTitle } from '.';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
};

const Template = args => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '할 일 목록',
};
