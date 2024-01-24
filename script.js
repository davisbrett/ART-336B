// 1 --------------------- //
function changeColor(element) {
    element.style.backgroundColor = '#d62306';
}

// 21 --------------------- //
document.addEventListener('DOMContentLoaded', function () {
    var refreshButton = document.querySelector('#twentyone .button21');

    if (refreshButton) {
        refreshButton.addEventListener('click', function () {
            location.reload();
        });
    }
});

// 22 --------------------- //
document.addEventListener('DOMContentLoaded', function () {
    var twentyTwoButton = document.getElementById('twentytwo');

    twentyTwoButton.addEventListener('click', function () {
        var buttonText = twentyTwoButton.querySelector('.number').textContent;
        var newText = buttonText + '22';
        twentyTwoButton.querySelector('.number').textContent = newText;
    });
});

// 23 --------------------- //
document.addEventListener('DOMContentLoaded', function () {
    var twentyThreeButton = document.getElementById('twentythree');

    twentyThreeButton.addEventListener('click', function () {
        twentyThreeButton.querySelector('.number').classList.add('button-bounce');
        setTimeout(function () {
            twentyThreeButton.querySelector('.number').classList.remove('button-bounce');
        }, 500);
    });
});

// 24 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button24 = document.querySelector("#twentyfour button");
    var allElements = document.querySelectorAll("*");

    button24.addEventListener("click", function () {
        allElements.forEach(function (element) {
            element.classList.toggle("red-border");
        });
    });
});

// 25 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button25 = document.querySelector("#twentyfive button");

    button25.addEventListener("click", function () {
        window.location.href = "mailto:brettdavis@wustl.edu";
    });
});

// 26 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button26 = document.querySelector("#twentysix button");

    button26.addEventListener("click", function () {
        window.print();
    });
});

// 27 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button27 = document.querySelector("#twentyseven button");

    button27.addEventListener("click", function () {
        var currentFont = document.body.style.fontFamily;
        if (currentFont === 'Helvetica, sans-serif') {
            document.body.style.fontFamily = 'roc-grotesk, sans-serif';
        } else {
            document.body.style.fontFamily = 'Helvetica, sans-serif';
        }
    });
});

// 28 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button28 = document.querySelector("#twentyeight button");

    button28.addEventListener("click", function () {
        var currentColor = document.body.style.color;
        if (currentColor === 'blue') {
            document.body.style.color = 'black';
        } else {
            document.body.style.color = 'blue';
        }
    });
});

// 29 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button29 = document.querySelector("#twentynine button");
    var count = 0;

    button29.addEventListener("click", function () {
        count++;
        button29.textContent = count * count;
    });
});

// 30 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var button30 = document.querySelector("#thirty .button30");

    function updateCurrentTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        button30.textContent = formattedTime;
    }

    button30.addEventListener("mouseover", function () {
        updateCurrentTime();
    });

    button30.addEventListener("mouseout", function () {
        button30.textContent = "Time";
    });
});

// 31 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtyOne = document.getElementById("thirtyone");
    var button31 = document.querySelector(".button31");

    thirtyOne.addEventListener("click", function () {
        button31.classList.toggle("letter-spacing");
    });
});

// 32 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtyTwo = document.getElementById("thirtytwo");
    var button32 = document.querySelector(".button32");

    thirtyTwo.addEventListener("click", function () {
        button32.classList.toggle("letter-spacing2");
    });
});

// 33 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtyThree = document.getElementById("thirtythree");
    var button33 = document.querySelector(".button33");

    thirtyThree.addEventListener("click", function () {
        var count = 10;
        button33.innerText = count;

        var countdownInterval = setInterval(function () {
            count--;
            button33.innerText = count;
            if (count === 0) {
                button33.innerText = "Countdown";
                clearInterval(countdownInterval);
            }
        }, 1000);
    });
});

