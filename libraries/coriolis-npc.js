var firstNames = ['Awadah','Youssouf','Arib','Mojiz','Loubna','Lila','Zinah','Ghina','Ayham','Aziz','Abdelmajid','Jihane','Nihale','Jasmin','Hayyan','Zitane','Mimoun','Hamza','Younes','Aisha','Alina','Amira','Jaul','Fayaaz','Badria','Fadma','Yara','Mehrak','Nivrod','Davood','Noushineh','Mava','Sima','Shervan','Taba','Parvaneh'];
var lastNames = ['Soleymani','Motiwala','Subedar','Shahidi','Akalay','Saqqat','Maadawi','Mansouri','Serhane','Bourkia','Ben','Chafik','Abdessalam','Ghallab','Salama','Mallak','Ammar','Niazi','Mahdi','Arinites','Khalaf','Halaby','Gupta','Ahantem','Chanda','Sabharwal','Kamath','Saha','Mahar','Hamadani','Karra','Karali','Rega','Maroun','Shalhoub','Irides'];
var professions = ['Guard','Baker','Pilot','Peddler','Tailor','Medicurg','Soldier','Street urchin','Homeless','Chef','Jelloun','Deckhand','Officer','Noble','Agent','Courtesan','Artist','Poet','Writer','Student','Child','Mystic','Priest','Scientist','Archaeologist','Academic','Thief','Gang member','Assassin','Waiter','Prospector','Pilgrim','Judicator','Samaritan','Captain','Criminal'];
var characteristics = ['Fat','Skinny','Good-looking','Seductive','Smells bad','Smells good','Tall','Short','Always smiling','Moping','Stevedore','Depressed','Always joking','Hums','Clicks mouth','Fiddles with something','Tired','Lovesick','Elegant','Bejeweled','Tattooed','Grand hairstyle','Bearded','Bio sculpted','Cyber eye','Cyber arm','Always eating','In despair','Hateful','Walks with a limp','Broken nose','Sweaty','Perfumed','Drunk','Slow','Suspicious'];
var activities = ['Searching','Making friends','Rambling tediously','Flirts','Looking for a fight','On a stroll','Working','Chasing something','Is lost','Guarding something','Brat Drinking','Partying','Eating','Bickering','In a discussion','Studying','Reading','Resting','Mending something','Showing something','Staring','Hanging out','Smoking','Writing','Preaching','Hiding','Sleeping','On a delivery','Looking to sell something','Using a tabula','Collapsing','Stealing something','Praying to an Icon','Threatening someone','Helping someone','Getting into trouble'];

$(document).ready(function(){
    $(".generate-npcs").click(function(){ getNPCs(); });
    getNPCs();
});

function getNPCs(count=16) {
    $(".npcs").empty();
    for (let index = 0; index < count; index++) {
        getNPC();
    }
}

function getNPC() {
    var firstName = getRandomElement(firstNames);
    var lastName = getRandomElement(lastNames);
    var profession = getRandomElement(professions);
    var characteristic = getRandomElement(characteristics);
    var activity = getRandomElement(activities);
    var npc = `<div class="npc">
            <div class="name">{0} {1}</div>
            <div class="profession">{2}</div>
            <div class="characteristic">{3}</div>
            <div class="activity">{4}</div>
        </div>`.format(firstName, lastName, profession, characteristic, activity);
    $(".npcs").append(npc);
}