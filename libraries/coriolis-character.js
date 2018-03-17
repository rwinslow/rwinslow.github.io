var upbringings = {
    'Plebian': {
        'attribute points': 15,
        'skill points': 8,
        'reputation': 2,
        'birr': 500,
    },
    'Stationary': {
        'attribute points': 14,
        'skill points': 10,
        'reputation': 4,
        'birr': 1000,
    },
    'Privileged': {
        'attribute points': 13,
        'skill points': 12,
        'reputation': 6,
        'birr': 5000,
    }
};

var icons = [
    'The Lady of Tears',
    'The Dancer',
    'The Gambler',
    'The Merchant',
    'The Deckhand',
    'The Traveler',
    'The Messenger',
    'The Judge',
    'The Faceless',
]

var concepts = {
    'Artist': {
        'subconcepts': [
            {
                'subconcept': 'Courtesan',
                'skills': ['Manipulation', 'Culture', 'Dexterity', 'Observation']
            },
            {
                'subconcept': 'Musician',
                'skills': ['Manipulation', 'Culture', 'Infiltration', 'Observation']
            },
            {
                'subconcept': 'Poet',
                'skills': ['Manipulation', 'Culture', 'Dexterity', 'Infiltration']
            }
        ],
        'attribute': 'Empathy',
        'reputation': 1,
        'face': ['Flawless makeup','bedroom eyes','black curls','animate tattoo'],
        'clothing': ['Silk burra', 'shining dress', 'embroidered djellaba', 'swirling skirts'],
        'talents': ['Beautiful (BIO)', 'Defensive', 'Seductive'],
        'problems': [
            'You get very jealous when others succeed. It should be your turn now.',
            'You are insanely stubborn and never give up despite negative consequences.',
            'A faction you have somehow angered is out to get you.'
        ],
        'gear': [
            ['Hand fan','Tabula'],
            ['Opor','Environment scanner'],
            ['Exquisite clothing','Musical instrument'],
            ['Beautiful (BIO)','Rare collection of poems'],
            ['The memoirs of Mazelman', 'Standing reservation at Mazelman Alkamaar\'s'],
        ]
    },
    'Data Spider': {
        'subconcepts': [
            {
                'subconcept': 'Analyst',
                'skills': ['Data Djinn','Culture','Manipulation','Science']
            },
            {
                'subconcept': 'Correspondent',
                'skills': ['Culture','Manipulation','Infiltration','Observation']
            },
            {
                'subconcept': 'Data Djinn',
                'skills': ['Data Djinn', 'Manipulation', 'Observation','Science']
            }
        ],
        'attribute': 'Wits',
        'reputation': 0,
        'face': ['Flawless makeup', 'Curious eyes', 'Smirking face', 'Wrinkled forehead'],
        'clothing': ['Embroidered vest', 'Dark corporate caftan', 'Worn gallabeya', 'Skullcap'],
        'talents': ['Faction Standing', 'Judge of Character', 'Third Eye'],
        'problems': [
            'You are a compulsive thrill seeker. If you see the chance to do something foolhardy, nothing can stop you.',
            'You have sworn an oath never to rest until you have apprehended the nemesis of your friend or your family.',
            'Someone knows who you are and who you work for. Unless you pay up, the news will be spread.'
        ],
        'gear': [
            ['Communicator (IV)', 'Personal holograph'],
            ['Proximity sensor', 'Computer'],
            ['Vulcan cricket', 'Stun gun'],
            ['Tabula', 'Transactor with 1,000 birr'],
            ['Opor', 'Arrash'],
        ]
    },
    'Fugitive': {
        'subconcepts': [
            {
                'subconcept': 'Criminal',
                'skills': ['Force','Melee Combat','Dexterity','Infiltration']
            },
            {
                'subconcept': 'Mystic',
                'skills': ['Manipulation','Mystic Powers','Dexterity','Infiltration']
            },
            {
                'subconcept': 'Revolutionary',
                'skills': ['Ranged Combat','Dexterity','Observation', 'Survival']
            }
        ],
        'attribute': 'Empathy',
        'reputation': -2,
        'face': ['Blank stare','facial tattoos','lip ring','shaved head'],
        'clothing': ['Brown coat','jacket with many pockets','blue patterned gallabeya', 'turban'],
        'talents': ['Intimidating', 'Mystical Power', 'Nine Lives'],
        'problems': [
            'A group of zealous Icon believers are on your tail. They know about your powers.',
            'You suffer from terrible agoraphobia that could set in at any moment.',
            'You have betrayed a friend who has sworn to get back at you.'
        ],
        'gear': [
           ['Anonymous', 'Tag with 500 birr clothing'],
           ['Communicator (II)', 'Protective clothing'],
           ['Vulcan carbine', 'Dura sword'],
           ['Thermostatic suit', 'Exoshell'],
           ['Transactor with fake identity', 'Mask ']
        ]
    },
    'Negotiator': {
        'subconcepts': [
            {
                'subconcept': 'Agitator',
                'skills': ['Data Djinn','Force','Manipulation','Culture']
            },
            {
                'subconcept': 'Diplomat',
                'skills': ['Command', 'Culture', 'Manipulation', 'Melee Combat']
            },
            {
                'subconcept': 'Peddler',
                'skills': ['Culture','Manipulation','Observation','Pilot']
            }
        ],
        'attribute': 'Empathy',
        'reputation': 1,
        'face': ['Red face','grave looking','stubble','too much makeup'],
        'clothing': ['Red djellaba with gold embroidery', 'dress uniform', 'black caftan', 'head wrap with a gem'],
        'talents': ['Faction Standing', 'Language Modulator (CYB)', 'Lie Detector (CYB)'],
        'problems': [
            'You have a protégé that you need to take care of. It could be a relative or a friend you owe a debt of gratitude.',
            'You owe money to the Syndicate. They want it back. Now.',
            'You are greedy, and you just have to scam people if you get the chance, even your friends.'
        ],
        'gear': [
            ['Tabula', 'language modulator (CYB)'],
            ['Com link V', 'voice amplifier'],
            ['Exquisite clothing', 'kambra (D6 doses)'],
            ['Lie detector (CYB)', 'language unit'],
            ['Vulcan cricket', 'mercurium dagger']
        ]
    },
    'Operative': {
        'subconcepts': [
            {
                'subconcept': 'Assassin',
                'skills': ['Infiltration','Dexterity','Melee Combat','Ranged Combat']
            },
            {
                'subconcept': 'Guardsman/-woman',
                'skills': ['Force', 'Melee Combat','Ranged Combat', 'Observation']
            },
            {
                'subconcept': 'Spy',
                'skills': ['Data Djinn','Manipulation','Infiltration','Ranged Combat']
            }
        ],
        'attribute': 'Agility',
        'reputation': 0,
        'face': ['Scarred face','blank stare','cold eyes','crew cut'],
        'clothing': ['Silk burra', 'shining dress', 'embroidered djellaba', 'swirling skirts'],
        'talents': ['Executioner', 'Intimidating', 'Licensed'],
        'problems': [
            'You are paranoid and rarely trust anybody.',
            'You are being hunted by a powerful group/person, who wants both you and your loved ones dead.',
            'You have a dark secret that could turn everyone against you.'
        ],
        'gear': [
            ['Vulcan cricket', 'advanced melee weapon'],
            ['Proximity sensor', 'computer'],
            ['Modulation mask', 'mechanical lockpick'],
            ['Recon drone', 'an assortment of fake identities'],
            ['Security tablet', 'poison (5 doses)']
        ]
    },
    'Pilot': {
        'subconcepts': [
            {
                'subconcept': 'Driver',
                'skills': ['Force','Pilot','Ranged Combat','Survival']
            },
            {
                'subconcept': 'Fighter Pilot',
                'skills': ['Data Djinn','Pilot','Ranged Combat','Technology']
            },
            {
                'subconcept': 'Freighter Pilot',
                'skills': ['Data Djinn', 'Force', 'Pilot','Technology']
            }
        ],
        'attribute': 'Agility',
        'reputation': 0,
        'face': ['Proud eyes','chiseled features','steely grey eyes','unshaven'],
        'clothing': ['Pilot\’s uniform', 'leather jacket', 'overalls and safety harness', 'dark green caftan'],
        'talents': ['Zero-G Training', 'Exo Specialist', 'Targeting Scope (CYB)'],
        'problems': [
            'You are reckless and take stupid risks with yourself and your ship, even when it isn’t necessary.',
            'You hate humanites/the Privileged/nekatra/the Zenithian Hegemony/something else, and will do anything to provoke one of them if they get close.',
            'You scare easily and never challenge yourself. Better safe than sorry.'
        ],
        'gear': [
            ['Tools (Ordinary)', 'talisman (Pilot +1)'],
            ['Exo shell', 'hand jet'],
            ['Targeting Scope', 'communicator (IV) (CYB)'],
            ['Accelerator pistol', 'stun weapon'],
            ['Flight suit', 'exquisite clothing']
        ]
    },
    'Preacher': {
        'subconcepts': [
            {
                'subconcept': 'Ascetic',
                'skills': ['Force','Culture','Dexterity','Science']
            },
            {
                'subconcept': 'Missionary',
                'skills': ['Culture','Manipulation','Dexterity','Survival']
            },
            {
                'subconcept': 'Prophet',
                'skills': ['Force','Culture','Manipulation','Observation']
            }
        ],
        'attribute': 'Empathy',
        'reputation': 1,
        'face': ['Mad eyes','fiery speech','frowning','unruly hair'],
        'clothing': ['Loincloth','black preacher\'s gowns','golden headwrap', 'torn gallabeya'],
        'talents': ['Blessing', 'Faction Standing', 'Talisman Maker'],
        'problems': [
            'You only see the worst in people, and you can\'t trust or accept help from anyone.',
            'You are indecisive and hesitant to act. You obsess over choices and get nothing done.',
            'You have seen the power of the Darkness, and throw a fanatical fit if signs of Darkness appear near you.',
        ],
        'gear': [
            ['Blessed scripture', 'thurible'],
            ['Talisman', 'cásula (preacher’s robes)'],
            ['Reliquary', 'written prophecy'],
            ['10 blessed m-doses', '10 herbal remedies'],
            ['Tabula', 'writing paraphernalia']
        ]
    },
    'Scientist': {
        'subconcepts': [
            {
                'subconcept': 'Archaeologist',
                'skills': ['Culture','Observation','Science','Survival']
            },
            {
                'subconcept': 'Medicurg',
                'skills': ['Medicurgy','Manipulation','Observation','Science']
            },
            {
                'subconcept': 'Technician',
                'skills': ['Force','Technology','Observation','Science']
            }
        ],
        'attribute': 'Wits',
        'reputation': 1,
        'face': ['Curious eyes','smooth forehead','dirty face','hair bund'],
        'clothing': ['Overalls','labcoat','white djellaba','cargo shorts and boots'],
        'talents': ['Field Medicurg', 'Gearhead', 'Wealthy Family'],
        'problems': [
            'You just can\'t stay off the kohôl. It makes you impulsive and erratic.',
            'Bounty hunters are after you, but for something you didn’t do.',
            'A competitor has slandered your good name. One day you shall have vengeance.'
        ],
        'gear': [
            ['Communicator (III)', 'proximity sensor'],
            ['Portable lab', 'computer'],
            ['Exo shell', 'database'],
            ['Pressure tent', 'medkit'],
            ['Tools (Advanced)', 'compass']
        ]
    },
    'Ship Worker': {
        'subconcepts': [
            {
                'subconcept': 'Deckhand',
                'skills': ['Force','Manipulation','Dexterity','Culture']
            },
            {
                'subconcept': 'Dock Worker',
                'skills': ['Force', 'Melee Combat', 'Dexterity','Technology']
            },
            {
                'subconcept': 'Engineer',
                'skills': ['Data Djinn','Force','Observation','Technology']
            }
        ],
        'attribute': 'Strength',
        'reputation': -1,
        'face': ['Tired eyes','sweaty face','lank hair','pursed lips'],
        'clothing': ['Tattooed arms', 'tank top with a symbol', 'wide brim cap', 'leather jacket'],
        'talents': ['Exo Specialist', 'Tough', 'Zero-G Training'],
        'problems': [
            'You have a short fuse and are prone to fits of rage. This often gets you in trouble.',
            'You have a cold heart and would never help someone in need unless you would really benefit from it.',
            'You have seen the Dark between the Stars, and now, space terrifies you. Sometimes you are able to conquer your fear.',
        ],
        'gear': [
            ['Tools (Ordinary)', 'vacuum sealer'],
            ['Power glove', 'environment scanner'],
            ['Arrash', 'tabak'],
            ['Exo loader', 'exo shell'],
            ['Hyper rope', 'dura knife']
        ]
    },
    'Soldier': {
        'subconcepts': [
            {
                'subconcept': 'Legionnaire',
                'skills': ['Force','Melee Combat','Ranged Combat', 'Survival']
            },
            {
                'subconcept': 'Mercenary',
                'skills': ['Melee Combat', 'Dexterity', 'Observation', 'Ranged Combat']
            },
            {
                'subconcept': 'Officer',
                'skills': ['Command','Culture','Melee Combat','Ranged Combat']
            }
        ],
        'attribute': 'Agility',
        'reputation': -1,
        'face': ['Menacing stare','scarred','cybernetic eye','burn marks'],
        'clothing': ['Fatigues', 'dress uniform', 'deep black djellaba', 'long leather coat'],
        'talents': ['Combat Veteran', 'Cybernetic Muscles (CYB)', 'Tough'],
        'problems': [
            'You are addicted to opor, and use it after doing things on the battlefield you would rather forget.',
            'You are arrogant and condescending toward others.',
            'You are a coward, but try to hide it as best as you can.'
        ],
        'gear': [
            ['Heavy armor', 'mercurium sword'],
            ['Accelerator pistol with sensor scope', 'vulcan carbine'],
            ['Frag grenade', 'cybernetic muscles (CYB)'],
            ['Command unit', 'advanced scope'],
            ['Communicator (II)', 'medkit']
        ]
    },
    'Trailblazer': {
        'subconcepts': [
            {
                'subconcept': 'Colonist',
                'skills': ['Force','Dexterity','Ranged Combat','Survival']
            },
            {
                'subconcept': 'Prospector',
                'skills': ['Pilot','Technology','Science','Survival']
            },
            {
                'subconcept': 'Scout',
                'skills': ['Infiltration', 'Ranged Combat', 'Observation','Survival']
            }
        ],
        'attribute': 'Wits',
        'reputation': 0,
        'face': ['Weather-beaten','squinting','protective goggles','bald'],
        'clothing': ['Heavy overalls','crude boots','fur-lined coat','lined caftan'],
        'talents': ['Weatherproof (CYB)', 'Nine Lives', 'Rugged'],
        'problems': [
            'You are stubborn to a fault, never giving up, even if you or your friends will suffer negative consequences.',
            'You have a dark secret that has made you the target of a faction.',
            'You are possessed by something from the Dark between the Stars. It sometimes takes over, giving you seizures or memory loss.'
        ],
        'gear': [
            ['Recon drone', 'communicator (V)'],
            ['Dura axe', 'vulcan carbine'],
            ['5 m-doses', 'database'],
            ['Weatherproof (CYB)', 'exo shell'],
            ['Environment scanner', 'compass']
        ]
    },
}

