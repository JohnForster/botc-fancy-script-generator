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

export const DEFAULT_OPTIONS: ScriptOptions = {
  color: "#137415",
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
