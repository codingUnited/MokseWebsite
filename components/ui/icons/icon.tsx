"use client";
import { iconRegistry } from "./icon-registry";
import { Icon as ChakraIcon } from "@chakra-ui/react";

export type IconName = keyof typeof iconRegistry;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
} & React.ComponentProps<typeof ChakraIcon>;

export function Icon({ name, ...props }: IconProps) {
  const Component = iconRegistry[name];
  if (!Component) return null;
  return (
    <ChakraIcon
      as={Component}
      boxSize={props.size}
      color={props.color}
      {...props}
    />
  );
}
