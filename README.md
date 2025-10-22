# Blood on the Clocktower Script PDF Maker

A web application that generates printable character sheets for Blood on the Clocktower custom scripts in the style of the official Trouble Brewing sheet.

## Features

- Upload custom script JSON files following the official BotC schema
- Preview character sheets with vintage parchment styling
- **Customizable sidebar and title colors**
- **Sort scripts using official BotC sorting rules** (via botc-script-checker)
- Client-side PDF generation
- Matches the aesthetic of official character sheets
- **Authentic typography**: Character names in Goudy Old Style, abilities in Trade Gothic
- Supports official character IDs and custom character definitions

## Tech Stack

- **Vite** - Build tool and dev server
- **Preact** - Lightweight React alternative
- **TypeScript** - Type safety
- **jsPDF** - Client-side PDF generation
- **html2canvas** - HTML to canvas conversion for PDF export
- **botc-script-checker** - Official BotC script validation and sorting

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Upload a Script JSON File**
   - Click "Upload Script JSON" and select a valid BotC script file
   - The script must follow the schema defined in `/src/types/schema.ts`

2. **Preview the Sheet**
   - The character sheet will be displayed with all characters organized by team
   - Teams are color-coded: Townsfolk (blue), Outsiders (green), Minions (orange), Demons (red), Travellers (purple), Fabled (yellow)

3. **Sort Script (Optional)**
   - Click "Sort Script" to automatically organize characters following official BotC sorting rules:
     - By character type (Townsfolk → Outsiders → Minions → Demons)
     - By ability text pattern (e.g., "You start knowing" before "Each night")
     - By ability text length (shortest first)
     - By character name length
     - Alphabetically

4. **Customize (Optional)**
   - Use the **Sidebar Color** picker to change the sidebar color
   - Use the **Title Color** picker to change the title color
   - Match the Contempt.pdf example with a dark green sidebar (#1a5a3e) and gold title (#d4af37)

5. **Download PDF**
   - Click "Download PDF" to generate and save a printable A4-sized PDF

## Script Format

Scripts should be JSON arrays following this structure:

```json
[
  {
    "id": "_meta",
    "name": "My Custom Script",
    "author": "Your Name"
  },
  "washerwoman",
  "imp",
  {
    "id": "custom_character",
    "name": "Custom Character",
    "team": "townsfolk",
    "ability": "Your ability text here..."
  }
]
```

Characters can be:
- Official character IDs (lowercase strings)
- Full character objects with `id`, `name`, `team`, and `ability`

## Character Images

**Important**: The character icon images are copyrighted by The Pandemonium Institute and are NOT included in this repository.

For development, copy images to `public/character_icons/` from an authorized source. This directory is gitignored.

In production, update the image URLs in `/src/data/all_characters.ts` to load from the [Blood on the Clocktower Wiki](https://wiki.bloodontheclocktower.com/).

## Font

The title font "Unlovable" by Letterhead Fonts is loaded from Adobe Fonts. Ensure you have proper licensing for production use.

## Future Improvements

- [ ] Load character images from wiki URLs instead of local files
- [ ] Support for night order displays
- [ ] Multiple sheet layout options
- [ ] Jinx information display
- [ ] Logo upload support
- [ ] Background image customization

## License

This project is for personal use only. Blood on the Clocktower is a trademark of Steven Medway and The Pandemonium Institute.
