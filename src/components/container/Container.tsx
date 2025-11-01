import React from "react";
import "./styles.css";

type Density = "low" | "default" | "high";
type Spacing = "xSmall" | "small" | "default" | "large" | "xLarge";

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
  const dataAttributes: Record<string, string> = {};
  
  if (density !== undefined || resetDefaults) {
    dataAttributes["data-density"] = resetDefaults ? (density || "default") : (density as string);
  }
  
  if (spacing !== undefined || resetDefaults) {
    dataAttributes["data-spacing"] = resetDefaults ? (spacing || "default") : (spacing as string);
  }

  return (
    <div className="container" {...dataAttributes}>
      <div className="container-label">{label}</div>
      {children}
    </div>
  );
}
