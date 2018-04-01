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

var origins = [
    'Algol',
    'Mira',
    'Kua',
    'Dabaran',
    'Zalos'
];

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
];

var generalSkills = [
    'Dexterity',
    'Force',
    'Infiltration',
    'Manipulation',
    'Melee Combat',
    'Observation',
    'Ranged Combat',
    'Survival',
];

var advancedSkills = [
    'Command',
    'Culture',
    'Data Djinn',
    'Medicurgy',
    'Mystic Powers',
    'Pilot',
    'Science',
    'Technology',
];

var concepts = {
    'Artist': {
        'subconcepts': {
            'Courtesan': {'skills': ['Manipulation', 'Culture', 'Dexterity', 'Observation']},
            'Musician': {'skills': ['Manipulation', 'Culture', 'Infiltration', 'Observation']},
            'Poet': {'skills': ['Manipulation', 'Culture', 'Dexterity', 'Infiltration']},
        },
        'attribute': 'Empathy',
        'reputation': 1,
        'face': ['Flawless makeup','Bedroom eyes','Black curls','Animate tattoo'],
        'clothing': ['Silk burra', 'Shining dress', 'Embroidered djellaba', 'Swirling skirts'],
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
        'subconcepts': {
            'Analyst': {'skills': ['Data Djinn','Culture','Manipulation','Science']},
            'Correspondent': {'skills': ['Culture','Manipulation','Infiltration','Observation']},
            'Data Djinn': {'skills': ['Data Djinn', 'Manipulation', 'Observation','Science']},
        },
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
        'subconcepts': {
            'Criminal': {'skills': ['Force','Melee Combat','Dexterity','Infiltration']},
            'Mystic': {'skills': ['Manipulation','Mystic Powers','Dexterity','Infiltration']},
            'Revolutionary': {'skills': ['Ranged Combat','Dexterity','Observation', 'Survival']},
        },
        'attribute': 'Empathy',
        'reputation': -2,
        'face': ['Blank stare','Facial tattoos','Lip ring','Shaved head'],
        'clothing': ['Brown coat','Jacket with many pockets','Blue patterned gallabeya', 'Turban'],
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
        'subconcepts': {
            'Agitator': {'skills': ['Data Djinn','Force','Manipulation','Culture']},
            'Diplomat': {'skills': ['Command', 'Culture', 'Manipulation', 'Melee Combat']},
            'Peddler': {'skills': ['Culture','Manipulation','Observation','Pilot']},
        },
        'attribute': 'Empathy',
        'reputation': 1,
        'face': ['Red face','Grave looking','Stubble','Too much makeup'],
        'clothing': ['Red djellaba with gold embroidery', 'Dress uniform', 'Black caftan', 'Head wrap with a gem'],
        'talents': ['Faction Standing', 'Language Modulator (CYB)', 'Lie Detector (CYB)'],
        'problems': [
            'You have a protégé that you need to take care of. It could be a relative or a friend you owe a debt of gratitude.',
            'You owe money to the Syndicate. They want it back. Now.',
            'You are greedy, and you just have to scam people if you get the chance, even your friends.'
        ],
        'gear': [
            ['Tabula', 'Language Modulator (CYB)'],
            ['Com link V', 'Voice amplifier'],
            ['Exquisite clothing', 'Kambra (D6 doses)'],
            ['Lie Detector (CYB)', 'Language unit'],
            ['Vulcan cricket', 'Mercurium dagger']
        ]
    },
    'Operative': {
        'subconcepts': {
            'Assassin': {'skills': ['Infiltration','Dexterity','Melee Combat','Ranged Combat']},
            'Guardsman/-woman': {'skills': ['Force', 'Melee Combat','Ranged Combat', 'Observation']},
            'Spy': {'skills': ['Data Djinn','Manipulation','Infiltration','Ranged Combat']},
        },
        'attribute': 'Agility',
        'reputation': 0,
        'face': ['Scarred face','Blank stare','Cold eyes','Crew cut'],
        'clothing': ['Silk burra', 'Shining dress', 'Embroidered djellaba', 'Swirling skirts'],
        'talents': ['Executioner', 'Intimidating', 'Licensed'],
        'problems': [
            'You are paranoid and rarely trust anybody.',
            'You are being hunted by a powerful group/person, who wants both you and your loved ones dead.',
            'You have a dark secret that could turn everyone against you.'
        ],
        'gear': [
            ['Vulcan cricket', 'Advanced melee weapon'],
            ['Proximity sensor', 'Computer'],
            ['Modulation mask', 'Mechanical lockpick'],
            ['Recon drone', 'An assortment of fake identities'],
            ['Security tablet', 'Poison (5 doses)']
        ]
    },
    'Pilot': {
        'subconcepts': {
            'Driver': {'skills': ['Force','Pilot','Ranged Combat','Survival']},
            'Fighter Pilot': {'skills': ['Data Djinn','Pilot','Ranged Combat','Technology']},
            'Freighter Pilot': {'skills': ['Data Djinn', 'Force', 'Pilot','Technology']},
        },
        'attribute': 'Agility',
        'reputation': 0,
        'face': ['Proud eyes','Chiseled features','Steely grey eyes','Unshaven'],
        'clothing': ['Pilot\’s uniform', 'Leather jacket', 'Overalls and safety harness', 'Dark green caftan'],
        'talents': ['Zero-G Training', 'Exo Specialist', 'Targeting Scope (CYB)'],
        'problems': [
            'You are reckless and take stupid risks with yourself and your ship, even when it isn’t necessary.',
            'You hate humanites/the Privileged/nekatra/the Zenithian Hegemony/something else, and will do anything to provoke one of them if they get close.',
            'You scare easily and never challenge yourself. Better safe than sorry.'
        ],
        'gear': [
            ['Tools (Ordinary)', 'Talisman (Pilot +1)'],
            ['Exo shell', 'Hand jet'],
            ['Targeting Scope (CYB)', 'Communicator (IV)'],
            ['Accelerator pistol', 'Stun weapon'],
            ['Flight suit', 'Exquisite clothing']
        ]
    },
    'Preacher': {
        'subconcepts': {
            'Ascetic': {'skills': ['Force','Culture','Dexterity','Science']},
            'Missionary': {'skills': ['Culture','Manipulation','Dexterity','Survival']},
            'Prophet': {'skills': ['Force','Culture','Manipulation','Observation']},
        },
        'attribute': 'Empathy',
        'reputation': 1,
        'face': ['Mad eyes','Fiery speech','Frowning','Unruly hair'],
        'clothing': ['Loincloth','Black preacher\'s gowns','Golden headwrap', 'Torn gallabeya'],
        'talents': ['Blessing', 'Faction Standing', 'Talisman Maker'],
        'problems': [
            'You only see the worst in people, and you can\'t trust or accept help from anyone.',
            'You are indecisive and hesitant to act. You obsess over choices and get nothing done.',
            'You have seen the power of the Darkness, and throw a fanatical fit if signs of Darkness appear near you.',
        ],
        'gear': [
            ['Blessed scripture', 'Thurible'],
            ['Talisman', 'Cásula (preacher’s robes)'],
            ['Reliquary', 'Written prophecy'],
            ['10 blessed m-doses', '10 herbal remedies'],
            ['Tabula', 'Writing paraphernalia']
        ]
    },
    'Scientist': {
        'subconcepts': {
            'Archaeologist': {'skills': ['Culture','Observation','Science','Survival']},
            'Medicurg': {'skills': ['Medicurgy','Manipulation','Observation','Science']},
            'Technician': {'skills': ['Force','Technology','Observation','Science']},
        },
        'attribute': 'Wits',
        'reputation': 1,
        'face': ['Curious eyes','Smooth forehead','Dirty face','Hair bund'],
        'clothing': ['Overalls','Labcoat','White djellaba','Cargo shorts and boots'],
        'talents': ['Field Medicurg', 'Gearhead', 'Wealthy Family'],
        'problems': [
            'You just can\'t stay off the kohôl. It makes you impulsive and erratic.',
            'Bounty hunters are after you, but for something you didn’t do.',
            'A competitor has slandered your good name. One day you shall have vengeance.'
        ],
        'gear': [
            ['Communicator (III)', 'Proximity sensor'],
            ['Portable lab', 'Computer'],
            ['Exo shell', 'Database'],
            ['Pressure tent', 'Medkit'],
            ['Tools (Advanced)', 'Compass']
        ]
    },
    'Ship Worker': {
        'subconcepts': {
            'Deckhand': {'skills': ['Force','Manipulation','Dexterity','Culture']},
            'Dock Worker': {'skills': ['Force', 'Melee Combat', 'Dexterity','Technology']},
            'Engineer': {'skills': ['Data Djinn','Force','Observation','Technology']},
        },
        'attribute': 'Strength',
        'reputation': -1,
        'face': ['Tired eyes','Sweaty face','Lank hair','Pursed lips'],
        'clothing': ['Tattooed arms', 'Tank top with a symbol', 'Wide brim cap', 'Leather jacket'],
        'talents': ['Exo Specialist', 'Tough', 'Zero-G Training'],
        'problems': [
            'You have a short fuse and are prone to fits of rage. This often gets you in trouble.',
            'You have a cold heart and would never help someone in need unless you would really benefit from it.',
            'You have seen the Dark between the Stars, and now, space terrifies you. Sometimes you are able to conquer your fear.',
        ],
        'gear': [
            ['Tools (Ordinary)', 'Vacuum sealer'],
            ['Power glove', 'Environment scanner'],
            ['Arrash', 'Tabak'],
            ['Exo loader', 'Exo shell'],
            ['Hyper rope', 'Dura knife']
        ]
    },
    'Soldier': {
        'subconcepts': {
            'Legionnaire': {'skills': ['Force','Melee Combat','Ranged Combat', 'Survival']},
            'Mercenary': {'skills': ['Melee Combat', 'Dexterity', 'Observation', 'Ranged Combat']},
            'Officer': {'skills': ['Command','Culture','Melee Combat','Ranged Combat']},
        },
        'attribute': 'Agility',
        'reputation': -1,
        'face': ['Menacing stare','Scarred','Cybernetic eye','Burn marks'],
        'clothing': ['Fatigues', 'Dress uniform', 'Deep black djellaba', 'Long leather coat'],
        'talents': ['Combat Veteran', 'Cybernetic Muscles (CYB)', 'Tough'],
        'problems': [
            'You are addicted to opor, and use it after doing things on the battlefield you would rather forget.',
            'You are arrogant and condescending toward others.',
            'You are a coward, but try to hide it as best as you can.'
        ],
        'gear': [
            ['Heavy armor', 'Mercurium sword'],
            ['Accelerator pistol with sensor scope', 'Vulcan carbine'],
            ['Frag grenade', 'Cybernetic Muscles (CYB)'],
            ['Command unit', 'Advanced scope'],
            ['Communicator (II)', 'Medkit']
        ]
    },
    'Trailblazer': {
        'subconcepts': {
                'Colonist': {'skills': ['Force','Dexterity','Ranged Combat','Survival']},
                'Prospector': {'skills': ['Pilot','Technology','Science','Survival']},
                'Scout': {'skills': ['Infiltration', 'Ranged Combat', 'Observation','Survival']},
        },
        'attribute': 'Wits',
        'reputation': 0,
        'face': ['Weather-beaten','Squinting','Protective goggles','Bald'],
        'clothing': ['Heavy overalls','Crude boots','Fur-lined coat','Lined caftan'],
        'talents': ['Weatherproof (CYB)', 'Nine Lives', 'Rugged'],
        'problems': [
            'You are stubborn to a fault, never giving up, even if you or your friends will suffer negative consequences.',
            'You have a dark secret that has made you the target of a faction.',
            'You are possessed by something from the Dark between the Stars. It sometimes takes over, giving you seizures or memory loss.'
        ],
        'gear': [
            ['Recon drone', 'Communicator (V)'],
            ['Dura axe', 'Vulcan carbine'],
            ['5 m-doses', 'Database'],
            ['Weatherproof (CYB)', 'Exo shell'],
            ['Environment scanner', 'Compass']
        ]
    },
};

