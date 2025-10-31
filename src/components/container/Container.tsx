import React from "react";
import "./styles.css";

type Density = "low" | "default" | "high";
type Spacing = "xSmall" | "small" | "medium" | "large" | "xLarge";

type ContainerProps = {
  label?: string;
  density?: Density;
  spacing?: Spacing;
  resetDefaults?: boolean; // new prop
  children?: React.ReactNode;
};

export function Container({
  label,
  density,
  spacing,
  resetDefaults,
  children,
}: ContainerProps) {
  const style = {
    "--density": resetDefaults ? (density || "default") : density,
    "--spacing-token": resetDefaults ? (spacing || "medium") : spacing,
  } as React.CSSProperties;

  return (
    <div className="container" style={style}>
      <div className="container-label">{label}</div>
      {children}
    </div>
  );
}
