let configs = [{
    "id": 1,
    "question": "You'll take a long trip, who do you want to bring?",
    "anwser1": "Family|wisdom|50|80",
    "anwser2": "Best friend|strength|50|80",
    "anwser3": "Partner|charisma|50|80",
    "anwser4": "No one|dexterity|50|80"
}, {
    "id": 2,
    "question": "What do you think is your biggest flaw?",
    "anwser1": "Laziness|wisdom|50|80",
    "anwser2": "Jealousy|charisma|50|80",
    "anwser3": "Arrogance|strength|50|80",
    "anwser4": "Timidit|vitality|50|80"
}, {
    "id": 3,
    "question": "What ability of yours do you think stands out the most?",
    "anwser1": "Looks|charisma|50|80",
    "anwser2": "Wealth|intelligence|50|80",
    "anwser3": "Knowledge|wisdom|50|80",
    "anwser4": "Strength|strength|50|80"
}, {
    "id": 4,
    "question": "What do you think is the least likely thing for you to do as a human being?",
    "anwser1": "Deceive|intelligence|50|80",
    "anwser2": "Sacrifice|vitality|50|80",
    "anwser3": "Steal|dexterity|50|80",
    "anwser4": "Kill|strength|50|80"
}, {
    "id": 5,
    "question": "What do you think is the best way to rule over others?",
    "anwser1": "Military might|strength|50|80",
    "anwser2": "Religion|intelligence|50|80",
    "anwser3": "Reputation|charisma|50|80",
    "anwser4": "Interests|wisdom|50|80"
}, {
    "id": 6,
    "question": "If you had to kill someone, what do you think would be the reason?",
    "anwser1": "Revenge|wisdom|50|80",
    "anwser2": "Eliminating evil|strength|50|80",
    "anwser3": "Maintaining self-respect|vitality|50|80",
    "anwser4": "Self-interest|dexterity|50|80"
}, {
    "id": 7,
    "question": "Which aspect of your lover do you value more?",
    "anwser1": "Knowledge and competence|dexterity|50|80",
    "anwser2": "Background and wealth|vitality|50|80",
    "anwser3": "Beauty and youth|charisma|50|80",
    "anwser4": "Talent and temperament|intelligence|50|80"
}, {
    "id": 8,
    "question": "What does victory mean to you?",
    "anwser1": "Eliminating the enemy|dexterity|50|80",
    "anwser2": "Ending the war|wisdom|50|80",
    "anwser3": "Defending the nation|charisma|50|80",
    "anwser4": "Demonstrating strength|strength|50|80"
}, {
    "id": 9,
    "question": "If you could obtain a sage's book, what content would you hope it contains?",
    "anwser1": "The secret of immortality|vitality|50|80",
    "anwser2": "Battle techniques|dexterity|50|80",
    "anwser3": "The way to wealth|intelligence|50|80",
    "anwser4": "How to control human nature|charisma|50|80"
}, {
    "id": 10,
    "question": "If fulfilling your wish required a price, which one would you choose?",
    "anwser1": "Ugly appearance|charisma|50|80",
    "anwser2": "Lonely life|strength|50|80",
    "anwser3": "Endless fear|intelligence|50|80",
    "anwser4": "Mangled body|vitality|50|80"
}, {
    "id": 11,
    "question": "The prisoner in front of you killed your subordinates before. How would you deal with him?",
    "anwser1": "Lifelong imprisonment|wisdom|50|80",
    "anwser2": "Beheading|strength|50|80",
    "anwser3": "Exile|dexterity|50|80",
    "anwser4": "Forgiveness|charisma|50|80"
},

];

export const getQuesting = () => {
    let result = [];
    for (let i = 0; i < configs.length; i++) {
        let config = configs[i];
        let awnser1 = config.anwser1.split('|')
        let awnser2 = config.anwser2.split('|')
        let awnser3 = config.anwser3.split('|')
        let awnser4 = config.anwser4.split('|')

        result.push({
            question: config['question'], awnser: [{
                text: awnser1[0], target: awnser1[1], min: (Number)(awnser1[2]), max: (Number)(awnser1[3]),
            }, {
                text: awnser2[0], target: awnser2[1], min: (Number)(awnser2[2]), max: (Number)(awnser2[3]),
            }, {
                text: awnser3[0], target: awnser3[1], min: (Number)(awnser3[2]), max: (Number)(awnser3[3]),
            }, {
                text: awnser4[0], target: awnser4[1], min: (Number)(awnser4[2]), max: (Number)(awnser4[3]),
            }]
        })
    }
    return result;
}