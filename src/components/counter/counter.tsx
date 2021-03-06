import React from "react";
import { Plus, Minus } from "assets/icons/PlusMinus";
import { CounterBox, CounterButton, CounterValue } from "./counter.style";
interface Props {
  onDecrement: (e: Event) => void;
  onIncrement: (e: Event) => void;
  value: number;
  variant?: string;
  className?: string;
}

export const Counter: React.FC<Props> = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className,
}) => {
  return (
    <CounterBox
      variant={variant}
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <CounterButton
        onClick={onDecrement}
        variant={variant}
        className="control-button"
      >
        <Minus />
      </CounterButton>
      <CounterValue>{value}</CounterValue>
      <CounterButton
        onClick={onIncrement}
        variant={variant}
        className="control-button"
      >
        <Plus />
      </CounterButton>
    </CounterBox>
  );
};
