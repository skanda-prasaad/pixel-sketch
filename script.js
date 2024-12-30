document.addEventListener("DOMContentLoaded", function () {
    let colorChoice = 'black'; // Default color choice

    // Event listener for the play button to create a grid
    const popup = document.querySelector("#play");
    popup.addEventListener("click", () => {
        let size = getSize();
        if (size) {
            createGrid(size);
        }
    });

    // Function to create a grid based on the selected size
    function createGrid(size) {
        const container = document.querySelector('.container');
        container.innerHTML = ""; // Clear any existing grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let numOfBox = size * size;
        for (let i = 0; i < numOfBox; i++) {
            let box = document.createElement("div");
            box.style.border = "1px solid lightgray"; // Optional: for visibility
            box.addEventListener("mouseover", applyColor);
            container.appendChild(box);
        }
    }

    // Function to get the size of the grid from the user
    function getSize() {
        let input = prompt("Enter the size of the grid (between 2 and 100):");
        let msg = document.querySelector(".message");

        if (!input || isNaN(input)) {
            msg.innerHTML = "Please provide a valid number.";
            return null;
        } else if (input < 2 || input > 100) {
            msg.innerHTML = "Enter a size between 2 and 100.";
            return null;
        } else {
            msg.innerHTML = "Enjoy the game!";
            return parseInt(input);
        }
    }

    // Function to apply color based on the selected mode
    function applyColor() {
        if (colorChoice === 'random') {
            this.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        } else {
            this.style.backgroundColor = 'black';
        }
    }

    // Function to generate a random color value (0 to 255)
    function randomColor() {
        return Math.floor(Math.random() * 256);
    }

    // Function to set the color mode
    window.setColor = function (choice) {
        colorChoice = choice;
    };

    // Function to reset the grid
    window.reset = function () {
        const boxes = document.querySelectorAll('.container div');
        boxes.forEach(box => (box.style.backgroundColor = 'white'));
    };
});
