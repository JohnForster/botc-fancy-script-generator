export interface ScriptOptions {
  color: string;
  showAuthor: boolean;
  showJinxes: boolean;
  useOldJinxes: boolean;
  showSwirls: boolean;
  includeMargins: boolean;
  solidHeader: boolean;
  compactAppearance: boolean;
  showBackingSheet: boolean;
  iconScale: number;
}

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
  console.log("hex:", hex);
  return hex;
};

export const DEFAULT_OPTIONS: ScriptOptions = {
  color: randomColor(),
  showAuthor: true,
  showJinxes: true,
  useOldJinxes: false,
  showSwirls: true,
  includeMargins: false,
  solidHeader: false,
  compactAppearance: false,
  showBackingSheet: true,
  iconScale: 1.6,
};