function coriolisGenerateCharacter(background, concept, subconcept) {
    // Background and upbringing
    var background = background ? background : getRandomElement(Object.keys(upbringings))
    var upbringing = upbringings[background];
    var attributePoints = upbringing['attribute points'] - 4;
    var skillPoints = upbringing['skill points'];
    var birr = upbringing['birr'];
    var icon = getRandomElement(icons);
    var origin = getRandomElement(origins);

    // Concept
    var concept = concept ? concept : getRandomElement(Object.keys(concepts));
    var conceptDetails = concepts[concept];
    var conceptKeyAttribute = conceptDetails['attribute'];
    var subconcept = subconcept ? subconcept : getRandomElement(Object.keys(conceptDetails['subconcepts']));
    var subconceptDetails = conceptDetails['subconcepts'][subconcept];
    var subconceptSkills = subconceptDetails['skills'];

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

    // Set skills and ensure talent-related skills get at least one point.
    function baseTalentSkill(talentName, skillName, value=1) {
        if (talent == talentName) {
            skills[skillName] = value;
            skillPoints = skillPoints - value;
        }
    }
    baseTalentSkill('Soothing', 'Medicurgy');
    baseTalentSkill('Field Medicurg', 'Medicurgy');
    baseTalentSkill('Mystical Power', 'Mystic Powers');
    baseTalentSkill('Gearhead', 'Technology');
    while (skillPoints) {
        const skill = getRandomElement(Object.keys(skills));
        var increment = 0;

        // Need the talent to increment mystic
        if (skill == 'Mystic Powers' && talent != 'Mystical Power') {
            continue;
        }

        if (subconceptSkills.includes(skill) && skills[skill] < 3) {
            increment = Math.min(getRandomInt(1, 3 - skills[skill]), skillPoints);
        } else if (skills[skill] < 1) {
            increment = 1;
        }

        skills[skill] = skills[skill] + increment;
        skillPoints = skillPoints - increment;
    }
    // Assemble skills into string.
    var generalSkillsOut = [];
    var advancedSkillsOut = [];
    for (let i = 0; i < Object.keys(skills).length; i++) {
        const skillName = Object.keys(skills)[i];
        if (skills[skillName] > 0) {
            var skillOut = '<tr><td><strong>{0}</strong></td><td>{1}</span></td></tr>'.format(skillName, skills[skillName]);
            if (generalSkills.includes(skillName)) {
                generalSkillsOut.push(skillOut);
            } else if (advancedSkills.includes(skillName)) {
                advancedSkillsOut.push(skillOut);
            }
        }
    }

    // Set gear
    for (let i = 0; i < conceptDetails['gear'].length; i++) {
        const gearOptions = conceptDetails['gear'][i];
        if (gearOptions.includes(talent)) {
            // Ensure cybernetic gear chosen if character has matching talent
            gear[i] = talent;
        } else {
            // Randomly choose from only non-typed gear
            gear[i] = getRandomElement(
                coriolisNonTypeGear(coriolisNonTypeGear(gearOptions, 'BIO'), 'CYB'));
        }
    }
    var gearOut = [];
    for (let i = 0; i < gear.length; i++) {
        gearOut.push('<tr><td>{0}</td></tr>'.format(gear[i]));
    }

    // Fill page
    $('.coriolis-character .background.fill').html(background);
    $('.coriolis-character .concept.fill').html(concept);
    $('.coriolis-character .subconcept.fill').html(subconcept);
    $('.coriolis-character .strength.fill').html(attributes['Strength']);
    $('.coriolis-character .agility.fill').html(attributes['Agility']);
    $('.coriolis-character .wits.fill').html(attributes['Wits']);
    $('.coriolis-character .empathy.fill').html(attributes['Empathy']);
    $('.coriolis-character .face.fill').html(face);
    $('.coriolis-character .clothing.fill').html(clothing);
    $('.coriolis-character .talent.fill').html(talent);
    $('.coriolis-character .icon.fill').html(icon);
    $('.coriolis-character .problem.fill').html(problem);
    $('.coriolis-character .reputation.fill').html(reputation);
    $('.coriolis-character .birr.fill').html(birr);
    $('.coriolis-character .origin.fill').html(origin);
    $('.coriolis-character .gear.fill').html(gearOut.join(''));
    $('.coriolis-character .general-skills.fill').html(generalSkillsOut.join('\n'));
    $('.coriolis-character .advanced-skills.fill').html(advancedSkillsOut.join('\n'));
}