// 34 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtyFour = document.getElementById("thirtyfour");

    thirtyFour.addEventListener("mouseover", function () {
        document.body.style.cursor = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"10\" fill=\"white\"/></svg>') 10 10, auto";
    });

    thirtyFour.addEventListener("mouseout", function () {
        document.body.style.cursor = "auto";
    });
});

// 35 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtyFive = document.getElementById("thirtyfive");

    thirtyFive.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// 36 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtysixButton = document.querySelector("#thirtysix .button36");
    thirtysixButton.addEventListener("click", function () {

        var randomNumber = Math.floor(Math.random() * 1000000) + 1;
        thirtysixButton.textContent = randomNumber.toString();
    });
});

// 37 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtySeven = document.getElementById("thirtyseven");

    thirtySeven.addEventListener("mouseover", function () {
        document.body.style.cursor = "help";
    });

    thirtySeven.addEventListener("mouseout", function () {
        document.body.style.cursor = "auto";
    });
});

// 38 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtyeightButton = document.querySelector("#thirtyeight .button38");

    thirtyeightButton.addEventListener("click", function () {
        var randomImageUrl = "https://source.unsplash.com/random";
        thirtyeightButton.style.backgroundImage = "url('" + randomImageUrl + "')";
    });
});

// 39 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var thirtynineButton = document.querySelector("#thirtynine .button39");
    var numberElements = document.querySelectorAll(".number");

    thirtynineButton.addEventListener("click", function () {
        numberElements.forEach(function (number) {
            var currentNumber = parseInt(number.textContent);
            number.textContent = currentNumber + 1;
        });
    });
});

// 40 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyButton = document.querySelector("#forty .button40");
    var liElements = document.querySelectorAll("li");
    var allButtons = document.querySelectorAll("button");
    var allNumbers = document.querySelectorAll(".number");
    var originalColors = [];
    var originalButtonColors = [];
    var originalNumberColors = [];

    liElements.forEach(function (li) {
        originalColors.push(li.style.backgroundColor);
    });

    allButtons.forEach(function (button) {
        originalButtonColors.push(button.style.backgroundColor);
    });

    allNumbers.forEach(function (number) {
        originalNumberColors.push(number.style.color);
    });

    var isGray = false;

    fortyButton.addEventListener("click", function () {
        liElements.forEach(function (li, index) {
            if (isGray) {
                li.style.backgroundColor = originalColors[index];
            } else {
                li.style.backgroundColor = "gray";
            }
        });

        allButtons.forEach(function (button, index) {
            if (isGray) {
                button.style.backgroundColor = originalButtonColors[index];
            } else {
                button.style.backgroundColor = "gray";
            }
        });

        allNumbers.forEach(function (number, index) {
            if (isGray) {
                number.style.color = originalNumberColors[index];
            } else {
                number.style.color = "black";
            }
        });
        isGray = !isGray;
    });
});

// 41 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyoneButton = document.querySelector("#fortyone .button41");

    fortyoneButton.addEventListener("click", function () {
        window.open("https://www.google.com", "_blank");
    });
});

// 42 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyTwoButton = document.querySelector("#fortytwo");
    var numberElement = document.querySelector("#fortytwo .number");
    var originalFontSize = window.getComputedStyle(numberElement).fontSize;
    var isEnlarged = false;

    fortyTwoButton.addEventListener("click", function () {
        if (isEnlarged) {
            numberElement.style.fontSize = originalFontSize;
        } else {
            var currentFontSize = parseFloat(originalFontSize);
            numberElement.style.fontSize = (currentFontSize * 8) + "px";
        }
        isEnlarged = !isEnlarged;
    });
});

