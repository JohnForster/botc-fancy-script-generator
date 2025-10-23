import { ResolvedCharacter } from "../types/schema";
import { GroupedCharacters } from "../utils/scriptParser";
import { parseRgb, rgbToHsl } from "../utils/colorAlgorithms";
import "./CharacterSheet.css";
import { type CSSProperties } from "preact";

interface CharacterSheetProps {
  title: string;
  author?: string;
  characters: GroupedCharacters;
  color: string;
}

export function CharacterSheet({
  title,
  author,
  characters,
  color = "#4a5568",
}: CharacterSheetProps) {
  const sections = [
    {
      key: "townsfolk",
      title: "Townsfolk",
      chars: characters.townsfolk,
      color: "#00469e",
    },
    {
      key: "outsider",
      title: "Outsiders",
      chars: characters.outsider,
      color: "#00469e",
    },
    {
      key: "minion",
      title: "Minions",
      chars: characters.minion,
      color: "#580709",
    },
    {
      key: "demon",
      title: "Demons",
      chars: characters.demon,
      color: "#580709",
    },
  ].filter((section) => section.chars.length > 0);

  // TODO Improve color adjustment algorithm for saturation and lightness
  const [h, s, l] = rgbToHsl(...parseRgb(color));
  const [H, S, L] = rgbToHsl(...parseRgb("#74131B"));

  const lAdj = 9.5 * l * l + 0.48 * l; // Adjustment based on coords (0,0), (0.3,1) (1,10)

  // Calculate darkened version of color for gradient
  const [r, g, b] = parseRgb(color);
  const darkenFactor = 0.2; // Darken to 20% of original brightness
  const rDark = Math.round(r * darkenFactor);
  const gDark = Math.round(g * darkenFactor);
  const bDark = Math.round(b * darkenFactor);
  const colorDark = `rgb(${rDark}, ${gDark}, ${bDark})`;

  return (
    <div
      className="character-sheet"
      id="character-sheet"
      style={
        {
          "--header-color-light": color,
          "--header-color-dark": colorDark,
        } as CSSProperties
      }
    >
      <div
        className="sidebar-container"
        style={{
          filter: `hue-rotate(${h}deg) saturate(${s}) brightness(${lAdj})`,
          // filter: `hue-rotate(${h}deg)`,
        }}
      ></div>
      <div className="sheet-content">
        <h1 className="sheet-header">{title}</h1>
        <h2 className="sheet-author">by {author}</h2>

        <div className="characters-grid">
          {sections.map((section, i) => (
            <>
              <CharacterSection
                key={section.key}
                title={section.title.toUpperCase()}
                characters={section.chars}
                sidebarColor={color}
                charNameColor={section.color}
              />
              {i < sections.length - 1 && (
                <img src="images/divider.png" className="section-divider" />
              )}
            </>
          ))}
        </div>

        <div className="sheet-footer">
          <span className="asterisk">*</span>Not the first night
        </div>
        <div className="author-credit">
          <p>© Steven Medway bloodontheclocktower.com</p>
          <p>Script template by John Forster ravenswoodstudio.xyz</p>
        </div>
      </div>
    </div>
  );
}

interface CharacterSectionProps {
  title: string;
  characters: ResolvedCharacter[];
  sidebarColor: string;
  charNameColor: string;
}

function CharacterSection({
  title,
  characters,
  charNameColor,
}: CharacterSectionProps) {
  return (
    <div className="character-section">
      <h2 className="section-title">{title}</h2>
      <div className="character-list">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} color={charNameColor} />
        ))}
        {characters.length % 2 === 1 && (
          <div className="character-column-spacer"></div>
        )}
      </div>
    </div>
  );
}

interface CharacterCardProps {
  character: ResolvedCharacter;
  color: string;
}

function CharacterCard({ character, color }: CharacterCardProps) {
  const getImageUrl = () => {
    // Prefer wiki_image for official characters
    if (character.wiki_image) {
      return character.wiki_image;
    }
    // Fall back to custom image for custom characters
    if (!character.image) {
      return null;
    }
    if (typeof character.image === "string") {
      return character.image;
    }
    // If it's an array, use the first image
    return character.image[0];
  };

  const renderAbility = (ability: string) => {
    // Match square brackets at the end of the ability
    const match = ability.match(/^(.*?)(\[.*?\])$/);

    if (match) {
      const [, beforeBrackets, brackets] = match;
      return (
        <>
          {beforeBrackets}
          <strong className="setup-ability">{brackets}</strong>
        </>
      );
    }

    return ability;
  };

  const imageUrl = getImageUrl();

  return (
    <div className="character-card">
      <div className="character-icon-wrapper">
        {imageUrl ? (
          <img src={imageUrl} alt={character.name} className="character-icon" />
        ) : (
          <div className="character-icon-placeholder" style={{ color }}>
            {character.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="character-info">
        {console.log("color:", color)}
        <h3 className="character-name" style={{ color: color }}>
          {character.name}
        </h3>
        <p className="character-ability">{renderAbility(character.ability)}</p>
      </div>
    </div>
  );
}
