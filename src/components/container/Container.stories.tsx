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
    children: <Child label="Child 1" />,
  },
};
export const Spacing: Story = {
  args: {
    label: "Spacing",
    density: "default",
    spacing: "xSmall",
    children: <Child label="Child 1" />,
  },
};

export const NestedContainers: Story = {
  args: {
    label: "Nested Containers Spacing",
    density: "default",
    spacing: "xLarge",
    children: (
      <>
        <Child label="Spacing: xLarge" />
        <Container label="xSmall Spacing" spacing="xSmall">
          <Child label="Spacing: xSmall" />
        </Container>
      </>
    ),
  },
};

export const InheritedNestedContainers: Story = {
  args: {
    label: "Nested Containers Spacing",
    density: "high",
    spacing: "medium",
    children: (
      <>
        <Child label="Density: high, Spacing: medium" />
        <Container label="xSmall Spacing" spacing="xSmall">
          <Child label="Density: high, Spacing: xSmall" />
        </Container>
      </>
    ),
  },
};

export const InheritedNestedContainersResetDefaults: Story = {
  args: {
    label: "Nested Containers Spacing",
    density: "high",
    spacing: "medium",
    children: (
      <>
        <Child label="Density: high, Spacing: medium" />
        <Container label="Reset Defaults: xLarge Spacing" spacing="xLarge" resetDefaults>
          <Child label="Density: default, Spacing: xLarge" />
        </Container>
      </>
    ),
  },
};
