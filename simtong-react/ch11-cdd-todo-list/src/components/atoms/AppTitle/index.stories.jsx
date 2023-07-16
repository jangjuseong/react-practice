import { AppTitle } from '.';

export default {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#304ffe' }],
    },
  },
};

const Template = () => <AppTitle />;

export const Default = Template.bind({});
