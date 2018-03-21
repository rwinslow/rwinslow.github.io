var types = {
    'Bookworm': {
        'keySkills': ['Calculate', 'Investigate', 'Comprehend'],
        'iconicItem': [
            'Dog named Tiny',
            'Encyclopedia',
            'Magnifying glass',
        ],
        'problem': [
            'Nobody tells me how my dad died.',
            'My sister is really sick.',
            'That weird man is following me.',
        ],
        'drive': [
            'I want to find answers to the big questions in life.',
            'I need something to brag about.',
        ],
        'pride': [
            'I\'m the smartest kid in school.',
            'Nothing scares me.',
        ],
        'npcRelationships': [
            'Mary, the school librarian, was my friend until she disappeared. I am sure that the school janitor, Jeffrey, knows more than he\'s saying.',
            'Gary in my class was attacked by animals while riding his bike home from training. I can\'t believe that everyone at school thinks he was attacked by werewolves.',
            'When Diane Petersen was fired from the Loop, I heard her vow to take revenge on all who live here.',
        ],
        'anchor': [
            'Mom/dad',
            'Teacher',
            'Local author',
        ],
    },
    'Computer Geek': {
        'keySkills': ['Calculate', 'Program', 'Comprehend'],
        'iconicItem': [
            'Computer',
            'Pocket calculator',
            'Toy lightsaber',
        ],
        'problem': [
            'The tough guys hit me.',
            'My parents are always arguing.',
            'She/he doesn\'t even know I exist.',
        ],
        'drive': [
            'I love puzzles.',
            'Peer pressure makes me do it.',
        ],
        'pride': [
            'When the shit hits the fan, I don\'t back down.',
            'I\'m the smartest kid in school.',
        ],
        'npcRelationships': [
            'My friend Leeanne told me that strange creatures have moved into the Cooling Towers. She thinks they are aliens.',
            'Everyone seems to be having nightmares about that horrible teenager Peter.',
            'My friend Elisabeth has built a computer program that cracks codes, and we used it to listen to a scrambled radio communication. Some guys, who called each other fish names, talked about her mother as "one of the targets."',
        ],
        'anchor': [
            'Mother/father',
            'Science teacher',
            'The guy who owns the comic shop',
        ],
    },
    'Hick': {
        'keySkills': ['Force', 'Move', 'Tinker'],
        'iconicItem': [
            'German Shepherd',
            'Crowbar',
            'Tractor',
        ],
        'problem': [
            'Someone is poisoning our animals.',
            'Mom/dad doesn\'t want to accept that she/he is sick.',
            'I seriously hurt someone by mistake.',
        ],
        'drive': [
            'There is more to this world than what meets the eye.',
            'They need me.',
        ],
        'pride': [
            'My machines will one day conquer the world.',
            'I help other people.',
        ],
        'npcRelationships': [
            'The school janitor seems so lonely since Mary, the school librarian, disappeared. I wish I could help him.',
            'The Police of cer Karen Richards asked me if we could help her out on her boat this weekend.',
            'I have seen that stranger, the former rock singer Mikey Hayes, sneaking around in the forest near the company NAI.',
        ],
        'anchor': [
            'Dad/mom',
            'Fellow hunter',
            'Riding instructor',
        ],
    },
    'Jock': {
        'keySkills': ['Force', 'Move', 'Contact'],
        'iconicItem': [
            'Baseball bat',
            'Hockey stick',
            'BMX bike',
        ],
        'problem': [
            'My brother refuses to go out of his room since the accident.',
            'My teacher hates me.',
            'I cannot read very well, and they want to move me to a special class.',
        ],
        'drive': [
            'I\'m in it for the thrill.',
            'It\'s the right thing to do.',
        ],
        'pride': [
            'My father is a firefighter.',
            'No one calls me chicken!',
        ],
        'npcRelationships': [
            'That new police officer, Karen Richards, has rented a boat to investigate something in the lake, but she hasn\'t told anyone what it is.',
            'Several of my teammates are having strange dreams.',
            'A scientist named Olivia Martinez came to our training session and asked the coach if we wanted to take part in some kind of medical experiment, but I could tell she was lying about something.',
        ],
        'anchor': [
            'Father/mother',
            'Coach for the team',
            'Brother/sister',
        ],
    },
    'Popular Kid': {
        'keySkills': ['Contact', 'Charm', 'Lead'],
        'iconicItem': [
            'Pack of chewing gum',
            'Diary with juicy secrets',
            'Hairspray bottle',
        ],
        'problem': [
            'My aunt lives in our basement and she is crazy.',
            'Mom/dad is having a secret love affair.',
            'Your rival knows what you are trying to hide.',
        ],
        'drive': [
            'It\'s a relief to get away from the burden of popularity.',
            'I hate secrets.',
        ],
        'pride': [
            'Everybody likes me.',
            'I know everything about everyone.',
        ],
        'npcRelationships': [
            'That new teen Lisa and her friends from the Wildlife Club are scary. I wonder what they are up to?',
            'The school janitor, Jeffrey, seems to hate me, but I know he is hiding something.',
            'Nobody knows it, but the former rock star Mikey Hayes lives in a cottage at Hemenway Park. I talked to him and he said something horrible is happening in Guthrie.'
        ],
        'anchor': [
            'Older sibling',
            'Mom/dad',
            'Famous friend of the family',
        ],
    },
    'Rocker': {
        'keySkills': ['Move', 'Charm', 'Empathize'],
        'iconicItem': [
            'Boombox',
            'Electric guitar',
            'Leather jacket',
        ],
        'problem': [
            'My parents are about to divorce.',
            'I steal money.',
            'Unrequited love.',
        ],
        'drive': [
            'I\'m doing it for love.',
            'Hunger for everything in life.',
        ],
        'pride': [
            'I play the guitar.',
            'I stood up for my friend.',
        ],
        'npcRelationships': [
            'My mom thinks that she is being followed because she\'s a scientist, but dad thinks she\'s going crazy.',
            'My older sister has joined the Wildlife Club; now she\'s stopped talking to me, and she sneaks out in the middle of the night.',
            'The strange scientist, Diane Petersen, is my aunt, but that doesn\'t mean I like her.',
        ],
        'anchor': [
            'Music teacher',
            'Older brother/sister',
            'The guy at the music store',
        ],
    },
    'Troublemaker': {
        'keySkills': ['Force', 'Sneak', 'Lead'],
        'iconicItem': [
            'Lighter and cigarettes',
            'Knife',
            'Skateboard',
        ],
        'problem': [
            'My parents say that I’m good for nothing.',
            'My mother/father drinks a lot.',
            'We are short of money.',
        ],
        'drive': [
            'I\'ll do anything to get away from home.',
            'My friends and what we do is the only thing not broken in my life.',
        ],
        'pride': [
            'I helped a bird with a broken wing.',
            'I stood up to the teacher.',
        ],
        'npcRelationships': [
            'She/he thinks she/he is better than the rest of us!',
            'I\'ll do anything for him/her.',
            'She/he knows what I\'m going through.',
        ],
        'anchor': [
            'Janitor at school',
            'School psychologist',
            'Grandma',
        ],
    },
    'Weirdo': {
        'keySkills': ['Sneak', 'Investigate', 'Empathize'],
        'iconicItem': [
            'Razorblade',
            'Drawing pad',
            'Pet rat',
        ],
        'problem': [
            'My father is a communist.',
            'My brother is doing weird things in his room.',
            'I get bullied at school.',
        ],
        'drive': [
            'They say I\'m the most curious person alive.',
            'Drawn to anything different or strange.',
        ],
        'pride': [
            'I\'m not heterosexual.',
            'Mom says that I am beautiful.',
        ],
        'npcRelationships': [
            'The Priest in St. Christopher\'s, Joseph, is the only adult whom I trust. Now he has disappeared.',
            'That kid Bryan told me that his friend, Peter, who works at the Dream Shop, is about to do something bad.',
            'She wants me to call her Stacey, and she’\'s older than me, and lives by herself in a house outside Hemenway. She hates all grownups.',
        ],
        'anchor': [
            'Grandmother',
            'Another Kid\'s mom/dad',
            'Neighbor',
        ],
    },
}

