import { ParsedScript, ResolvedCharacter } from "botc-character-sheet";
import { ALL_CHARACTERS } from "../data/all_characters";
import { toTitleCase } from "./stringUtils";
import { ScriptMetadata, Script, ScriptCharacter } from "botc-script-checker";

export function parseScript(json: unknown): ParsedScript {
  if (!Array.isArray(json)) {
    throw new Error("Script must be an array");
  }

  const script = json as Script;
  let metadata: ScriptMetadata | null = null;
  const characters: ScriptCharacter[] = [];

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
  return {
    ...char,
    name: toTitleCase(char.name),
    isCustom: true,
  };
}
