import { useState } from 'react';

interface BooleanSetter {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export const useBoolean = (defaultValue = false): [boolean, BooleanSetter] => {
  const [bool, setBool] = useState(defaultValue);

  const on = () => setBool(true);
  const off = () => setBool(false);
  const toggle = () => setBool((prev) => !prev);

  return [bool, { on, off, toggle }];
};
