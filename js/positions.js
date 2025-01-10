let positions = [
"./positions/G-Spot-Sniper-Sex-Position-Illustration.jpg",
"./positions/Doggy-Style-Sex-Position-Illustration.jpg",
"./positions/69-Sex-Position-Illustration.jpg",
"./positions/Mastery-Sex-Position-Illustration.jpg",
"./positions/Asian-Cowgirl-Sex-Position-Illustration.jpg",
"./positions/Acrobat-Sex-Position-Illustration.jpg",
"./positions/Amazon-Sex-Position-Illustration.jpg",
"./positions/Anvil-Sex-Position-Illustration.jpg",
"./positions/Back-Seat-Driver-Sex-Position-Illustration.jpg",
"./positions/Ballerina-Sex-Position.jpg",
"./positions/Basset-Hound-Sex-Position-Illustration.jpg",
"./positions/Ben-Dover-Sex-Position-Illustration.jpg",
"./positions/Bended-Knee-Sex-Position-Illustration.jpg",
"./positions/Bent-Spoon-Sex-Position-Illustration.jpg",
"./positions/Betty-Rocker-Sex-Position-Illustration.jpg",
"./positions/Big-Dipper-Sex-Position-Illustration.jpg",
"./positions/Bodyguard-Sex-Position-Illustration.jpg",
"./positions/Book-Ends-Sex-Position.jpg",
"./positions/Bouncing-Spoon-Sex-Position-Illustration.jpg",
"./positions/Bridge-Sex-Position-Illustration.jpg",
"./positions/Brute-Sex-Position-Illustration.jpg",
"./positions/Bulldog-Sex-Position-Illustration.jpg",
"./positions/Bumper-Cars-Sex-Position-Illustration.jpg",
"./positions/Burning-Man-Sex-Position-Illustration.jpg",
"./positions/Butterfly-Sex-Position-Illustration.jpg",
"./positions/Chair-Riding-Sex-Position-Illustration.jpg",
"./positions/Coital-Alignment-Technique-Sex-Position-Illustration.jpg",
"./positions/Corner-Cowgirl-Sex-Position-Illustration.jpg",
"./positions/Corner-Doggy-Style-Sex-Position-Illustration.jpg",
"./positions/Cowboy-Sex-Position-Illustration.jpg",
"./positions/Cowgirl-Sex-Position-Illustration.jpg",
"./positions/Crab-Sex-Position-Illustration.jpg",
"./positions/Criss-Cross-Sex-Position-Illustration.jpg",
"./positions/Cross-Sex-Position-Illustration.jpg",
"./positions/Dancer-Sex-Position-Illustration.jpg",
"./positions/Deckchair-Sex-Position-Illustration.jpg",
"./positions/Deep-Impact-Sex-Position-Illustration-1.jpg",
"./positions/Delight-Sex-Position-Illustration.jpg",
"./positions/Down-Stroke-Sex-Position-Illustration.jpg",
"./positions/Drill-Sex-Position-Illustration.jpg",
"./positions/Dublin-Shuffle-Sex-Position-Illustration.jpg",
"./positions/Exposed-Eagle-Sex-Position-Illustration.jpg",
"./positions/Face-Off-69-Position-Illustration.jpg",
"./positions/Fast-Fuck-Sex-Position-Illustration.jpg",
"./positions/Final- Furlong-Sex-Position-Illustration.jpg",
"./positions/Fire-Hydrant-Sex-Position-Illustration.jpg",
"./positions/Frog-Leap-Sex-Position-Illustration.jpg",
"./positions/Golden-Gate-69-Position-Illustration.jpg",
"./positions/Hang-Loose-Sex-Position-Illustration.jpg",
"./positions/High-Chair-Sex-Position-Illustration.jpg",
"./positions/Intersection-Sex-Position-Illustration.jpg",
"./positions/Irish-Garden-Sex-Position-Illustration.jpg",
"./positions/Italian-Hanger-Sex-Position-Illustration.jpg",
"./positions/Jellyfish-Sex-Position-Illustration.jpg",
"./positions/Jockey-Sex-Position-Illustration.jpg",
"./positions/Jugghead-Sex-Position-Illustration.jpg",
"./positions/Launch-Pad-Sex-Position-Illustration.jpg",
"./positions/Lazy-Wheelbarrow-Sex-Position-Illustration.jpg",
"./positions/Leap-Frog-Sex-Position-Illustration.jpg",
"./positions/Leg-Glider-Sex-Position-Illustration.jpg",
"./positions/Legs-On-Shoulder-Sex-Position-Illustration.jpg",
"./positions/Legs-Spread-Sex-Position-Illustration.jpg",
"./positions/Life-Raft-Sex-Position-Illustration.jpg",
"./positions/Little-Dipper-Sex-Position-Illustration.jpg",
"./positions/Lotus-Sex-Position-Illustration.jpg",
"./positions/Lunge-Sex-Position-Illustration.jpg",
"./positions/Mongolian-Smurf-Sex-Position-Illustration.jpg",
"./positions/Octopus-Sex-Position-Illustration.jpg",
"./positions/Piledriver-Sex-Position-Illustration.jpg",
"./positions/Piston-Sex-Position-Illustration.jpg",
"./positions/Poles-Apart-Sex-Position-Illustration.jpg",
"./positions/Pump-Sex-Position-Illustration.jpg",
"./positions/Rear-Admiral-Sex-Position-Illustration.jpg",
"./positions/Rear-Entry-Sex-Position-Illustration.jpg",
"./positions/Right-Angle-Sex-Position-Illustration.jpg",
"./positions/Sandwich-Sex-Position-Illustration.jpg",
"./positions/Scissors-Sex-Position-Illustration.jpg",
"./positions/See-Saw-Sex-Position-Illustration.jpg",
"./positions/Shoe-Shiner-Sex-Position-Illustration.jpg",
"./positions/Side-Entry-Missionary-Sex-Position-Illustration.jpg",
"./positions/Side-Ride-Sex-Position-Illustration.jpg",
"./positions/Side-Saddle-Sex-Position-Illustration.jpg",
"./positions/Sitting-Sex-Position.jpg",
"./positions/Sliding-Lady-Sex-Position-Illustration.jpg",
"./positions/Spooning-Sex-Position-Illustration.jpg",
"./positions/Sporking-Sex-Position-Illustration.jpg",
"./positions/Stairway-To-Heaven-Sex-Position-Illustration.jpg",
"./positions/Stand-And-Carry-Sex-Position-Illustration.jpg",
"./positions/Supergwoman-Sex-Position-Illustration.jpg",
"./positions/Suspended-69-Position-Illustration.jpg",
"./positions/Swiss-Miss-Sex-Position-Picture.jpg",
"./positions/Subian-Sex-Position-Illustration.jpg",
"./positions/Tea-Spooning-Sex-Position-Illustration.jpg",
"./positions/Thigh-Tide-Sex-Position-Illustration.jpg",
"./positions/Tug-Of-Love-Sex-Position-Illustration.jpg",
"./positions/Turtle-Sex-Position-Illustration.jpg",
"./positions/Twister-Sex-Position-Illustration.jpg",
"./positions/Viennese-Oyster-Sex-Position-Illustration.jpg",
"./positions/Washing-Machine-Sex-Position-Illustration.jpg",
"./positions/X-Marks-The-Post-Sex-Position-Illustration.jpg",
];

$(function () {
    let vip = localStorage.getItem("vip");
    let length = 10;
    if (vip) {
        length = 100;
        $("#position-count").text(100);
        $("#goabout").hide();
    }
    $("#card").on("change", () => {
        $("#position").attr("src", "");
        if (!$("#card")[0].checked) {
            new Howl({
                src: "Gold2.wav",
                format: ["mp3"],
                autoplay: true,
                onload: function () {
                    window.voice = null;
                },
            });
            let src = positions[Math.floor(length * Math.random())];
            setTimeout(function () {
                $("#position").attr("src", src);
            }, 200);
        }
    });
});
