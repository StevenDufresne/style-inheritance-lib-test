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

export const LowDensity: Story = {
  args: {
    label: "Low Density Container",
    density: "low",
    spacing: "medium",
    children: (
        <Child label="Child 1" />
    ),
  },
};

export const HighDensity: Story = {
  args: {
    label: "High Density Container",
    density: "high",
    spacing: "medium",
    children: (<Child label="Child 1" />),
  },
};

export const xSmallSpacing: Story = {
    args: {
      label: "xSmall Spacing",
      density: "default",
      spacing: "xSmall",
      children: ( <Child label="Child 1" />),
    },
  };

export const SmallSpacing: Story = {
  args: {
    label: "Small Spacing",
    density: "default",
    spacing: "small",
    children: ( <Child label="Child 1" />),
  },
};

export const LargeSpacing: Story = {
  args: {
    label: "Large Spacing",
    density: "default",
    spacing: "large",
    children: (<Child label="Child 1" />),
  },
};

export const XLargeSpacing: Story = {
  args: {
    label: "Extra Large Spacing",
    density: "default",
    spacing: "xLarge",
    children: (<Child label="Child 1" />),
  },
};

export const LowDensityXsmallSpacing : Story = {
    args: {
      label: "Low Density xSmall Spacing",
      density: "low",
      spacing: "xSmall",
      children: (
          <Child label="Child 1" />
      ),
    },
  };


  export const NestedContainersSpacing  : Story = {
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



