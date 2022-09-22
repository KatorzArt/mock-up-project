import TmpGenericInput from "./TmpGenericInput.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Inputs/GenericInput",
  component: TmpGenericInput,
} as Meta<typeof TmpGenericInput>;

const Template: StoryFn<typeof TmpGenericInput> = (args) => ({
  components: { TmpGenericInput },
  setup: () => ({ args }),
  template: `<TmpGenericInput v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = { onInput: (e: any) => console.log(e.target.value) };
