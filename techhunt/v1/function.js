var riddles = {
    set1r2:"ans",
    set1r3:"ans",
    
    set2r2:"ans",
    set2r3:"ans",

    set3r2:"ans",
    set3r3:"ans",

    set4r2:"ans",
    set4r3:"ans",
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