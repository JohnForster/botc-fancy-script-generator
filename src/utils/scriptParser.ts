import {
  Script,
  ScriptCharacter,
  ScriptMetadata,
  ResolvedCharacter,
} from "../types/schema";
import { ALL_CHARACTERS } from "../data/all_characters";
import jinxesData from "../data/jinxes.json";
import { toTitleCase } from "./stringUtils";

export interface ParsedScript {
  metadata: ScriptMetadata | null;
  characters: ResolvedCharacter[];
}

export function parseScript(json: unknown): ParsedScript {
  if (!Array.isArray(json)) {
    throw new Error("Script must be an array");
  }

  const script = json as Script;
  let metadata: ScriptMetadata | null = null;
  const characters: ResolvedCharacter[] = [];

  for (const element of script) {
    if (typeof element === "string") {
      // Official character ID
      const resolved = resolveOfficialCharacter(element);
      if (resolved) {
        characters.push(resolved);
      }
    } else if (typeof element === "object" && element !== null) {
      if ("id" in element) {
        if (element.id === "_meta") {
          // Metadata element
          metadata = element as ScriptMetadata;
        } else if ("team" in element && "ability" in element) {
          // Custom character with full definition
          const custom = element as ScriptCharacter;
          characters.push(resolveCustomCharacter(custom));
        } else {
          // Possibly old format or official character object
          const id = (element as { id: string }).id;
          const resolved = resolveOfficialCharacter(id);
          if (resolved) {
            characters.push(resolved);
          }
        }
      }
    }
  }

  return { metadata, characters };
}

function resolveOfficialCharacter(id: string): ResolvedCharacter | null {
  const lowerId = id.toLowerCase();
  const char = ALL_CHARACTERS[lowerId];

  if (!char) {
    console.warn(`Character not found: ${id}`);
    return null;
  }

  return char;
}

function resolveCustomCharacter(char: ScriptCharacter): ResolvedCharacter {
  let image: string | string[] | undefined;

  if (char.image) {
    if (typeof char.image === "string") {
      image = char.image;
    } else if (Array.isArray(char.image)) {
      image = char.image;
    }
  }

  return {
    id: char.id,
    name: toTitleCase(char.name),
    ability: char.ability,
    team: char.team,
    image,
    edition: char.edition,
    isCustom: true,
  };
}

export interface GroupedCharacters {
  townsfolk: ResolvedCharacter[];
  outsider: ResolvedCharacter[];
  minion: ResolvedCharacter[];
  demon: ResolvedCharacter[];
  traveller: ResolvedCharacter[];
  fabled: ResolvedCharacter[];
}

export function groupCharactersByTeam(
  characters: ResolvedCharacter[]
): GroupedCharacters {
  const grouped: GroupedCharacters = {
    townsfolk: [],
    outsider: [],
    minion: [],
    demon: [],
    traveller: [],
    fabled: [],
  };

  for (const char of characters) {
    grouped[char.team].push(char);
  }

  return grouped;
}

export interface Jinx {
  characters: [string, string];
  jinx: string;
}

export function findJinxes(
  characters: ResolvedCharacter[],
  script: Script
): Jinx[] {
  const characterIds = new Set(characters.map((c) => c.id.toLowerCase()));
  const applicableJinxes: Jinx[] = [];

  // Add global jinxes from jinxes.json
  for (const jinx of jinxesData as Jinx[]) {
    const [char1, char2] = jinx.characters;
    if (characterIds.has(char1) && characterIds.has(char2)) {
      applicableJinxes.push(jinx);
    }
  }

  // Extract jinxes from custom characters in the script
  for (const element of script) {
    if (
      typeof element === "object" &&
      element !== null &&
      "jinxes" in element
    ) {
      const customChar = element as ScriptCharacter;
      const char1Id = customChar.id.toLowerCase();

      // Only process if this character is in the script
      if (characterIds.has(char1Id) && customChar.jinxes) {
        for (const jinxPair of customChar.jinxes) {
          const char2Id = jinxPair.id.toLowerCase();

          // Only add if both characters are in the script
          if (characterIds.has(char2Id)) {
            // Check if this jinx already exists (to avoid duplicates)
            const exists = applicableJinxes.some(
              (j) =>
                (j.characters[0] === char1Id && j.characters[1] === char2Id) ||
                (j.characters[0] === char2Id && j.characters[1] === char1Id)
            );

            if (!exists) {
              applicableJinxes.push({
                characters: [char1Id, char2Id],
                jinx: jinxPair.reason,
              });
            }
          }
        }
      }
    }
  }

  return applicableJinxes;
}
