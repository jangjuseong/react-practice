import { ToDoItem } from '.';

export default {
  title: 'Organisms/ToDoItem',
  component: ToDoItem,
  argTypes: {
    label: { control: 'text' },
    onDelete: { action: 'clicked' },
  },
};

const Template = args => <ToDoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Example ToDo Item',
};
