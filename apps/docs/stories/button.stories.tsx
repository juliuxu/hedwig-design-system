import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@hedwig-julian/button/src";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "filled",
    size: "medium",
    fullWidth: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: "secondary",
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: "outline",
  },
};

export const fullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
};
