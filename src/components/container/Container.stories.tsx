import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";
import { Child } from "../child/Child";
import "../base.css";
import "./styles.css";
import "../child/styles.css";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed at the top of the container",
    },
    density: {
      control: "select",
      options: ["low", "default", "high"],
      description: "Controls the density multiplier (affects padding)",
    },
    spacing: {
      control: "select",
      options: ["xSmall", "small", "medium", "large", "xLarge"],
      description: "Controls the base spacing token",
    },
    resetDefaults: {
      control: "boolean",
      description: "Reset to default density and spacing values",
    },
    children: {
      control: false,
      description: "Child components to render inside the container",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Container",
    density: "default",
    spacing: "medium",
    children: <Child label="Child 1" />,
  },
};

export const Density: Story = {
  args: {
    label: "Density",
    density: "low",
    spacing: "medium",
    children: (
        <Child label="Child 1" />
    ),
  },
};
export const Spacing: Story = {
    args: {
      label: "Spacing",
      density: "default",
      spacing: "xSmall",
      children: ( <Child label="Child 1" />),
    },
  };

  export const NestedContainers : Story = {
    args: {
      label: "Nested Containers Spacing",
      density: "default",
      spacing: "medium",
      children: (
        <Container label="xLarge Spacing" spacing="xLarge">
            <Child label="Child 2" />
          <Container label="xSmall Spacing" spacing="xSmall">
            <Child label="Child 1" />
          </Container>
        </Container>
      ),
    },
  };