// 43 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortythreeButton = document.querySelector("#fortythree .button43");
    var liElements = document.querySelectorAll("li");
    var allButtons = document.querySelectorAll("button");
    var allNumbers = document.querySelectorAll(".number");
    var originalColors = [];
    var originalButtonColors = [];
    var originalNumberColors = [];

    liElements.forEach(function (li) {
        originalColors.push(li.style.backgroundColor);
    });

    allButtons.forEach(function (button) {
        originalButtonColors.push(button.style.backgroundColor);
    });

    allNumbers.forEach(function (number) {
        originalNumberColors.push(number.style.color);
    });

    var getRandomColor = function () {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    var setRandomColors = function () {
        liElements.forEach(function (li) {
            li.style.backgroundColor = getRandomColor();
        });

        allButtons.forEach(function (button) {
            button.style.backgroundColor = getRandomColor();
        });

        allNumbers.forEach(function (number) {
            number.style.color = "black";
        });
    };

    var isRandom = false;

    fortythreeButton.addEventListener("click", function () {
        if (isRandom) {
            liElements.forEach(function (li, index) {
                li.style.backgroundColor = originalColors[index];
            });

            allButtons.forEach(function (button, index) {
                button.style.backgroundColor = originalButtonColors[index];
            });

            allNumbers.forEach(function (number, index) {
                number.style.color = originalNumberColors[index];
            });
        } else {
            setRandomColors();
        }
        isRandom = !isRandom;
    });
});

// 44 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyfourButton = document.querySelector("#fortyfour .button44");
    var allElements = document.querySelectorAll("*");
    var isShrunk = false;

    fortyfourButton.addEventListener("click", function () {
        allElements.forEach(function (element) {
            if (isShrunk) {
                element.style.transform = "scale(1)";
            } else {
                element.style.transform = "scale(0.9)";
            }
        });
        isShrunk = !isShrunk;
    });
});

// 45 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyfiveButton = document.querySelector("#fortyfive .button45");
    var allElements = document.querySelectorAll("*");
    var isBlurred = false;

    fortyfiveButton.addEventListener("click", function () {
        allElements.forEach(function (element) {
            if (isBlurred) {
                element.style.filter = "none";
            } else {
                element.style.filter = "blur(3px)";
            }
        });
        isBlurred = !isBlurred;
    });
});

// 46 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortySixButton = document.querySelector("#fortysix .button46");

    fortySixButton.addEventListener("click", function () {
        var currentFontWeight = window.getComputedStyle(fortySixButton).fontWeight;
        var newFontWeight = currentFontWeight === "700" ? "normal" : "700";
        fortySixButton.style.fontWeight = newFontWeight;
    });
});

// 47 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortySevenButton = document.querySelector("#fortyseven");
    var elementsToToggle = document.querySelectorAll(".number, button, .button10, .button11, .button13");
    var isHidden = false;

    fortySevenButton.addEventListener("click", function () {
        elementsToToggle.forEach(function (element) {
            if (isHidden) {
                element.style.visibility = "visible";
            } else {
                element.style.visibility = "hidden";
            }
        });
        isHidden = !isHidden;
    });
});

// 48 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyEightButton = document.querySelector("#fortyeight");

    fortyEightButton.addEventListener("click", function () {
        fortyEightButton.classList.toggle("flip");
    });
});

// 49 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fortyNineButton = document.querySelector("#fortynine");

    fortyNineButton.addEventListener("click", function () {
        fortyNineButton.textContent = "Forty-nine";

        var fortyNineText = document.querySelector("#fortynine .number");
        fortyNineText.classList.add("fortynine-text");
    });
});

// 50 --------------------- //
document.addEventListener("DOMContentLoaded", function () {
    var fiftyButton = document.querySelector("#fifty");

    fiftyButton.addEventListener("click", function () {
        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0, 0, 0, 0.7)";
        overlay.style.zIndex = "9999";

        var iframe = document.createElement("iframe");
        iframe.src = "https://giphy.com/embed/5jT0jaNDsM6Ik7X9yq";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.classList.add("giphy-embed");
        iframe.allowFullscreen = true;

        overlay.appendChild(iframe);
        document.body.appendChild(overlay);

        setTimeout(function () {
            overlay.remove();
        }, 5000);
    });
});
