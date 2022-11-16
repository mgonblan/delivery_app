import { CheckBox } from "components";
export default {
  title: "delivery_app/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder12",
  variant: "FillGray908",
  size: "sm",
  inputClassName: "mr-1",
};
