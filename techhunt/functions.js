var riddles = {
    q001:{
        question:"I’m very popular and easiest language, my name is based on animal/reptile.",
        answer:"python",
    },
    q002:{
        question:"I am the building blocks and skeleton of a digital page, which language I am? ",
        answer:"html",
    },
    q003:{
        question:"I like to design everything on a digital page, which language I am? ",
        answer:"css",
    },
    q004:{
        question:"I am very popular language used in many fields, very famous in giving functionality.",
        answer:"javascript",
    },
};
function card(place,tech){
    return `
            <h2 class="center">Riddle 1 - Place Riddle</h2>
            <p class="center">
                ` + place + `
            </p>
            <h2 class="center">Riddle 2 - Tech Riddle</h2>
            <p class="center">`+ tech + `</p>
        `;
}