function generateCharacter() {
    // Background and upbringing
    var background = getRandomElement(Object.keys(upbringings))
    var upbringing = upbringings[background];
    var attributePoints = upbringing['attribute points'] - 4;
    var skillPoints = upbringing['skill points'];
    var birr = upbringing['birr'];
    var icon = getRandomElement(icons);

    // Concept
    var concept = getRandomElement(Object.keys(concepts));
    var conceptDetails = concepts[concept];
    var subconceptDetails = conceptDetails['subconcepts'][getRandomElement(Object.keys(conceptDetails['subconcepts']))];
    var subconcept = subconceptDetails['subconcept'];
    var subconceptSkills = subconceptDetails['skills'];
    var conceptKeyAttribute = conceptDetails['attribute'];

    // Features
    var face = getRandomElement(conceptDetails['face']);
    var clothing = getRandomElement(conceptDetails['clothing']);
    var talent = getRandomElement(conceptDetails['talents']);
    var problem = getRandomElement(conceptDetails['problems']);
    var reputation = upbringing['reputation'] + conceptDetails['reputation']

    // Attributes
    var attributes = {
        'Strength': 1,
        'Agility': 1,
        'Wits': 1,
        'Empathy': 1
    };

    // Skills
    var skills = {
        'Dexterity': 0,
        'Force': 0,
        'Infiltration': 0,
        'Manipulation': 0,
        'Melee Combat': 0,
        'Observation': 0,
        'Ranged Combat': 0,
        'Survival': 0,
        'Command': 0,
        'Culture': 0,
        'Data Djinn': 0,
        'Medicurgy': 0,
        'Mystic Powers': 0,
        'Pilot': 0,
        'Science': 0,
        'Technology': 0
    };

    // Gear
    var gear = [];

    // Set attributes
    while (attributePoints > 0) {
        const attribute = getRandomElement(Object.keys(attributes));
        if (
            ((attribute == conceptKeyAttribute) && (attributes[attribute] < 5)) ||
            (attributes[attribute] < 4)
        ) {
            attributes[attribute] = attributes[attribute] + 1;
            attributePoints = attributePoints - 1;
        }
    }

    // Set skills
    while (skillPoints > 0) {
        const skill = getRandomElement(Object.keys(skills));
        if (subconceptSkills.includes(skill) && skills[skill] < 3) {
            skills[skill] = skills[skill] + Math.min(getRandomInt(0, 3 - skills[skill]), skillPoints);
            skillPoints = skillPoints - skills[skill];
        } else if (skills[skill] < 1) {
            skills[skill] = skills[skill] + 1;
            skillPoints = skillPoints - 1;
        }
    }
    // Assemble skills into string.
    var skillsOut = [];
    for (let i = 0; i < Object.keys(skills).length; i++) {
        const skillName = Object.keys(skills)[i];
        if (skills[skillName] > 0) {
            skillsOut.push(skillName + ' ' + skills[skillName]);
        }
    }

    // Set gear
    for (let i = 0; i < conceptDetails['gear'].length; i++) {
        const gearOptions = conceptDetails['gear'][i];
        gear[i] = getRandomElement(gearOptions);
    }

    // Fill page
    $('.character .background span').html(background);
    $('.character .concept span').html(concept);
    $('.character .subconcept span').html(subconcept);
    $('.character .strength span').html(attributes['Strength']);
    $('.character .agility span').html(attributes['Agility']);
    $('.character .wits span').html(attributes['Wits']);
    $('.character .empathy span').html(attributes['Empathy']);
    $('.character .face span').html(face);
    $('.character .clothing span').html(clothing);
    $('.character .talent span').html(talent);
    $('.character .icon span').html(icon);
    $('.character .problem span').html(problem);
    $('.character .reputation span').html(reputation);
    $('.character .birr span').html(birr);
    $('.character .gear span').html(gear.join(', '));
    $('.character .skills span').html(skillsOut.join(', '));
}

$('.generate-character').click(function() {
    generateCharacter();
});

$(document).ready(function() {
    generateCharacter();
})