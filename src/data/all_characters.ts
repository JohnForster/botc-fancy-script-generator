// Auto-generated from script-checker-lib/src/data/all_characters.ts
// DO NOT EDIT MANUALLY - use scripts/convert-characters.ts to regenerate

import { ResolvedCharacter } from "botc-character-sheet";

export const ALL_CHARACTERS: Record<string, ResolvedCharacter> = {
  acrobat: {
    name: "Acrobat",
    ability:
      "Each night*, choose a player: if they are or become drunk or poisoned tonight, you die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/b5/Icon_acrobat.png",
    id: "acrobat",
    otherNightReminder: "The Acrobat chooses a player. :reminder:",
  },
  alchemist: {
    name: "Alchemist",
    ability:
      "You have a Minion ability. When using this, the Storyteller may prompt you to choose differently.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/54/Icon_alchemist.png",
    id: "alchemist",
    firstNightReminder:
      "Show the *YOU ARE* token and the character token of a Minion.",
  },
  alhadikhia: {
    name: "Al-Hadikhia",
    ability:
      "Each night*, you may choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/18/Icon_alhadikhia.png",
    id: "alhadikhia",
    otherNightReminder:
      'The Al-Hadikhia chooses three players. :reminder: :reminder: :reminder: Wake the player marked *1* and say "the Al-Hadikhia has chosen", then the player\'s name, then "Do you choose to live?" They either nod or shake their head. Put them to sleep and add or remove shrouds accordingly. Repeat for players marked *2* and *3*. If all three players are now alive, add a shroud to all three.',
  },
  alsaahir: {
    name: "Alsaahir",
    ability:
      "Each day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/8e/Icon_alsaahir.png",
    id: "alsaahir",
  },
  amnesiac: {
    name: "Amnesiac",
    ability:
      "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/26/Icon_amnesiac.png",
    id: "amnesiac",
    firstNightReminder: "Run the Amnesiac's ability, if applicable.",
    otherNightReminder: "Run the Amnesiac's ability, if applicable.",
  },
  angel: {
    name: "Angel",
    ability:
      "Something bad might happen to whoever is most responsible for the death of a new player.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/ca/Icon_angel.png",
    id: "angel",
    firstNightReminder:
      "Announce which players are protected by the Angel. Add the *PROTECTED* token to the relevant players.",
  },
  apprentice: {
    name: "Apprentice",
    ability:
      "On your 1st night, you gain a Townsfolk ability (if good) or a Minion ability (if evil).",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/03/Icon_apprentice.png",
    id: "apprentice",
    firstNightReminder:
      "Show the Apprentice the *YOU ARE* card, then a Townsfolk or Minion token. In the Grimoire, replace the Apprentice token with that character token, and put the Apprentice's *IS THE APPRENTICE* reminder by that character token.",
  },
  artist: {
    name: "Artist",
    ability:
      "Once per game, during the day, privately ask the Storyteller any yes/no question.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_artist.png",
    id: "artist",
  },
  assassin: {
    name: "Assassin",
    ability:
      "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/49/Icon_assassin.png",
    id: "assassin",
    otherNightReminder:
      "The Assassin might choose a player. :reminder: :reminder:",
  },
  atheist: {
    name: "Atheist",
    ability:
      "The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/43/Icon_atheist.png",
    id: "atheist",
  },
  balloonist: {
    name: "Balloonist",
    ability:
      "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/cb/Icon_balloonist.png",
    id: "balloonist",
    firstNightReminder: "Show any player. :reminder:",
    otherNightReminder:
      "Show a player with a different character type to previously. :reminder:",
  },
  banshee: {
    name: "Banshee",
    ability:
      "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.”",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/63/Icon_banshee.png",
    id: "banshee",
    otherNightReminder:
      "If the Banshee was killed by the Demon tonight, announce to all players that the Banshee has died. :reminder:",
  },
  barber: {
    name: "Barber",
    ability:
      "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/16/Icon_barber.png",
    id: "barber",
    otherNightReminder:
      "If the Barber died today or tonight, show the Demon the *THIS CHARACTER SELECTED YOU* & Barber tokens. If the Demon chose 2 players, wake one at a time. Show the *YOU ARE* token & their new character token.",
  },
  barista: {
    name: "Barista",
    ability:
      "Each night, until dusk, 1) a player becomes sober, healthy & gets true info, or 2) their ability works twice. They learn which.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/24/Icon_barista.png",
    id: "barista",
    firstNightReminder:
      "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
    otherNightReminder:
      "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
  },
  baron: {
    name: "Baron",
    ability: "There are extra Outsiders in play. [+2 Outsiders]",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6d/Icon_baron.png",
    id: "baron",
  },
  beggar: {
    name: "Beggar",
    ability:
      "You must use a vote token to vote. If a dead player gives you theirs, you learn their alignment. You are sober and healthy.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e3/Icon_beggar.png",
    id: "beggar",
  },
  bishop: {
    name: "Bishop",
    ability:
      "Only the Storyteller can nominate. At least 1 opposing player must be nominated each day.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/71/Icon_bishop.png",
    id: "bishop",
  },
  boffin: {
    name: "Boffin",
    ability:
      "The Demon (even if drunk or poisoned) has a not-in-play good character's ability. You both know which.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e0/Icon_boffin.png",
    id: "boffin",
    firstNightReminder:
      "Wake the Boffin and the Demon. Show the not-in-play good character token. Put the Boffin and the Demon to sleep.",
  },
  bonecollector: {
    name: "Bone Collector",
    ability:
      "Once per game, at night*, choose a dead player: they regain their ability until dusk.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/9e/Icon_bonecollector.png",
    id: "bonecollector",
    otherNightReminder:
      "The Bone Collector either shakes their head no or points at any dead player. If they pointed at any dead player, put the Bone Collector's 'Has Ability' reminder by the chosen player's character token. (They may need to be woken tonight to use it.)",
  },
  boomdandy: {
    name: "Boomdandy",
    ability:
      "If you are executed, all but 3 players die. After a 10 to 1 countdown, the player with the most players pointing at them, dies.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/20/Icon_boomdandy.png",
    id: "boomdandy",
  },
  bootlegger: {
    name: "Bootlegger",
    ability: "This script has homebrew characters or rules.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/08/Icon_bootlegger.png",
    id: "bootlegger",
  },
  bountyhunter: {
    name: "Bounty Hunter",
    ability:
      "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/5b/Icon_bountyhunter.png",
    id: "bountyhunter",
    firstNightReminder: "Point to the *KNOWN* player.",
    otherNightReminder:
      "If the *KNOWN* player died today or tonight, point to a new *KNOWN* player.",
  },
  buddhist: {
    name: "Buddhist",
    ability:
      "For the first 2 minutes of each day, veteran players may not talk.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/25/Icon_buddhist.png",
    id: "buddhist",
    firstNightReminder: "Declare which players are affected by the Buddhist.",
  },
  bureaucrat: {
    name: "Bureaucrat",
    ability:
      "Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/b1/Icon_bureaucrat.png",
    id: "bureaucrat",
    firstNightReminder: "The Bureaucrat chooses a player. :reminder:",
    otherNightReminder: "The Bureaucrat chooses a player. :reminder:",
  },
  butcher: {
    name: "Butcher",
    ability: "Each day, after the 1st execution, you may nominate again.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e3/Icon_butcher.png",
    id: "butcher",
  },
  butler: {
    name: "Butler",
    ability:
      "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/19/Icon_butler.png",
    id: "butler",
    firstNightReminder: "The Butler chooses a player. :reminder:",
    otherNightReminder: "The Butler chooses a player. :reminder:",
  },
  cannibal: {
    name: "Cannibal",
    ability:
      "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/8e/Icon_cannibal.png",
    id: "cannibal",
  },
  cerenovus: {
    name: "Cerenovus",
    ability:
      "Each night, choose a player & a good character: they are 'mad' they are this character tomorrow, or might be executed.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/45/Icon_cerenovus.png",
    id: "cerenovus",
    firstNightReminder:
      "The Cerenovus chooses a player & a character. :reminder: Put the Cerenovus to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token, the Cerenovus token, then the madness-character token.",
    otherNightReminder:
      "The Cerenovus chooses a player & a character. :reminder: Put the Cerenovus to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token, the Cerenovus token, then the madness-character token.",
  },
  chambermaid: {
    name: "Chambermaid",
    ability:
      "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/87/Icon_chambermaid.png",
    id: "chambermaid",
    firstNightReminder:
      "The Chambermaid chooses 2 living players. Give a finger signal.",
    otherNightReminder:
      "The Chambermaid chooses 2 living players. Give a finger signal.",
  },
  chef: {
    name: "Chef",
    ability: "You start knowing how many pairs of evil players there are.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_chef.png",
    id: "chef",
    firstNightReminder: "Give a finger signal.",
  },
  choirboy: {
    name: "Choirboy",
    ability:
      "If the Demon kills the King, you learn which player is the Demon. [+the King]",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d9/Icon_choirboy.png",
    id: "choirboy",
    otherNightReminder:
      "If the Demon killed the King, point to the Demon player.",
  },
  clockmaker: {
    name: "Clockmaker",
    ability:
      "You start knowing how many steps from the Demon to its nearest Minion.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/3/3d/Icon_clockmaker.png",
    id: "clockmaker",
    firstNightReminder: "Give a finger signal.",
  },
  courtier: {
    name: "Courtier",
    ability:
      "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e0/Icon_courtier.png",
    id: "courtier",
    firstNightReminder:
      "The Courtier might choose a character. :reminder: :reminder:",
    otherNightReminder:
      "The Courtier might choose a character. :reminder: :reminder:",
  },
  cultleader: {
    name: "Cult Leader",
    ability:
      "Each night, you become the alignment of an alive neighbor. If all good players choose to join your cult, your team wins.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6c/Icon_cultleader.png",
    id: "cultleader",
    firstNightReminder:
      "The Cult Leader might change alignment. If so, show the *YOU ARE* info token and a thumbs up or down for their new alignment.",
    otherNightReminder:
      "The Cult Leader might change alignment. If so, show the *YOU ARE* info token and a thumbs up or down for their new alignment.",
  },
  damsel: {
    name: "Damsel",
    ability:
      "All Minions know a Damsel is in play. If a Minion publicly guesses you (once), your team loses.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_damsel.png",
    id: "damsel",
    firstNightReminder:
      "If the Damsel was chosen by the Huntsman, show them the *YOU ARE* info token and their new character token.",
    otherNightReminder:
      "If the Damsel was chosen by the Huntsman, show them the *YOU ARE* info token and their new character token.",
  },
  deusexfiasco: {
    name: "Deus ex Fiasco",
    ability:
      "At least once per game, the Storyteller will make a mistake, correct it, and publicly admit to it.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/71/Icon_deusexfiasco.png",
    id: "deusexfiasco",
  },
  deviant: {
    name: "Deviant",
    ability: "If you were funny today, you cannot die by exile.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a5/Icon_deviant.png",
    id: "deviant",
  },
  devilsadvocate: {
    name: "Devil's Advocate",
    ability:
      "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/09/Icon_devilsadvocate.png",
    id: "devilsadvocate",
    firstNightReminder:
      "The Devil's Advocate chooses a living player. :reminder:",
    otherNightReminder:
      "The Devil's Advocate chooses a living player. :reminder:",
  },
  djinn: {
    name: "Djinn",
    ability: "Use the Djinn's special rule. All players know what it is.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/86/Icon_djinn.png",
    id: "djinn",
  },
  doomsayer: {
    name: "Doomsayer",
    ability:
      "If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/8f/Icon_doomsayer.png",
    id: "doomsayer",
  },
  dreamer: {
    name: "Dreamer",
    ability:
      "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/f2/Icon_dreamer.png",
    id: "dreamer",
    firstNightReminder:
      "The Dreamer points to a player. Show 1 good & 1 evil character token, 1 of which is their character.",
    otherNightReminder:
      "The Dreamer points to a player. Show 1 good & 1 evil character token, 1 of which is their character.",
  },
  drunk: {
    name: "Drunk",
    ability:
      "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/4a/Icon_drunk.png",
    id: "drunk",
  },
  duchess: {
    name: "Duchess",
    ability:
      "Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/87/Icon_duchess.png",
    id: "duchess",
    otherNightReminder:
      "Wake each player marked *VISITOR* or *FALSE INFO* one at a time. Show them the Duchess token, then fingers (1, 2, 3) equaling the number of evil players marked “Visitor” or, if you are waking the player marked “False Info,” show them any number of fingers except the number of evil players marked “Visitor.”",
  },
  empath: {
    name: "Empath",
    ability:
      "Each night, you learn how many of your 2 alive neighbors are evil.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/13/Icon_empath.png",
    id: "empath",
    firstNightReminder: "Give a finger signal.",
    otherNightReminder: "Give a finger signal.",
  },
  engineer: {
    name: "Engineer",
    ability:
      "Once per game, at night, choose which Minions or which Demon is in play.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/b9/Icon_engineer.png",
    id: "engineer",
    firstNightReminder:
      "The Engineer might choose Minions or Demons. :reminder: If they do: Put the Engineer to sleep. Wake a target, show them the *YOU ARE* token and their new character token, then put that target to sleep. Repeat for all players that changed characters.",
    otherNightReminder:
      "The Engineer might choose Minions or Demons. :reminder: If they do: Put the Engineer to sleep. Wake a target, show them the *YOU ARE* token and their new character token, then put that target to sleep. Repeat for all players that changed characters.",
  },
  eviltwin: {
    name: "Evil Twin",
    ability:
      "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/f4/Icon_eviltwin.png",
    id: "eviltwin",
    firstNightReminder:
      "Wake both twins. Allow eye contact. Show the good twin's character token to the Evil Twin & vice versa.",
  },
  exorcist: {
    name: "Exorcist",
    ability:
      "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/c2/Icon_exorcist.png",
    id: "exorcist",
    otherNightReminder:
      "The Exorcist chooses a player. :reminder: Put the Exorcist to sleep. If the Exorcist chose the Demon: Wake the Demon. Show the *THIS CHARACTER SELECTED YOU* & Exorcist tokens. Point to the Exorcist.",
  },
  fanggu: {
    name: "Fang Gu",
    ability:
      "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/0e/Icon_fanggu.png",
    id: "fanggu",
    otherNightReminder:
      "The Fang Gu chooses a player. :reminder: If they chose an Outsider (once only): Replace the Outsider token with the spare Fang Gu token. Put the Fang Gu to sleep. Wake the target. Show the *YOU ARE* and Fang Gu tokens & give a thumbs-down. :reminder:",
  },
  farmer: {
    name: "Farmer",
    ability: "When you die at night, an alive good player becomes a Farmer.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/fe/Icon_farmer.png",
    id: "farmer",
    otherNightReminder:
      "If the Farmer died tonight, wake an alive good player. Show them the *YOU ARE* info token and a Farmer character token. Replace their previous token with the Farmer token.",
  },
  fearmonger: {
    name: "Fearmonger",
    ability:
      "Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/11/Icon_fearmonger.png",
    id: "fearmonger",
    firstNightReminder:
      'The Fearmonger chooses a player. :reminder: Declare that "the Fearmonger has chosen a player."',
    otherNightReminder:
      'The Fearmonger chooses a player. :reminder: If the player wasn\'t already marked with the *FEAR* reminder, declare that "the Fearmonger has chosen a player."',
  },
  ferryman: {
    name: "Ferryman",
    ability: "On the final day, all dead players regain their vote token.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/8f/Icon_ferryman.png",
    id: "ferryman",
  },
  fibbin: {
    name: "Fibbin",
    ability: "Once per game, 1 good player might get incorrect information.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/2e/Icon_fibbin.png",
    id: "fibbin",
  },
  fiddler: {
    name: "Fiddler",
    ability:
      "Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e5/Icon_fiddler.png",
    id: "fiddler",
  },
  fisherman: {
    name: "Fisherman",
    ability:
      "Once per game, during the day, visit the Storyteller for some advice to help your team win.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/19/Icon_fisherman.png",
    id: "fisherman",
  },
  flowergirl: {
    name: "Flowergirl",
    ability: "Each night*, you learn if a Demon voted today.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/ac/Icon_flowergirl.png",
    id: "flowergirl",
    otherNightReminder: "Either nod or shake your head.",
  },
  fool: {
    name: "Fool",
    ability: "The 1st time you die, you don't.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d9/Icon_fool.png",
    id: "fool",
  },
  fortuneteller: {
    name: "Fortune Teller",
    ability:
      "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/97/Icon_fortuneteller.png",
    id: "fortuneteller",
    firstNightReminder:
      "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the *RED HERRING*).",
    otherNightReminder:
      "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the *RED HERRING*).",
  },
  gambler: {
    name: "Gambler",
    ability:
      "Each night*, choose a player & guess their character: if you guess wrong, you die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/fd/Icon_gambler.png",
    id: "gambler",
    otherNightReminder:
      "The Gambler chooses a player & a character. :reminder:",
  },
  gangster: {
    name: "Gangster",
    ability:
      "Once per day, you may choose to kill an alive neighbor, if your other alive neighbor agrees.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a5/Icon_gangster.png",
    id: "gangster",
  },
  gardener: {
    name: "Gardener",
    ability: "The Storyteller assigns 1 or more players' characters.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/5c/Icon_gardener.png",
    id: "gardener",
  },
  general: {
    name: "General",
    ability:
      "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/99/Icon_general.png",
    id: "general",
    firstNightReminder: "Give a thumb signal.",
    otherNightReminder: "Give a thumb signal.",
  },
  gnome: {
    name: "Gnome",
    ability:
      "All players start knowing a player of your alignment. You may choose to kill anyone who nominates them.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e0/Icon_gnome.png",
    id: "gnome",
  },
  goblin: {
    name: "Goblin",
    ability:
      "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e2/Icon_goblin.png",
    id: "goblin",
  },
  godfather: {
    name: "Godfather",
    ability:
      "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d0/Icon_godfather.png",
    id: "godfather",
    firstNightReminder: "Show the character tokens of all in-play Outsiders.",
    otherNightReminder:
      "If an Outsider died today, the Godfather chooses a player. :reminder:",
  },
  golem: {
    name: "Golem",
    ability:
      "You may only nominate once per game. When you do, if the nominee is not the Demon, they die.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/2b/Icon_golem.png",
    id: "golem",
  },
  goon: {
    name: "Goon",
    ability:
      "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6f/Icon_goon.png",
    id: "goon",
  },
  gossip: {
    name: "Gossip",
    ability:
      "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/c7/Icon_gossip.png",
    id: "gossip",
    otherNightReminder:
      "If the Gossip is due to kill a player, they die. :reminder:",
  },
  grandmother: {
    name: "Grandmother",
    ability:
      "You start knowing a good player & their character. If the Demon kills them, you die too.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/26/Icon_grandmother.png",
    id: "grandmother",
    firstNightReminder:
      "Point to the grandchild player & show their character token.",
    otherNightReminder:
      "If the grandchild was killed by the Demon, the Grandmother dies too. :reminder:",
  },
  gunslinger: {
    name: "Gunslinger",
    ability:
      "Each day, after the 1st vote has been tallied, you may choose a player that voted: they die.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/1c/Icon_gunslinger.png",
    id: "gunslinger",
  },
  harlot: {
    name: "Harlot",
    ability:
      "Each night*, choose a living player: if they agree, you learn their character, but you both might die.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/60/Icon_harlot.png",
    id: "harlot",
    otherNightReminder:
      "The Harlot points at any living player. Then, put the Harlot to sleep. Wake the chosen player, show them the *THIS CHARACTER SELECTED YOU* token, then the Harlot token. That player either nods their head yes or shakes their head no. If they nodded their head yes, wake the Harlot and show them the chosen player's character token. Then, you may decide that both players die.",
  },
  harpy: {
    name: "Harpy",
    ability:
      "Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d3/Icon_harpy.png",
    id: "harpy",
    firstNightReminder:
      "The Harpy chooses two players. :reminder: :reminder: Put the Harpy to sleep. Wake the 1st target. Show the *THIS CHARACTER SELECTED YOU* token, the Harpy token, then point to the 2nd target.",
    otherNightReminder:
      "The Harpy chooses two players. :reminder: :reminder: Put the Harpy to sleep. Wake the 1st target. Show the *THIS CHARACTER SELECTED YOU* token, the Harpy token, then point to the 2nd target.",
  },
  hatter: {
    name: "Hatter",
    ability:
      "If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/44/Icon_hatter.png",
    id: "hatter",
    otherNightReminder:
      "If the Hatter died today or tonight, wake Minions and Demons, allow them to choose new characters.",
  },
  hellslibrarian: {
    name: "Hell's Librarian",
    ability:
      "Something bad might happen to whoever talks when the Storyteller has asked for silence.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/65/Icon_hellslibrarian.png",
    id: "hellslibrarian",
  },
  heretic: {
    name: "Heretic",
    ability: "Whoever wins, loses & whoever loses, wins, even if you are dead.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/4a/Icon_heretic.png",
    id: "heretic",
  },
  hermit: {
    name: "Hermit",
    ability: "You have all Outsider abilities. [-0 or -1 Outsider]",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/b4/Icon_hermit.png",
    id: "hermit",
  },
  highpriestess: {
    name: "High Priestess",
    ability:
      "Each night, learn which player the Storyteller believes you should talk to most.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/63/Icon_highpriestess.png",
    id: "highpriestess",
    firstNightReminder: "Point to a player.",
    otherNightReminder: "Point to a player.",
  },
  huntsman: {
    name: "Huntsman",
    ability:
      "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_huntsman.png",
    id: "huntsman",
    firstNightReminder:
      "The Huntsman might choose a player. :reminder: If that player was the Damsel: Put the Huntsman to sleep. Wake the Damsel and show them the *YOU ARE* info token and their new character token.",
    otherNightReminder:
      "The Huntsman might choose a player. :reminder: If that player was the Damsel: Put the Huntsman to sleep. Wake the Damsel and show them the *YOU ARE* info token and their new character token.",
  },
  imp: {
    name: "Imp",
    ability:
      "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/5c/Icon_imp.png",
    id: "imp",
    otherNightReminder:
      "The Imp chooses a player. :reminder: If the Imp chose themselves: Replace 1 alive Minion token with a spare Imp token. Put the old Imp to sleep. Wake the new Imp. Show the *YOU ARE* token, then show the Imp token.",
  },
  innkeeper: {
    name: "Innkeeper",
    ability:
      "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/0c/Icon_innkeeper.png",
    id: "innkeeper",
    otherNightReminder:
      "The Innkeeper chooses 2 players. :reminder: :reminder: :reminder:",
  },
  investigator: {
    name: "Investigator",
    ability: "You start knowing that 1 of 2 players is a particular Minion.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/ad/Icon_investigator.png",
    id: "investigator",
    firstNightReminder:
      "Show the Minion character token. Point to both the *MINION* and *WRONG* players.",
  },
  judge: {
    name: "Judge",
    ability:
      "Once per game, if another player nominated, you may choose to force the current execution to pass or fail.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/59/Icon_judge.png",
    id: "judge",
  },
  juggler: {
    name: "Juggler",
    ability:
      "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/4/42/Icon_juggler.png",
    id: "juggler",
    otherNightReminder: "Give a finger signal.",
  },
  kazali: {
    name: "Kazali",
    ability:
      "Each night*, choose a player: they die. [You choose which players are which Minions. -? to +? Outsiders]",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/3/3c/Icon_kazali.png",
    id: "kazali",
    firstNightReminder: "Wake the Kazali, allow them to choose Minions.",
    otherNightReminder: "The Kazali chooses a player. :reminder: ",
  },
  king: {
    name: "King",
    ability:
      "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows you are the King.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_king.png",
    id: "king",
    firstNightReminder:
      "Wake the Demon. Show the *THIS PLAYER IS* token and the King token, then point to the King.",
    otherNightReminder:
      "If the dead equal or outnumber the living, show the character token of an alive player.",
  },
  klutz: {
    name: "Klutz",
    ability:
      "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/bc/Icon_klutz.png",
    id: "klutz",
  },
  knight: {
    name: "Knight",
    ability: "You start knowing 2 players that are not the Demon.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/8e/Icon_knight.png",
    id: "knight",
    firstNightReminder: "Point to the two non-Demon players marked *KNOW*.",
  },
  legion: {
    name: "Legion",
    ability:
      "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/cb/Icon_legion.png",
    id: "legion",
    otherNightReminder: "A player might die. :reminder:",
  },
  leviathan: {
    name: "Leviathan",
    ability:
      "If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a7/Icon_leviathan.png",
    id: "leviathan",
    firstNightReminder:
      'Declare that "The Leviathan is in play." Mark the Leviathan with the *DAY 1* reminder. :reminder:',
    otherNightReminder:
      'Optionally, declare that "The Leviathan is in play." Replace the reminder token. :reminder:',
  },
  librarian: {
    name: "Librarian",
    ability:
      "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e0/Icon_librarian.png",
    id: "librarian",
    firstNightReminder:
      "Show the Outsider character token. Point to both the *OUTSIDER* and *WRONG* players.",
  },
  lilmonsta: {
    name: "Lil' Monsta",
    ability:
      "Each night, Minions choose who babysits Lil' Monsta & 'is the Demon'. Each night*, a player might die. [+1 Minion]",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/c3/Icon_lilmonsta.png",
    id: "lilmonsta",
    firstNightReminder:
      "Wake all Minions, allow them to choose a babysitter. :reminder:",
    otherNightReminder:
      "Wake all Minions, allow them to choose a babysitter. :reminder: A player might die. :reminder:",
  },
  lleech: {
    name: "Lleech",
    ability:
      "Each night*, choose a player: they die. You start by choosing a player: they are poisoned. You die if & only if they are dead.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/70/Icon_lleech.png",
    id: "lleech",
    firstNightReminder: "The Lleech chooses a player. :reminder:",
    otherNightReminder: "The Lleech chooses a player. :reminder:",
  },
  lordoftyphon: {
    name: "Lord of Typhon",
    ability:
      "Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? to +? Outsiders]",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/cf/Icon_lordoftyphon.png",
    id: "lordoftyphon",
    firstNightReminder:
      "Replace neighbors of the Lord of Typhon with Minions, wake them, tell them their new alignment and character, then do minion info.",
    otherNightReminder: "The Lord of Typhon chooses a player. :reminder:",
  },
  lunatic: {
    name: "Lunatic",
    ability:
      "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/64/Icon_lunatic.png",
    id: "lunatic",
    firstNightReminder:
      "If there are 7 or more players, wake the Lunatic: Show the *THESE ARE YOUR MINIONS* token. Point to any players. Show the *THESE CHARACTERS ARE NOT IN PLAY* token. Show 3 good character tokens. Put the Lunatic to sleep. Wake the Demon. Show the *YOU ARE* info token and the Demon token. Show the *THIS PLAYER IS* info token and the Lunatic token, then point to the Lunatic.",
    otherNightReminder:
      "Do whatever needs to be done to simulate the Demon acting. Put the Lunatic to sleep. Wake the Demon. Show the Lunatic token & point to them, then their target(s).",
  },
  lycanthrope: {
    name: "Lycanthrope",
    ability:
      "Each night*, choose an alive player. If good, they die & the Demon doesn't kill tonight. One good player registers as evil.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/92/Icon_lycanthrope.png",
    id: "lycanthrope",
    otherNightReminder: "The Lycanthrope chooses a player. :reminder:",
  },
  magician: {
    name: "Magician",
    ability:
      "The Demon thinks you are a Minion. Minions think you are a Demon.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/93/Icon_magician.png",
    id: "magician",
    firstNightReminder:
      "Include the Magician in the Minion and Demon Info steps.",
  },
  marionette: {
    name: "Marionette",
    ability:
      "You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/cf/Icon_marionette.png",
    id: "marionette",
    firstNightReminder:
      "Wake the Demon. Point to the player marked *IS THE MARIONETTE* and show the *THIS PLAYER IS* token and the Marionette character token.",
  },
  mastermind: {
    name: "Mastermind",
    ability:
      "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_mastermind.png",
    id: "mastermind",
  },
  mathematician: {
    name: "Mathematician",
    ability:
      "Each night, you learn how many players' abilities worked abnormally (since dawn) due to another character's ability.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/f1/Icon_mathematician.png",
    id: "mathematician",
    firstNightReminder: "Give a finger signal.",
    otherNightReminder: "Give a finger signal.",
  },
  matron: {
    name: "Matron",
    ability:
      "Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/21/Icon_matron.png",
    id: "matron",
  },
  mayor: {
    name: "Mayor",
    ability:
      "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_mayor.png",
    id: "mayor",
  },
  mezepheles: {
    name: "Mezepheles",
    ability:
      "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/f2/Icon_mezepheles.png",
    id: "mezepheles",
    firstNightReminder: "Show the written word.",
    otherNightReminder:
      "If a player is marked with the *TURNS EVIL* reminder, wake them. Show the *YOU ARE* info token and a thumbs down. The Mezepheles loses their ability. :reminder:",
  },
  minstrel: {
    name: "Minstrel",
    ability:
      "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/24/Icon_minstrel.png",
    id: "minstrel",
  },
  monk: {
    name: "Monk",
    ability:
      "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/7c/Icon_monk.png",
    id: "monk",
    otherNightReminder: "The Monk chooses a player. :reminder:",
  },
  moonchild: {
    name: "Moonchild",
    ability:
      "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_moonchild.png",
    id: "moonchild",
    otherNightReminder:
      "If the Moonchild is due to kill a good player, they die. :reminder:",
  },
  mutant: {
    name: "Mutant",
    ability: "If you are 'mad' about being an Outsider, you might be executed.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/2e/Icon_mutant.png",
    id: "mutant",
  },
  nightwatchman: {
    name: "Nightwatchman",
    ability:
      "Once per game, at night, choose a player: they learn you are the Nightwatchman.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/f0/Icon_nightwatchman.png",
    id: "nightwatchman",
    firstNightReminder:
      "The Nightwatchman might choose a player :reminder: Put the Nightwatchman to sleep. Wake the target and show the *THIS PLAYER IS* and Nightwatchman tokens and point to the Nightwatchman.",
    otherNightReminder:
      "The Nightwatchman might choose a player :reminder: Put the Nightwatchman to sleep. Wake the target and show the *THIS PLAYER IS* and Nightwatchman tokens and point to the Nightwatchman.",
  },
  noble: {
    name: "Noble",
    ability: "You start knowing 3 players, 1 and only 1 of which is evil.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/cc/Icon_noble.png",
    id: "noble",
    firstNightReminder: "Point to all three players marked *KNOW*.",
  },
  nodashii: {
    name: "No Dashii",
    ability:
      "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/eb/Icon_nodashii.png",
    id: "nodashii",
    otherNightReminder: "The No Dashii chooses a player. :reminder:",
  },
  ogre: {
    name: "Ogre",
    ability:
      "On your 1st night, choose a player (not yourself): you become their alignment (you don't know which) even if drunk or poisoned.”",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/25/Icon_ogre.png",
    id: "ogre",
    firstNightReminder: "The Ogre points to a player. :reminder:",
  },
  ojo: {
    name: "Ojo",
    ability:
      "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6f/Icon_ojo.png",
    id: "ojo",
    otherNightReminder: "The Ojo chooses a character. :reminder: ",
  },
  oracle: {
    name: "Oracle",
    ability: "Each night*, you learn how many dead players are evil.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/bb/Icon_oracle.png",
    id: "oracle",
    otherNightReminder: "Give a finger signal.",
  },
  organgrinder: {
    name: "Organ Grinder",
    ability:
      "All players keep their eyes closed when voting and the vote tally is secret. Each night, choose if you are drunk until dusk.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/61/Icon_organgrinder.png",
    id: "organgrinder",
    firstNightReminder:
      "The Organ Grinder either nods their head yes to be drunk, or shakes their head no to be sober. :reminder:",
    otherNightReminder:
      "The Organ Grinder either nods their head yes to be drunk, or shakes their head no to be sober. :reminder:",
  },
  pacifist: {
    name: "Pacifist",
    ability: "Executed good players might not die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/5d/Icon_pacifist.png",
    id: "pacifist",
  },
  philosopher: {
    name: "Philosopher",
    ability:
      "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/5d/Icon_philosopher.png",
    id: "philosopher",
    firstNightReminder:
      "The Philosopher might choose a character. If necessary, swap their character token. :reminder:",
    otherNightReminder:
      "The Philosopher might choose a character. If necessary, swap their character token. :reminder:",
  },
  pithag: {
    name: "Pit-Hag",
    ability:
      "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6b/Icon_pithag.png",
    id: "pithag",
    otherNightReminder:
      "The Pit-Hag chooses a player & a character. If they chose a character that is not in play: Put the Pit-Hag to sleep. Wake the target. Show the *YOU ARE* token & their new character token.",
  },
  pixie: {
    name: "Pixie",
    ability:
      "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_pixie.png",
    id: "pixie",
    firstNightReminder: "Show the Townsfolk character token marked *MAD*.",
  },
  plaguedoctor: {
    name: "Plague Doctor",
    ability: "When you die, the Storyteller gains a Minion ability.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/e2/Icon_plaguedoctor.png",
    id: "plaguedoctor",
    otherNightReminder:
      "If the Plague Doctor died, the Storyteller gained a Minion ability. If you haven’t done this yet, do so now.",
  },
  po: {
    name: "Po",
    ability:
      "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
    team: "demon",
    wiki_image: "https://wiki.bloodontheclocktower.com/images/b/b2/Icon_po.png",
    id: "po",
    otherNightReminder:
      "The Po may choose a player OR chooses 3 players if they chose no-one last night. :reminder: or :reminder: :reminder: :reminder:",
  },
  poisoner: {
    name: "Poisoner",
    ability:
      "Each night, choose a player: they are poisoned tonight and tomorrow day.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/b1/Icon_poisoner.png",
    id: "poisoner",
    firstNightReminder: "The Poisoner chooses a player. :reminder:",
    otherNightReminder: "The Poisoner chooses a player. :reminder:",
  },
  politician: {
    name: "Politician",
    ability:
      "If you were the player most responsible for your team losing, you change alignment & win, even if dead.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a3/Icon_politician.png",
    id: "politician",
  },
  poppygrower: {
    name: "Poppy Grower",
    ability:
      "Minions & Demons do not know each other. If you die, they learn who each other are that night.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/91/Icon_poppygrower.png",
    id: "poppygrower",
    firstNightReminder:
      "Do not do the Minion Info and Demon Info steps. Wake the Demon, show the *THESE CHARACTERS ARE NOT IN PLAY* info token and any three good character tokens that are not in play.",
    otherNightReminder:
      "If the Poppy Grower died today or tonight, wake the Minions, show the *THIS IS THE DEMON* info token and point to the Demon. Put them to sleep. Wake the Demon, show the *THESE ARE YOUR MINIONS* info token and point to the Minions. Put the Demon to sleep.",
  },
  preacher: {
    name: "Preacher",
    ability:
      "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/82/Icon_preacher.png",
    id: "preacher",
    firstNightReminder:
      "The Preacher chooses a player. :reminder: If they chose a Minion: Put the Preacher to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token and the Preacher token.",
    otherNightReminder:
      "The Preacher chooses a player. :reminder: If they chose a Minion: Put the Preacher to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token and the Preacher token.",
  },
  princess: {
    name: "Princess",
    ability:
      "On your 1st day, if you nominated & executed a player, the Demon doesn't kill tonight.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/3/36/Icon_princess.png",
    id: "princess",
    otherNightReminder:
      "If the Princess nominated the player who was executed today, the Demon wakes as normal, but no one dies to the Demon's ability.",
  },
  professor: {
    name: "Professor",
    ability:
      "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/65/Icon_professor.png",
    id: "professor",
    otherNightReminder:
      "The Professor might choose a dead player. :reminder: :reminder:",
  },
  psychopath: {
    name: "Psychopath",
    ability:
      "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a3/Icon_psychopath.png",
    id: "psychopath",
  },
  pukka: {
    name: "Pukka",
    ability:
      "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/f4/Icon_pukka.png",
    id: "pukka",
    firstNightReminder: "The Pukka chooses a player. :reminder:",
    otherNightReminder:
      "The Pukka chooses a player. :reminder: The previously poisoned player dies then becomes healthy. :reminder:",
  },
  puzzlemaster: {
    name: "Puzzlemaster",
    ability:
      "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/7a/Icon_puzzlemaster.png",
    id: "puzzlemaster",
  },
  ravenkeeper: {
    name: "Ravenkeeper",
    ability:
      "If you die at night, you are woken to choose a player: you learn their character.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/ef/Icon_ravenkeeper.png",
    id: "ravenkeeper",
    otherNightReminder:
      "If the Ravenkeeper died tonight, the Ravenkeeper chooses a player. Show that player's character token.",
  },
  recluse: {
    name: "Recluse",
    ability: "You might register as evil & as a Minion or Demon, even if dead.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/60/Icon_recluse.png",
    id: "recluse",
  },
  revolutionary: {
    name: "Revolutionary",
    ability:
      "2 neighboring players are known to be the same alignment. Once per game, 1 of them registers falsely.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/94/Icon_revolutionary.png",
    id: "revolutionary",
  },
  riot: {
    name: "Riot",
    ability:
      "On day 3, Minions become Riot & nominees die but nominate an alive player immediately. This must happen.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/2d/Icon_riot.png",
    id: "riot",
  },
  sage: {
    name: "Sage",
    ability: "If the Demon kills you, you learn that it is 1 of 2 players.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a0/Icon_sage.png",
    id: "sage",
    otherNightReminder:
      "If the Demon killed the Sage, wake the Sage and point to 2 players, 1 of which is the Demon.",
  },
  sailor: {
    name: "Sailor",
    ability:
      "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/16/Icon_sailor.png",
    id: "sailor",
    firstNightReminder: "The Sailor chooses a living player. :reminder:",
    otherNightReminder: "The Sailor chooses a living player. :reminder:",
  },
  saint: {
    name: "Saint",
    ability: "If you die by execution, your team loses.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/c9/Icon_saint.png",
    id: "saint",
  },
  savant: {
    name: "Savant",
    ability:
      "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_savant.png",
    id: "savant",
  },
  scapegoat: {
    name: "Scapegoat",
    ability:
      "If a player of your alignment is executed, you might be executed instead.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/3/3a/Icon_scapegoat.png",
    id: "scapegoat",
  },
  scarletwoman: {
    name: "Scarlet Woman",
    ability:
      "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count.)",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/13/Icon_scarletwoman.png",
    id: "scarletwoman",
    otherNightReminder:
      "If the Scarlet Woman became the Demon today, show them the *YOU ARE* token, then the Demon token.",
  },
  seamstress: {
    name: "Seamstress",
    ability:
      "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/53/Icon_seamstress.png",
    id: "seamstress",
    firstNightReminder:
      "The Seamstress might choose 2 players. Nod or shake your head. :reminder:",
    otherNightReminder:
      "The Seamstress might choose 2 players. Nod or shake your head. :reminder:",
  },
  sentinel: {
    name: "Sentinel",
    ability: "There might be 1 extra or 1 fewer Outsider in play.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d4/Icon_sentinel.png",
    id: "sentinel",
  },
  shabaloth: {
    name: "Shabaloth",
    ability:
      "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/1f/Icon_shabaloth.png",
    id: "shabaloth",
    otherNightReminder:
      "A previously chosen player might be resurrected. :reminder: The Shabaloth chooses 2 players. :reminder: :reminder:",
  },
  shugenja: {
    name: "Shugenja",
    ability:
      "You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/11/Icon_shugenja.png",
    id: "shugenja",
    firstNightReminder: "Point clockwise or anticlockwise around the circle.",
  },
  slayer: {
    name: "Slayer",
    ability:
      "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d3/Icon_slayer.png",
    id: "slayer",
  },
  snakecharmer: {
    name: "Snake Charmer",
    ability:
      "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/08/Icon_snakecharmer.png",
    id: "snakecharmer",
    firstNightReminder:
      "The Snake Charmer chooses a player. If they chose the Demon: Show the *YOU ARE* & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep. Wake the old Demon. Show the *YOU ARE* and Snake Charmer tokens & give a thumbs up. :reminder:",
    otherNightReminder:
      "The Snake Charmer chooses a player. If they chose the Demon: Show the *YOU ARE* & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep. Wake the old Demon. Show the *YOU ARE* and Snake Charmer tokens & give a thumbs up. :reminder:",
  },
  snitch: {
    name: "Snitch",
    ability: "Each Minion gets 3 bluffs.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/c1/Icon_snitch.png",
    id: "snitch",
    firstNightReminder:
      "Wake each Minion. Show the *THESE CHARACTERS ARE NOT IN PLAY* token and three not-in-play character tokens. Put each Minion to sleep.",
  },
  soldier: {
    name: "Soldier",
    ability: "You are safe from the Demon.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/c/c3/Icon_soldier.png",
    id: "soldier",
  },
  spiritofivory: {
    name: "Spirit of Ivory",
    ability: "There can't be more than 1 extra evil player.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/96/Icon_spiritofivory.png",
    id: "spiritofivory",
  },
  spy: {
    name: "Spy",
    ability:
      "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/5/54/Icon_spy.png",
    id: "spy",
    firstNightReminder: "Show the Grimoire for as long as the Spy needs.",
    otherNightReminder: "Show the Grimoire for as long as the Spy needs.",
  },
  steward: {
    name: "Steward",
    ability: "You start knowing 1 good player.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/f/fe/Icon_steward.png",
    id: "steward",
    firstNightReminder: "Point to the good player marked *KNOW*.",
  },
  stormcatcher: {
    name: "Storm Catcher",
    ability:
      "Name a good character. If in play, they can only die by execution, but evil players learn which player it is.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/08/Icon_stormcatcher.png",
    id: "stormcatcher",
    firstNightReminder:
      "At the start of the night, announce which character is stormcaught. If that character is in play, mark that player as *STORMCAUGHT*. :reminder: Wake each evil player and show them the character token, then the marked player.  If not in play, wake each evil player, show them the *THESE CHARACTERS ARE NOT IN PLAY* token and the relevant character token.",
  },
  summoner: {
    name: "Summoner",
    ability:
      "You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_summoner.png",
    id: "summoner",
    firstNightReminder:
      "Show the *THESE CHARACTERS ARE NOT IN PLAY* token. Show 3 not-in-play good character tokens.",
    otherNightReminder:
      "Change the Summoner reminder token to the relevant night. If it is night 3, the Summoner chooses a player and a Demon. Put the Summoner to sleep. Wake the chosen player. Show the *YOU ARE* token, a thumbs down and the chosen Demon token.",
  },
  sweetheart: {
    name: "Sweetheart",
    ability: "When you die, 1 player is drunk from now on.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6a/Icon_sweetheart.png",
    id: "sweetheart",
    otherNightReminder:
      "If the Sweetheart died, a player became drunk immediately. If you haven't done this yet, do so now. :reminder:",
  },
  tealady: {
    name: "Tea Lady",
    ability: "If both your alive neighbors are good, they can't die.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/16/Icon_tealady.png",
    id: "tealady",
  },
  thief: {
    name: "Thief",
    ability:
      "Each night, choose a player (not yourself): their vote counts negatively tomorrow.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/77/Icon_thief.png",
    id: "thief",
    firstNightReminder: "The Thief chooses a player. :reminder:",
    otherNightReminder: "The Thief chooses a player. :reminder:",
  },
  tinker: {
    name: "Tinker",
    ability: "You might die at any time.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/98/Icon_tinker.png",
    id: "tinker",
    otherNightReminder: "The Tinker might die. :reminder:",
  },
  tor: {
    id: "tor",
    firstNightReminder: "",
    otherNightReminder:
      "If a player died tonight, show the *YOU ARE* info token, their character token, & a thumbs up or thumbs down.",
    name: "Tor",
    team: "fabled",
    ability:
      "Players don't know their character or alignment. They learn them when they die.",
  },
  towncrier: {
    name: "Town Crier",
    ability: "Each night*, you learn if a Minion nominated today.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/e/ef/Icon_towncrier.png",
    id: "towncrier",
    otherNightReminder: "Either nod or shake your head.",
  },
  toymaker: {
    name: "Toymaker",
    ability:
      "The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info.",
    team: "fabled",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/2/27/Icon_toymaker.png",
    id: "toymaker",
    firstNightReminder:
      "Resolve the Minion Info and Demon Info steps even though there are fewer than 7 players.",
    otherNightReminder:
      "If it is a night when a Demon attack could end the game, and the Demon is marked *FINAL NIGHT: NO ATTACK*, then the Demon does not act tonight. (Do not wake them.)",
  },
  undertaker: {
    name: "Undertaker",
    ability: "Each night*, you learn which character died by execution today.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/05/Icon_undertaker.png",
    id: "undertaker",
    otherNightReminder:
      "If a player was executed today, show their character token.",
  },
  vigormortis: {
    name: "Vigormortis",
    ability:
      "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_vigormortis.png",
    id: "vigormortis",
    otherNightReminder:
      "The Vigormortis chooses a player. :reminder: If that player is a Minion, poison a neighboring Townsfolk. :reminder: :reminder:",
  },
  villageidiot: {
    name: "Village Idiot",
    ability:
      "Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/da/Icon_villageidiot.png",
    id: "villageidiot",
    firstNightReminder:
      "Choose a Village Idiot to be drunk. Wake the Village Idiots one at a time, they choose a player, show either good or evil thumbs according to the alignment of that player.",
    otherNightReminder:
      "Wake the Village Idiots one at a time, they choose a player, show either good or evil thumbs according to the alignment of that player.",
  },
  virgin: {
    name: "Virgin",
    ability:
      "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/d/d3/Icon_virgin.png",
    id: "virgin",
  },
  vizier: {
    name: "Vizier",
    ability:
      "All players know you are the Vizier. You cannot die during the day. If good voted, you may choose to execute immediately.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/a/a4/Icon_vizier.png",
    id: "vizier",
    firstNightReminder: "Announce the Vizier player to the group.",
  },
  vortox: {
    name: "Vortox",
    ability:
      "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/89/Icon_vortox.png",
    id: "vortox",
    otherNightReminder: "The Vortox chooses a player. :reminder:",
  },
  voudon: {
    name: "Voudon",
    ability:
      "Only you & the dead can vote. They don't need a vote token to do so. A 50% majority isn't required.",
    team: "traveller",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/6/6d/Icon_voudon.png",
    id: "voudon",
  },
  washerwoman: {
    name: "Washerwoman",
    ability: "You start knowing that 1 of 2 players is a particular Townsfolk.",
    team: "townsfolk",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/85/Icon_washerwoman.png",
    id: "washerwoman",
    firstNightReminder:
      "Show the Townsfolk character token. Point to both the *TOWNSFOLK* and *WRONG* players.",
  },
  widow: {
    name: "Widow",
    ability:
      "On your 1st night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/9/99/Icon_widow.png",
    id: "widow",
    firstNightReminder:
      "Show the Grimoire for as long as the Widow needs. The Widow chooses a player. :reminder:",
  },
  witch: {
    name: "Witch",
    ability:
      "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/7/7b/Icon_witch.png",
    id: "witch",
    firstNightReminder: "The Witch chooses a player. :reminder:",
    otherNightReminder: "The Witch chooses a player. :reminder:",
  },
  wizard: {
    name: "Wizard",
    ability:
      "Once per game, choose to make a wish. If granted, it might have a price & leave a clue as to its nature.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/b/b5/Icon_wizard.png",
    id: "wizard",
    firstNightReminder: "Run the Wizard's ability, if applicable.",
    otherNightReminder: "Run the Wizard's ability, if applicable.",
  },
  wraith: {
    name: "Wraith",
    ability:
      "You may choose to open your eyes at night. You wake when other evil players do.",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/8/8f/Icon_wraith.png",
    id: "wraith",
    firstNightReminder: "Wake the Wraith whenever other evil players wake.",
    otherNightReminder: "Wake the Wraith whenever other evil players wake.",
  },
  xaan: {
    name: "Xaan",
    ability: "On night X, all Townsfolk are poisoned until dusk. [X Outsiders]",
    team: "minion",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/0c/Icon_xaan.png",
    id: "xaan",
    firstNightReminder:
      "Mark the Xaan with the *NIGHT 1* reminder. If X is 1, mark the Xaan with the *X* reminder token. :reminder: :reminder:",
    otherNightReminder:
      "Change the Xaan reminder token to the relevant night. If it is night X, mark the Xaan with the *X* reminder token. :reminder: :reminder:",
  },
  yaggababble: {
    name: "Yaggababble",
    ability:
      "You start knowing a secret phrase. For each time you said it publicly today, a player might die.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/0/08/Icon_yaggababble.png",
    id: "yaggababble",
    firstNightReminder:
      "Choose a secret phrase. Wake the Yaggababble and let them know their secret phrase.",
    otherNightReminder:
      "For each time the Yaggababble said the phrase today, you may choose a player. They die. :reminder:",
  },
  zealot: {
    name: "Zealot",
    ability:
      "If there are 5 or more players alive, you must vote for every nomination.",
    team: "outsider",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/16/Icon_zealot.png",
    id: "zealot",
  },
  zombuul: {
    name: "Zombuul",
    ability:
      "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
    team: "demon",
    wiki_image:
      "https://wiki.bloodontheclocktower.com/images/1/15/Icon_zombuul.png",
    id: "zombuul",
    otherNightReminder:
      "If no one died today, the Zombuul chooses a player. :reminder:",
  },
};
