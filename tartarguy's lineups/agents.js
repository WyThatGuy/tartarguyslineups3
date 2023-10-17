var text = document.getElementById("textArt")
var agentFull = document.getElementById("agentArt")
var prevAgent = "Viper"

function changeAgent(agent) {
    if (prevAgent != agent){
        text.classList.add("out")
        agentFull.classList.add("out")
        setTimeout(function () {
            text.src = "backgroundText/" + agent + "_Background_Text.webp"
            agentFull.src = "fullArt/" + agent + "_Artwork_Full.webp"
            text.classList.remove("out")
            agentFull.classList.remove("out")
            text.classList.add("inText")
            agentFull.classList.add("in")
            setTimeout(function () {
                text.classList.remove("inText")
                agentFull.classList.remove("in")
            }, 100)
        }, 100)
    }
    prevAgent = agent
}

