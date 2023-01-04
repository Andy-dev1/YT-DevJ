let lastPos=1;
const championData=[{
    name:'TALON',
    subtitle:"THE BLADE'S SHADOW",
    text:'Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive. Adopted by the notorious Du Couteau family, he now plies his deadly trade at the empire’s command, assassinating enemy leaders, captains, and heroes… as well as any Noxian foolish enough to earn the scorn of their masters.',
    position:'1',
    
},
{
    name:'ZILEAN',
    subtitle:'THE CHRONOKEEPER',
    text:'Once a member of Icathia’s governing council, Zilean is a prodigious elemental mage who seeks mastery over time itself. After using his powers in an attempt to save his people from the Void, he now drifts through the past, present, and future, bending and warping the flow of time around him. Zilean has traveled from Runeterra’s mysterious creation, all the way to its seemingly inevitable ending, searching tirelessly for any strand of fate that might undo his homeland’s destruction.',
    position:'2',
    
},
{
    name:'ILLAOI',
    subtitle:'THE KRAKEN PRIESTESS',
    text:"Illaoi’s powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes’ spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer of Nagakabouros” soon discover Illaoi never battles alone—the god of the Serpent Isles fights by her side.",
    position:'2',
    
},
{
    name:'JINX',
    subtitle:'THE LOOSE CANNON',
    text:'Amanic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.',
    position:'1',
    
},
{
    name:'ILLAOI',
    subtitle:'THE KRAKEN PRIESTESS',
    text:"Illaoi’s powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes’ spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer of Nagakabouros” soon discover Illaoi never battles alone—the god of the Serpent Isles fights by her side.",
    position:'2',
    
}];



const insertButton=()=>{
    const buttonBox=document.getElementById('button-box');
    championData.forEach((item,index)=>{
        let button=document.createElement("button");
        button.style.backgroundImage=`url('./assets/champions/icons/${item.name}.png')`;
        button.onclick=()=>{
            changeDataText(index);
        }
        buttonBox.append(button);
    })
}

const changeDataText=(championNumber)=>{
    document.getElementById(`title-${lastPos}`).innerHTML=``;
    document.getElementById(`subtitle-${lastPos}`).innerHTML=``;
    document.getElementById(`text-${lastPos}`).innerHTML=``;

    document.getElementById(`title-${championData[championNumber].position}`).innerHTML=championData[championNumber].name;
    document.getElementById(`subtitle-${championData[championNumber].position}`).innerHTML=championData[championNumber].subtitle;
    document.getElementById(`text-${championData[championNumber].position}`).innerHTML=championData[championNumber].text;

    document.getElementById('content').style.backgroundImage=`url('./assets/champions/background/${championData[championNumber].name}.jpg')`

    lastPos=championData[championNumber].position;
}

insertButton();
changeDataText(0);