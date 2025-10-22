import { ResolvedCharacter, CharacterTeam } from "../types/schema";

// Type mapping from all_characters format to schema format
const TYPE_TO_TEAM_MAP: Record<string, CharacterTeam> = {
  townsfolk: "townsfolk",
  outsider: "outsider",
  minion: "minion",
  demon: "demon",
  travellers: "traveller",
  fabled: "fabled",
};

// Minimal character data structure from external source
interface ExternalCharacter {
  id: string;
  name: string;
  ability: string;
  type: string;
  icon: string;
  home_script?: string;
}

// Helper function to convert external character format to our schema format
export function convertToResolvedCharacter(char: ExternalCharacter): ResolvedCharacter {
  return {
    id: char.id,
    name: char.name,
    ability: char.ability,
    team: TYPE_TO_TEAM_MAP[char.type] || "townsfolk",
    image: `/character_icons/${char.icon}`,
    edition: char.home_script,
  };
}

// For now, we'll populate this with the most common characters
// In production, this would be generated from the full character set
export const CHARACTER_DATA: Record<string, ResolvedCharacter> = {
  // This will be populated from the external source or manually
  // For development, we can add characters as needed
};
