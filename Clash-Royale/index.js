const carousels = document.querySelectorAll("carousel");


const card_titles = [
    ["Mini P.E.K.K.A", "Mini P.E.K.K.A is a single-target melee troop known for its high damage output and moderate hitpoints. It is effective against high-health units and can quickly eliminate enemy troops and buildings."],
    ["Rage", "Rage is a spell card that increases the movement and attack speed of friendly troops within its area of effect. It is often used to boost the effectiveness of troops during critical moments in battle."],
    ["Tesla", "Tesla is a defensive building that remains hidden until enemy troops come within its range. It deals moderate damage with a fast attack speed, making it effective against both ground and air units."],
    ["Archer Queen", "Archer Queen is a Champion card that wields a powerful bow and has the ability to become invisible for a short duration. She excels at dealing damage from a distance and can target both ground and air units."],
    ["Heroic Knight", "Heroic Knight is a Heroic troop that possesses enhanced abilities compared to regular troops. It has higher hitpoints and damage, making it a formidable presence on the battlefield."]
]

carousels.forEach((c)=> {
    c.style.setProperty("--current-card", c.dataset.startCard)
    c.style.setProperty("--card-width", c.dataset.cardWidth)
    c.style.setProperty("--card-height", c.dataset.cardHeight)

    var cardInfoTitle = document.querySelector("#cardInfoTitle");
    var cardInfoContent = document.querySelector("#cardInfoContent");

    const cards = c.querySelectorAll("card")

    cards.forEach((card, i) => {
        card.style.setProperty("--place", i)
    })    

    c.querySelector("#next").addEventListener("click", () => {
        c.style.setProperty("--current-card", parseInt(c.style.getPropertyValue("--current-card"))+1)
        if (parseInt(c.style.getPropertyValue("--current-card")) > cards.length-1)
            c.style.setProperty("--current-card", 0);
        cardInfoTitle.innerHTML = card_titles[parseInt(c.style.getPropertyValue("--current-card"))][0];
        cardInfoContent.innerHTML = card_titles[parseInt(c.style.getPropertyValue("--current-card"))][1];
    })
     c.querySelector("#prev").addEventListener("click", () => {
        c.style.setProperty("--current-card", parseInt(c.style.getPropertyValue("--current-card"))-1)
        if (parseInt(c.style.getPropertyValue("--current-card")) < 0)
            c.style.setProperty("--current-card", cards.length-1);
        cardInfoTitle.innerHTML = card_titles[parseInt(c.style.getPropertyValue("--current-card"))][0];
        cardInfoContent.innerHTML = card_titles[parseInt(c.style.getPropertyValue("--current-card"))][1];
    })
})

function pausePlay() {
    const theVideo = document.querySelector("#gameplayVideo");
    const theButton = document.querySelector("#playPause");

    if (!theVideo) return;

    if (theVideo.paused) {
        theVideo.play();
        if (theButton) theButton.textContent = "Pause";
    } else {
        theVideo.pause();
        if (theButton) theButton.textContent = "Play";
    }
}
