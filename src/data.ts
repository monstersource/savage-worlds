const dice = ["", "d4", "d6", "d8", "d10", "d12", "d12+1", "d12+2"]

const core = [
    "athletics",
    "common knowledge",
    "notice",
    "persuasion",
    "stealth",
]

let traits = {
    agility: {
        value: 1,
        min: 1,
        skills: [
            "athletics",
            "boating",
            "driving",
            "fighting",
            "piloting",
            "riding",
            "shooting",
            "stealth",
            "thievery",
        ],
    },
    smarts: {
        value: 1,
        min: 1,
        skills: [
            "academics",
            "battle",
            "common knowledge",
            "electronics",
            "gambling",
            "hacking",
            "healing",
            "language",
            "notice",
            "occult",
            "psionics",
            "repair",
            "research",
            "science",
            "spellcasting",
            "survival",
            "taunt",
            "weird science",
        ],
    },
    spirit: {
        value: 1,
        min: 1,
        skills: ["faith", "focus", "intimidation", "performance", "persuasion"],
    },
    strength: {
        value: 1,
        min: 1,
        skills: [],
    },
    vigor: {
        value: 1,
        min: 1,
        skills: [],
    },
}

for (let attribute in traits) {
    let skills = traits[attribute].skills
    let replace = {}
    for (let skill in skills) {
        skill = skills[skill] // this is dumb
        let isCore = core.includes(skill) | 0
        replace[skill] = {
            value: isCore,
            min: isCore,
        }
    }
    traits[attribute].skills = replace
}

console.log(traits)
