import { ScriptOptions } from "botc-character-sheet";

export const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  const hex = `#${r}${g}${b}`;
  return hex;
};

export const DEFAULT_OPTIONS: ScriptOptions = {
  color: randomColor(),
  showAuthor: true,
  showJinxes: true,
  useOldJinxes: false,
  showSwirls: true,
  includeMargins: false,
  solidTitle: false,
  appearance: "normal",
  showBackingSheet: true,
  showNightSheet: true,
  iconScale: 1.6,
  formatMinorWords: false,
  displayNightOrder: false,
};
