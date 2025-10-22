export type CharacterID = Lowercase<string>;
export type CharacterName = string;
export type CharacterIcon = string;
export type SetOfCharacterIconURLs =
  | [string]
  | [string, string]
  | [string, string, string];
export type CharacterTeam =
  | "townsfolk"
  | "outsider"
  | "minion"
  | "demon"
  | "traveller"
  | "fabled";
export type TheEditionID = string;
export type CharacterAbility = string;
export type CharacterFlavorText = string;
export type FirstNightWakeUpPriority = number;
export type FirstNightStorytellerReminder = string;
export type OtherNightsWakeUpPriority = number;
export type OtherNightsStorytellerReminder = string;
export type CharacterReminderTokens = string[];
export type GlobalCharacterReminderTokens = string[];
export type HasGameSetupAbility = boolean;
export type IDOfOtherJinxedCharacter = string;
export type JinxExplanation = string;
export type Jinxes = JinxPair[];
export type IntegrationType =
  | "selection"
  | "ability"
  | "signal"
  | "vote"
  | "reveal"
  | "player";
export type FeatureNameReference =
  | "grimoire"
  | "pointing"
  | "ghost-votes"
  | "distribute-roles"
  | "bag-disabled"
  | "bag-duplicate"
  | "multiplier"
  | "hidden"
  | "replace-character"
  | "player"
  | "card"
  | "open-eyes";
export type SpecialAbilityTextValue = string;
export type SpecialAbilityNumberValue = number;
export type AbilityUseTime =
  | "pregame"
  | "day"
  | "night"
  | "firstNight"
  | "firstDay"
  | "otherNight"
  | "otherDay";
export type GlobalAbilityScope =
  | "townsfolk"
  | "outsider"
  | "minion"
  | "demon"
  | "traveller"
  | "dead";
export type SpecialAppIntegrationFeaturesForThisCharacter =
  SpecialAppIntegrationFeature[];
export type OfficialCharacterID = Lowercase<string>;
export type MetaID = "_meta";
export type ScriptName = string;
export type ScriptAuthor = string;
export type ScriptLogoImage = string;
export type HideScriptTitleAuthor = boolean;
export type ScriptBackgroundImage = string;
export type AlmanacLink = string;
export type HomebrewRule = string;
export type HomebrewRules = HomebrewRule[];
export type FirstNightOrderCharacterID = string;
export type RelativeFirstNightOrder = FirstNightOrderCharacterID[];
export type OtherNightOrderCharacterID = string;
export type RelativeOtherNightOrder = OtherNightOrderCharacterID[];
export type ScriptElement =
  | ScriptCharacter
  | OfficialCharacterID
  | ScriptMetadata
  | OfficialCharacterDeprecated;
export type BloodOnTheClocktowerCustomScript = ScriptElement[];

export interface ScriptCharacter {
  id: CharacterID;
  name: CharacterName;
  image?: CharacterIcon | SetOfCharacterIconURLs;
  team: CharacterTeam;
  edition?: TheEditionID;
  ability: CharacterAbility;
  flavor?: CharacterFlavorText;
  firstNight?: FirstNightWakeUpPriority;
  firstNightReminder?: FirstNightStorytellerReminder;
  otherNight?: OtherNightsWakeUpPriority;
  otherNightReminder?: OtherNightsStorytellerReminder;
  reminders?: CharacterReminderTokens;
  remindersGlobal?: GlobalCharacterReminderTokens;
  setup?: HasGameSetupAbility;
  jinxes?: Jinxes;
  special?: SpecialAppIntegrationFeaturesForThisCharacter;
}

export interface JinxPair {
  id: IDOfOtherJinxedCharacter;
  reason: JinxExplanation;
  [k: string]: unknown;
}

export interface SpecialAppIntegrationFeature {
  type: IntegrationType;
  name: FeatureNameReference;
  value?: SpecialAbilityTextValue | SpecialAbilityNumberValue;
  time?: AbilityUseTime;
  global?: GlobalAbilityScope;
  [k: string]: unknown;
}

export interface ScriptMetadata {
  id: MetaID;
  name: ScriptName;
  author?: ScriptAuthor;
  logo?: ScriptLogoImage;
  hideTitle?: HideScriptTitleAuthor;
  background?: ScriptBackgroundImage;
  almanac?: AlmanacLink;
  bootlegger?: HomebrewRules;
  firstNight?: RelativeFirstNightOrder;
  otherNight?: RelativeOtherNightOrder;
  [k: string]: unknown;
}

export interface OfficialCharacterDeprecated {
  id: OfficialCharacterID;
}

export type Script = BloodOnTheClocktowerCustomScript;

// Helper type for resolved characters
export interface ResolvedCharacter {
  id: string;
  name: string;
  ability: string;
  team: CharacterTeam;
  image?: string | string[];
  wiki_image?: string;
  edition?: string;
  isCustom?: boolean;
}