function tftlGenerateCharacter(type) {
    // Type and stats
    var type = type ? type : getRandomElement(Object.keys(types));
    var typeDetails = types[type];
    var keySkills = typeDetails['keySkills'];
    var age = getRandomInt(10, 15);
    var attributePoints = age - 4;
    var skillPoints = 10;

    // Features
    var iconicItem = getRandomElement(typeDetails['iconicItem']);
    var problem = getRandomElement(typeDetails['problem']);
    var npcRelationship = getRandomElement(typeDetails['npcRelationships']);
    var anchor = getRandomElement(typeDetails['anchor']);
    var pride = getRandomElement(typeDetails['pride']);
    var drive = getRandomElement(typeDetails['drive']);

    // Attributes
    var attributes = {
        'Body': 1,
        'Tech': 1,
        'Heart': 1,
        'Mind': 1
    };

    // Skills
    var skills = {
        'Sneak': 0,
        'Force': 0,
        'Move': 0,
        'Tinker': 0,
        'Program': 0,
        'Calculate': 0,
        'Contact': 0,
        'Charm': 0,
        'Lead': 0,
        'Investigate': 0,
        'Comprehend': 0,
        'Empathize': 0,
    };

    // Set attributes
    while (attributePoints > 0) {
        const attribute = getRandomElement(Object.keys(attributes));
        if (attributes[attribute] < 5) {
            attributes[attribute] = attributes[attribute] + 1;
            attributePoints = attributePoints - 1;
        }
    }

    // Set skills
    while (skillPoints) {
        const skill = getRandomElement(Object.keys(skills));
        var increment = 0;
        if (keySkills.includes(skill) && skills[skill] < 3) {
            increment = Math.min(getRandomInt(1, 3 - skills[skill]), skillPoints);
        } else if (skills[skill] < 1) {
            increment = 1;
        }
        skills[skill] = skills[skill] + increment;
        skillPoints = skillPoints - increment;
    }
    // Assemble skills into string.
    var skillsOut = [];
    for (let i = 0; i < Object.keys(skills).length; i++) {
        const skillName = Object.keys(skills)[i];
        if (skills[skillName] > 0) {
            skillsOut.push('<div class="skill">{0} {1}</div>'.format(skillName, skills[skillName]));
        }
    }

    // Fill page
    $('.tftl-character .type .fill').html(type);
    $('.tftl-character .body .fill').html(attributes['Body']);
    $('.tftl-character .tech .fill').html(attributes['Tech']);
    $('.tftl-character .heart .fill').html(attributes['Heart']);
    $('.tftl-character .mind .fill').html(attributes['Mind']);
    $('.tftl-character .age .fill').html(age);
    $('.tftl-character .iconic-item .fill').html(iconicItem);
    $('.tftl-character .problem .fill').html(problem);
    $('.tftl-character .npc-relationship .fill').html(npcRelationship);
    $('.tftl-character .anchor .fill').html(anchor);
    $('.tftl-character .pride .fill').html(pride);
    $('.tftl-character .drive .fill').html(drive);
    $('.tftl-character .skills .fill').html(skillsOut.join('\n'));
}

// Generate character event
$('.tftl-generate-character').click(function() {
    var type = '';
    if ($('.tftl-type').val() != 'Any Type') {
        type = $('.tftl-type').val();
    }
    tftlGenerateCharacter(type);
});

// Function to handle updating types
function tftlFillTypes() {
    $('.tftl-type').empty();
    var options = ['Any Type'].concat(Object.keys(types));
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        $('.tftl-type').append(
            $("<option></option>").text(option)
        );
    }
}

// Reset controls
$('.reset-tftl-controls').click(function() {
    $('.tftl-type').val('Any Type');
});

// Always generate a random character
$(document).ready(function() {
    tftlFillTypes();
    tftlGenerateCharacter();
})
