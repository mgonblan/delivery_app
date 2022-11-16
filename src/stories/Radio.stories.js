import { Radio } from "components";
export default {
  title: "delivery_app/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = { label: "Radio", size: "sm", inputClassName: "mr-1" };