// Generate character event
$('.coriolis-generate-character').click(function() {
    var background = '';
    var concept = '';
    var subconcept = '';
    if ($('.coriolis-background').val() != 'Any Background') {
        background = $('.coriolis-background').val();
    }
    if ($('.coriolis-concept').val() != 'Any Concept') {
        concept = $('.coriolis-concept').val();
    }
    if ($('.coriolis-subconcept').val() != 'Any Subconcept') {
        subconcept = $('.coriolis-subconcept').val();
    }
    coriolisGenerateCharacter(background, concept, subconcept);
});

function coriolisNonTypeGear(gearOptions, type) {
    let nonCybGear = [];
    for (let i = 0; i < gearOptions.length; i++) {
        const gear = gearOptions[i];
        if (!gear.includes(type)) {
            nonCybGear.push(gear);
        }
    }
    return nonCybGear;
}

function coriolisFillControls() {
    $('.coriolis-background').empty();
    var backgroundOptions = ['Any Background'].concat(Object.keys(upbringings));
    for (let i = 0; i < backgroundOptions.length; i++) {
        const background = backgroundOptions[i];
        $('.coriolis-background').append(
            $("<option></option>").text(background)
        );
    }

    $('.coriolis-concept').empty();
    var conceptOptions = ['Any Concept'].concat(Object.keys(concepts));
    for (let i = 0; i < conceptOptions.length; i++) {
        const concept = conceptOptions[i];
        $('.coriolis-concept').append(
            $("<option></option>").text(concept)
        );
    }
}

// Function to handle updating subconcepts based on concept selection
function coriolisUpdateSubconcepts() {
    var concept = $('.coriolis-concept').val();
    if (concept != 'Any Concept') {
        var subconcepts = Object.keys(concepts[concept]['subconcepts']);
        var options = ['Any Subconcept'].concat(subconcepts);
    } else {
        var options = ['Any Subconcept'];
    }
    $('.coriolis-subconcept').empty();
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        $('.coriolis-subconcept').append(
            $("<option></option>").text(option)
        );
    }
}

// Update subconcepts on concept change
$('.coriolis-concept').change(coriolisUpdateSubconcepts);

// Reset controls
$('.reset-coriolis-controls').click(function() {
    $('.coriolis-background').val('Any Background');
    $('.coriolis-concept').val('Any Concept');
    $('.coriolis-subconcept').empty().append(
        $("<option></option>").text('Any Subconcept')
    );
});

// Always generate a random character
$(document).ready(function() {
    coriolisFillControls();
    coriolisUpdateSubconcepts();
    coriolisGenerateCharacter();
})
