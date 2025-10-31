import React from "react";
import "./styles.css";

type Density = "low" | "default" | "high";
type Spacing = "xSmall" | "small" | "default" | "large" | "xLarge";

type ContainerProps = {
  label?: string;
  density?: Density;
  spacing?: Spacing;
  backgroundColor?: 'light' | 'default' | 'dark';
  headingColor?: 'default' | 'dark' | 'darker';
  borderRadius?: 'small' | 'default' | 'large';
  borderColor?: 'light' | 'default' | 'dark';
  borderWidth?: 'thin' | 'default' | 'thick';
  resetDefaults?: boolean; // new prop
  children?: React.ReactNode;
};

export function Container({
  label,
  density,
  spacing,
  backgroundColor,
  headingColor,
  borderRadius,
  borderColor,
  borderWidth,
  resetDefaults,
  children,
}: ContainerProps) {
  const style = {
    "--density": resetDefaults ? (density || "default") : density,
    "--spacing-token": resetDefaults ? (spacing || "default") : spacing,
    "--background-color-token": resetDefaults ? (backgroundColor || "default") : backgroundColor,
    "--heading-color-token": resetDefaults ? (headingColor || "default") : headingColor,
    "--border-radius-token": resetDefaults ? (borderRadius || "default") : borderRadius,
    "--border-color-token": resetDefaults ? (borderColor || "default") : borderColor,
    "--border-width-token": resetDefaults ? (borderWidth || "default") : borderWidth,
  } as React.CSSProperties;

  return (
    <div className="container" style={style}>
      <div className="container-label">{label}</div>
      {children}
    </div>
  );
}
