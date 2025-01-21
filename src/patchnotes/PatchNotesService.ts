import type { ChangeCategory } from "./Change";

function PatchNotes(): ChangeCategory[] {
  var result: ChangeCategory[];
  result = [
    {
      title: "General",
      typeName: "general",
      changes: [],
      innerCategories: [
        { title: "", typeName: "", changes: [] },
        {
          title: "Community",
          typeName: "",
          changes: [
            {
              text: "Players of different factions can now group together",
              explanation:
                "To allow people to play the faction they love, but for dungeons and raids still be able to play",
            },
            {
              text: "Guild petitions now only need 2 signatures",
              explanation: "",
            },
            {
              text: "The Kaluak Fishing Derby now lasts for 3 hours instead of 1",
              explanation: "",
            },
          ],
        },
        {
          title: "Dungeons and Raids",
          typeName: "",
          changes: [
            {
              text: "Dungeon and Raid groups which fall far under the player capacity of the instance will receive an aura to boost their power",
              explanation:
                "If you are under 80% capacity, you get a buff to make your total damage output roughly equal to what 80% capacity would be",
            },
          ],
        },
        {
          title: "Professions",
          typeName: "professions",
          changes: [
            {
              text: "Expert rank profression now learnable at 15 down from 20",
              explanation: "",
            },
            {
              text: "Artisan profession ranks now learnable at level 20 down from 35",
              explanation: "",
            },
            {
              text: "Master profession ranks now learnable at level 30 down from 50",
              explanation: "",
            },
            {
              text: "Profession skillups now grant 3 points, up from 1",
              explanation: "",
            },
            {
              text: "Milling and Prospecting can now grant skill points (like disenchanting does)",
              explanation: "",
            },
            {
              text: "Flask of Stoneblood now increases Stamina by 110 instead of Health by 1300",
              explanation: "",
            },
            {
              text: "Mixology now causes Flask of Stoneblood to give 170.5 stamina instead of 1950 health",
              explanation: "",
            },
            {
              text: "Hyperspeed Accelerators now only grant 200 haste down from 340",
              explanation:
                "Small nerf to engineering to make other professions more appealing",
            },
            {
              text: "Darkglow embroidery now restores 5% total mana instead of 550 flat mana",
              explanation:
                "To make this scale with gear to make it worth considering as a mana sustain option",
            },
            {
              text: "Lifeblood rank (6/5) now restore (10%/5%) maximum resource over their duration",
              explanation: "",
            },
          ],
        },
        {
          title: "Drop Rates",
          typeName: "droprates",
          changes: [
            { text: "Money drop rate increased by 10%", explanation: "" },
            {
              text: "Drop rate of Uncommon (green) items increased by 20%",
              explanation: "",
            },
            {
              text: "Drop rate of Rare (blue) items increased by 50%",
              explanation: "",
            },
            {
              text: "Drop rate of Epic (purple) items increased by 100%",
              explanation: "",
            },
            { text: "Quest gold rewards increased by 50%", explanation: "" },
            {
              text: "Experience to gold conversion for completing quests at max level increased by 10%",
              explanation: "",
            },
          ],
        },
        {
          title: "Experience",
          typeName: "experience",
          changes: [
            {
              text: "Experience required to level between 70 and 80 reduced by 40%",
              explanation: "",
            },
            { text: "Experience from kills increased by 75%", explanation: "" },
            {
              text: "Experience from quests increased by 25%",
              explanation: "",
            },
            {
              text: "Experience from dungeon finder increased by 100%",
              explanation: "",
            },
            {
              text: "Experience from exploration increased by 100%",
              explanation: "",
            },
            {
              text: "Experience pets receive increased by 25%",
              explanation: "",
            },
          ],
        },
        {
          title: "Misc",
          typeName: "",
          changes: [
            {
              text: "DOT 'munching' is fixed",
              explanation:
                "Deep Wounds, Ignite, Piercing Shots etc. will work properly, resulting in more damage (was also fixed in classic wrath)",
            },
            {
              text: "Lord Kazzak once again terrorizes the Blasted Lands",
              explanation: "",
            },
            {
              text: "Kirin Tor signets are now 2000 gold instead of 8500",
              explanation: "2000 gold is still cost prohibiton but within plausibility for a small realm",
            },
            {
              text: "Dual spec now costs 250 gold down from 1000 gold",
              explanation: "",
            },
            {
              text: "Cold weather flying is now available at level 68 down from 80 (still requires access to Dalaran)",
              explanation: "",
            },
            {
              text: "Booty Bay Arena grandmaster now only takes 2 trinkets, down from 12",
              explanation: "",
            },
            {
              text: "Reputation gains are doubled",
              explanation: "",
            },
          ],
        },
      ],
    },
    {
      title: "Death Knight",
      typeName: "deathknight",
      innerCategories: [
        {
          title: "General",
          typeName: "deathknight",
          changes: [
            {
              text: "Rune Strike now deals 200% weapon damage, up from 150%",
              explanation:
                "Increasing the damage and threat of blood tanks in a way that dps death knights cannot take advantage of. It feels like a odd mismatch for a tank to be wielding a two handed dps weapon but not deal a lot of damage",
            },
            {
              text: "Rune Strike now applies Sunder Armor to the target",
              explanation:
                "Sunder armor is one of the most important debuffs for physical damage players, but options to provide it are limited and outside of protection warriors come with heavy downsides",
            },
            {
              text: "Death Strike (Rank 5) now deals 85% weapon damage, up from 75%",
              explanation:
                "Primarily a blood tank buff to encourage a death rune-less playstyle that casts both death strike and heart strike, as opposed to being primarily heart strike based",
            },
            {
              text: "Anticipation has switched places with Black Ice in the talent tree",
              explanation: "This makes frost the tank synergy tree and unholy the dps synergy tree",
            },
          ],
        },
        {
          title: "Blood",
          typeName: "deathknight",
          changes: [
            {
              text: "Subversion now also affects Rune Strike",
              explanation: "Another buff to blood tank dps and threat",
            },
            {
              text: "Might of Mograine now also affects Rune Strike",
              explanation: "Shifting more power into rune strike",
            },
            {
              text: "Might of Mograine is now a 1 point talent that increases critical strike damage by 60%, up from 15/30/45%",
              explanation:
                "Big buff to blood dps as well as blood tank. The talent point reduction is primarily to allow blood tanks to pick this up, as well as free up some points for blood dps.",
            },
          ],
        },
        {
          title: "Frost",
          typeName: "deathknight",
          changes: [
            {
              text: "Icy Talons is now a tier 2 talent, up from a tier 3 talent",
              explanation: "To give frost dps a way to progress points in level 2 with the removal of Black Ice from the tier",
            },
            {
              text: "Improved Icy Talons is now a tier 5 talent, up from a tier 6 talent",
              explanation: "You can now pick this talent up as other specs if you forsake the final point of your tree",
            },
          ],
        },
        {
          title: "Unholy",
          typeName: "deathknight",
          changes: [],
        },
      ],
      changes: [],
    },
    {
      title: "Druid",
      typeName: "druid",
      innerCategories: [
        { title: "General", typeName: "druid", changes: [] },
        {
          title: "Balance",
          typeName: "druid",
          changes: [
            {
              text: "Balance of Power now grants 3/6% hit up from 2/4%",
              explanation: "",
            },
            {
              text: "Lunar Guidance now increases spell power by 10/20% of intellect, up from 4/8/12%",
              explanation: "",
            },
            {
              text: "Eclipse is now a 1 point talent that gives the same effect as the old rank 3",
              explanation: "",
            },
          ],
        },
        {
          title: "Feral",
          typeName: "druid",
          changes: [
            {
              text: "Infected Wounds is now a 1 point talent that gives the effect of the old rank 3",
              explanation: "",
            },
          ],
        },
        { title: "Restoration", typeName: "druid", changes: [] },
      ],
      changes: [],
    },
    {
      title: "Hunter",
      typeName: "hunter",
      innerCategories: [
        { title: "General", typeName: "hunter", changes: [
          {
          text: "New Spell: Explosive Arrow. Launches an explosive trap at the target location",
          explanation: "",
          },] },
        {
          title: "Beast Mastery",
          typeName: "hunter",
          changes: [
            {
              text: "Ferocious Inspiration now increases the damage of Arcane Shot and Steady Shot by 6/12/18% up from 3/6/9%",
              explanation: "",
            },
          ],
        },
        {
          title: "Marksmanship",
          typeName: "hunter",
          changes: [],
        },
        { title: "Survival", typeName: "hunter", changes: [] },
      ],
      changes: [],
    },
    {
      title: "Mage",
      typeName: "mage",
      innerCategories: [
        { title: "General", typeName: "mage", changes: [] },
        {
          title: "Arcane",
          typeName: "mage",
          changes: [
            {
              text: "Arcane mind now increases Intellect by 4/8/12/16/20% up from 3/6/9/12/15%",
              explanation: "",
            },
            {
              text: "Mind Mastery now increases spell power by 4/8/12/16/20% of intellect up from 3/6/9/12/15%",
              explanation: "",
            },
          ],
        },
        {
          title: "Fire",
          typeName: "mage",
          changes: [],
        },
        {
          title: "Frost",
          typeName: "mage",
          changes: [
            {
              text: "Empowered Frostbolt now increases Fostbolt spell power by 10/20% up from 5/10%",
              explanation: "",
            },
            {
              text: "Empowered Frostbolt also increases Fostfire Bolt spell power by 10/20%",
              explanation: "",
            },
            {
              text: "Brain Freeze is now a 7/14/21% proc chance up from 5/10/15%",
              explanation: "",
            },
            {
              text: "Fingers of Frost is now a 10/20% proc chance up from 7/15%",
              explanation: "",
            },
          ],
        },
      ],
      changes: [],
    },
    {
      title: "Paladin",
      typeName: "paladin",
      innerCategories: [
        {
          title: "General",
          typeName: "paladin",
          changes: [
            {
              text: "Divinity is now a tier 1 Holy talent",
              explanation: "",
            },
            {
              text: "Blessed Hands has switched places with Guardian's Favor",
              explanation: "",
            },
            {
              text: "Purifying Power has switched places with Stoicism",
              explanation: "",
            },
            {
              text: "Improved Seals is now a tier 1 Retribution talent",
              explanation: "",
            },
            {
              text: "Benediction is now a tier 1 Protection talent",
              explanation: "",
            },
          ],
        },
        {
          title: "Holy",
          typeName: "paladin",
          changes: [
            {
              text: "Enlightened Judgements now increases hit chance by 3/6% up from 2/4%",
              explanation: "",
            },
          ],
        },
        {
          title: "Protection",
          typeName: "paladin",
          changes: [],
        },
        {
          title: "Retribution",
          typeName: "paladin",
          changes: [
            {
              text: "Vindication is now a 1 point talent that gives the effect of the old rank 2",
              explanation: "",
            },
            {
              text: "Fanaticism no longer requires Repentence",
              explanation: "",
            },
            {
              text: "Sanctified Wrath is now a 1 point talent that gives the effect of the old rank 2",
              explanation: "",
            },
            { text: "Divine Storm now deals Holy damage", explanation: "" },
          ],
        },
      ],
      changes: [],
    },
    {
      title: "Priest",
      typeName: "priest",
      innerCategories: [
        {
          title: "General",
          typeName: "priest",
          changes: [
            {
              text: "Glyph of Shadow Word Pain now gives total mana instead of base mana",
              explanation: "To make this an interesting mana regeneration choice",
            },
          ],
        },
        {
          title: "Discipline",
          typeName: "priest",
          changes: [],
        },
        {
          title: "Holy",
          typeName: "priest",
          changes: [
            {
              text: "Searing Light now increases damage by 10/20% instead of 5/10%",
              explanation: "",
            },
            {
              text: "Spirit of Redemption now increases spirit by 15% up from 5%",
              explanation: "",
            },
          ],
        },
        { title: "Shadow", typeName: "priest", changes: [
          {text:"Shadowform now increases damage done and decreases damage taken by 20% up from 15%", explanation:""}] },
      ],
      changes: [],
    },
    {
      title: "Rogue",
      typeName: "rogue",
      innerCategories: [
        { title: "General", typeName: "rogue", changes: [] },
        {
          title: "Assassination",
          typeName: "rogue",
          changes: [],
        },
        {
          title: "Combat",
          typeName: "rogue",
          changes: [],
        },
        {
          title: "Sublety",
          typeName: "rogue",
          changes: [
            {
              text: "New Talent - Improved Hemorrhage:  Now gain 2 energy when a charge of hemorrhage is expended",
              explanation: "",
            },
            { text: "Hemorrhage max rank now has 40 charges", explanation: "" },
          ],
        },
      ],
      changes: [],
    },
    {
      title: "Shaman",
      typeName: "shaman",
      innerCategories: [
        {
          title: "General",
          typeName: "shaman",
          changes: [
            {
              text: "Max rank Lightning Bolt base damage increased by 10%, spell power scaling increased by 5%",
              explanation: "",
            },
          ],
        },
        {
          title: "Elemental",
          typeName: "shaman",
          changes: [],
        },
        {
          title: "Enhancement",
          typeName: "shaman",
          changes: [],
        },
        { title: "Restoration", typeName: "shaman", changes: [] },
      ],
      changes: [],
    },
    {
      title: "Warlock",
      typeName: "warlock",
      innerCategories: [
        { title: "General", typeName: "warlock", changes: [] },
        {
          title: "Affliction",
          typeName: "warlock",
          changes: [],
        },
        {
          title: "Demonology",
          typeName: "warlock",
          changes: [],
        },
        { title: "Destruction", typeName: "warlock", changes: [{
          text: "Empowered Imp now also increases your imp's critical strike chance by 5/10/15%",
          explanation: "",
        }] },
      ],
      changes: [],
    },
    {
      title: "Warrior",
      typeName: "warrior",
      innerCategories: [
        {
          title: "General",
          typeName: "warrior",
          changes: [
            {
              text: "Victory Rush now heals for 5% max health",
              explanation: "",
            },
          ],
        },
        {
          title: "Arms",
          typeName: "warrior",
          changes: [
            {
              text: "Blood Frenzy now increases melee haste by 10/20% up from 5/10%",
              explanation: "",
            },
          ],
        },
        {
          title: "Fury",
          typeName: "warrior",
          changes: 
          [
            {
            text: "Improved Demoralizing Shout and Commanding Presense are now combined into the same talent in the same location as Improved Demoralizing Shout",
            explanation: "",
            },
            {
              text: "Improved Cleave is now a 1 point talent that increases damage done by Cleave by 10%, and increases bonus damage of Cleave by an additional 40%",
              explanation: "",
              },
          ],
        },
        {
          title: "Protection",
          typeName: "warrior",
          changes: [
            {
              text: "Vitality now increases Stamina by 4/8/12% up from 3/6/9%",
              explanation: "",
            },
            {
              text: "Shield Block redesign: Now gives 75% block chance and 100% block rating increase for 2 seconds, or your first block/dodge/parry. 10 second cooldown. Being procced will reduce remaining cooldown by 4 seconds",
              explanation: "",
            },
            {
              text: "Shield Mastery talent now reduces Shield Block cooldown by 2/4 seconds",
              explanation: "",
            },
          ],
        },
      ],
      changes: [],
    },
  ];
  return result;
}

export default function GetPatchNotes(): ChangeCategory[] {
  var result = PatchNotes();
  return result;
}
