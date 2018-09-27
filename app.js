var targetScore = Math.floor(Math.random() * Math.floor(20));
var win = 0
var loss = 0
var playerScore = 0
var crystals = [{ 
        gem: "diamond",
        img: "assets/blue.jpg"
    }, { 
        gem: "emerald",
        img: "assets/green.jpg"
    }, {
        gem: "purple",
        img: "assets/purple.jpg"
    }, {
        gem: "white",
        img: "assets/white.jpg"
    }
]
$(document).ready(function () {

    function makeCrystalbutton() {
        var crystalsContainer = $("#crystals")

        for (i = 0; i < crystals.length; i++) {
            var crystalSection= $("<div>")
            var crystalImage = $("<img>")
            crystalImage.attr("src", crystals[i].img);
            crystalImage.addClass("crystal-image")
            var crystalButton = $("<button>")
            crystalButton.text(crystals[i].gem)
            crystalSection.append(crystalButton)
            crystalSection.append(crystalImage)
            crystalsContainer.append(crystalSection)
        }
    }
    makeCrystalbutton()
})