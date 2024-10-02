const crosswordSets = {
    1: {
        title: "Regional Economic Development",
        gridDimensions: { rows: 14, cols: 19 },
        clues: {
            across: [
                { clue: "1. Economic integration between countries in a region.", answer: "Regionalism" },
                { clue: "2. Regional development initiatives to promote economic growth.", answer: "Development" },
                { clue: "3. Trade agreements that reduce barriers between countries.", answer: "Trade" },
                { clue: "4. European Union.", answer: "EU" },
                { clue: "5. Scale economies achieved through regional cooperation.", answer: "Economies" }
            ],
            down: [
                { clue: "6. Infrastructure investments to improve connectivity.", answer: "Infrastructure" },
                { clue: "7. Labor mobility between countries.", answer: "Mobility" },
                { clue: "8. Competition among countries within a region.", answer: "Competition" },
                { clue: "9. Currency union where countries share a common currency.", answer: "Monetary" },
                { clue: "10. North American Free Trade Agreement.", answer: "NAFTA" }
            ]
        },
        words: [
            { word: "Regionalism", startRow: 1, startCol: 5, direction: "across", clueNumber: 1 },
            { word: "Development", startRow: 6, startCol: 0, direction: "across", clueNumber: 2 },
            { word: "Trade", startRow: 10, startCol: 10, direction: "across", clueNumber: 3 },
            { word: "EU", startRow: 11, startCol: 9, direction: "across", clueNumber: 4 },
            { word: "Economies", startRow: 13, startCol: 10, direction: "across", clueNumber: 5 },
            { word: "Infrastructure", startRow: 0, startCol: 10, direction: "down", clueNumber: 6 },
            { word: "Mobility", startRow: 2, startCol: 4, direction: "down", clueNumber: 7 },
            { word: "Competition", startRow: 3, startCol: 6, direction: "down", clueNumber: 8 },
            { word: "Monetary", startRow: 3, startCol: 8, direction: "down", clueNumber: 9 },
            { word: "NAFTA", startRow: 6, startCol: 12, direction: "down", clueNumber: 10 }
        ],
        notes: [
            "Refers to economic integration between countries within a region to facilitate trade, economic cooperation, and collective growth",
            "This involves trade agreements that reduce barriers such as tariffs and quotas between countries to encourage smoother and more efficient international trade.",
            "Currency unions, where countries share a common currency, like the Eurozone, to promote economic stability and easier transactions across borders.",
            "The North American Free Trade Agreement, which promotes free trade between the U.S., Canada, and Mexico by eliminating trade barriers.",
            "Regional development initiatives are efforts to promote economic growth through infrastructure improvements, financial assistance, and social development programs.",
            "Investments in infrastructure aim to improve connectivity between countries by building better roads, bridges, ports, and communication networks.",
            "Labor mobility between countries is essential for the free movement of workers, allowing for better allocation of skills and labor resources across regions.",
            "Achieving scale economies through regional cooperation involves countries working together to increase efficiency and reduce costs in production and trade."
        ],
    },

    2: {
        title: "Introduction to International Business",
        gridDimensions: { rows: 18, cols: 16 }, // Ensure this matches your word placements
        clues: {
            across: [
                { clue: "1. External factor influenced by political events and policies.", answer: "Political" },
                { clue: "2. External factor influenced by cultural differences and norms.", answer: "Cultural" },
                { clue: "3. Internal factor related to a company’s management structure.", answer: "Management" },
                { clue: "4. External factor influenced by legal and regulatory frameworks.", answer: "Legal" },
                { clue: "5. External factor influenced by economic conditions and trends.", answer: "Economic" },
            ],
            down: [
                { clue: "6. Internal factor related to a company’s human resources.", answer: "HumanResources" },
                { clue: "7. External factor influenced by technological advancements.", answer: "Technological" },
                { clue: "8. Internal factor related to a company’s marketing strategies.", answer: "Marketing" },
                { clue: "9. Internal factor related to a company’s technological capabilities.", answer: "Technology" },
                { clue: "10. Internal factor related to a company’s financial resources.", answer: "Finance" },
            ],
        },
        words: [
            { word: "Political", startRow: 1, startCol: 4, direction: "across", clueNumber: 1 },
            { word: "Cultural", startRow: 3, startCol: 8, direction: "across", clueNumber: 2 },
            { word: "Management", startRow: 5, startCol: 0, direction: "across", clueNumber: 3 },
            { word: "Legal", startRow: 7, startCol: 8, direction: "across", clueNumber: 4 },
            { word: "Economic", startRow: 10, startCol: 2, direction: "across", clueNumber: 5 }, 
            { word: "HumanResources", startRow: 0, startCol: 14, direction: "down", clueNumber: 6 },
            { word: "Technological", startRow: 1, startCol: 8, direction: "down", clueNumber: 7 },
            { word: "Marketing", startRow: 6, startCol: 11, direction: "down", clueNumber: 8 },
            { word: "Technology", startRow: 8, startCol: 3, direction: "down", clueNumber: 9 },
            { word: "Finance", startRow: 8, startCol: 5, direction: "down", clueNumber: 10 }
        ],
        notes: [
            "This is an internal factor related to a company’s financial resources. It determines the ability of a business to fund operations, expansions, and investments.",
            "This external factor is influenced by political events and policies, including government stability, political risk, and policy changes that may affect international business operations.",
            "An internal factor related to a company’s technological capabilities, which plays a key role in maintaining competitiveness, innovation, and operational efficiency.",
            "This external factor is shaped by cultural differences and norms, influencing international business through varying consumer preferences, communication styles, and workplace behavior.",
            "An external factor influenced by economic conditions and trends such as inflation, interest rates, and exchange rates, which impact a company’s profitability and strategy.",
            "An internal factor related to a company’s marketing strategies, including promotion, product placement, and market research that drives customer engagement and sales.",
            "An internal factor related to a company’s management structure, which determines decision-making processes, leadership effectiveness, and operational efficiency."
        ],

    },

    3: {
        title: "Introduction to Logistic Management",
        gridDimensions: { rows: 22, cols: 18 },
        clues: {
            across: [
                { clue: "1. What can occur in large warehouses when space is not utilized effectively.", answer: "LongTravelTime" },
                { clue: "2. What is a potential disadvantage of small warehouses that can force companies to think creatively.", answer: "SpaceConstraints" },
                { clue: "3. A type of road vehicle used for transporting goods.", answer: "Truck" },
                { clue: "4. A transportation system that moves fluids through pipes.", answer: "Pipeline" },
                { clue: "5. A mode of transport that uses aircraft to move people and cargo.", answer: "Air" }
            ],
            down: [
                { clue: "6. What type of warehouse is often associated with higher costs due to the need for more space.", answer: "LargeWarehouse" },
                { clue: "7. A mode of transport that uses boats or ships to travel on water.", answer: "Water" },
                { clue: "8. In small warehouses, what can lead to shorter travel times between locations and reduced loading/unloading times.", answer: "MaximumUtilization" },
                { clue: "9. What is the primary resource that is always in short supply in a warehouse, regardless of its size.", answer: "Space" },
                { clue: "10. A mode of transport that uses tracks to guide vehicles.", answer: "Rail" }
            ]
        },
        words: [
            { word: "LongTravelTime", startRow: 1, startCol: 4, direction: "across", clueNumber: 1 },
            { word: "SpaceConstraints", startRow: 7, startCol: 0, direction: "across", clueNumber: 2 },
            { word: "Truck", startRow: 12, startCol: 12, direction: "across", clueNumber: 3 },
            { word: "Pipeline", startRow: 13, startCol: 3, direction: "across", clueNumber: 4 },
            { word: "Air", startRow: 15, startCol: 11, direction: "across", clueNumber: 5 },

            { word: "LargeWarehouse", startRow: 0, startCol: 10, direction: "down", clueNumber: 6 },
            { word: "Water", startRow: 4, startCol: 4, direction: "down", clueNumber: 7 },
            { word: "MaximumUtilization", startRow: 4, startCol: 12, direction: "down", clueNumber: 8 },
            { word: "Space", startRow: 9, startCol: 6, direction: "down", clueNumber: 9 },
            { word: "Rail", startRow: 11, startCol: 8, direction: "down", clueNumber: 10 }
        ],
        notes: [
            "A mode of transport that uses tracks to guide vehicles, primarily used for bulk transport over land.",
            "A type of road vehicle used for transporting goods, widely utilized for flexible and short distance deliveries.",
            "The primary resource in a warehouse that is always in short supply, regardless of the warehouse’s size, essential for efficient inventory management.",
            "A type of warehouse often associated with higher costs due to the need for more space to accommodate large inventories.",
            "A potential issue that can occur in large warehouses when space is not utilized effectively, leading to inefficiencies in operations.",
            "A disadvantage of small warehouses, which can force companies to think creatively about space utilization.",
            "In small warehouses, maximizing utilization can lead to shorter travel times between locations and reduced loading / unloading times, increasing operational efficiency."
        ],
    },

    4: {
        title: "International Marketing",
        gridDimensions: { rows: 21, cols: 22 },
        clues: {
            across: [
                { clue: "1. What is the term for the cultural differences and similarities between countries.", answer: "Ethnocentrism" },
                { clue: "2. Factors that influence pricing decisions.", answer: "LocalCost" },
                { clue: "3. What is the process of marketing goods and services in multiple countries.", answer: "InternationalMarketing" },
                { clue: "4. Pricing strategy that allows for local adjustments.", answer: "Adaptation." }
            ],
            down: [
                { clue: "5. Pricing strategy that balances global and local factors.", answer: "Geocentric" },
                { clue: "6. What is the process of adapting a product or service to fit the needs and preferences of a particular market.", answer: "ProductAdaptation" },
                { clue: "7. What is the term for the global marketing strategy that emphasizes standardization across different markets.", answer: "Standardization" },
                { clue: "8. Course of action for geocentric pricing.", answer: "Intermediate" },
                { clue: "9. Pricing strategy that uses the same price globally.", answer: "GlobalUniform" },
                { clue: "10. What is the term for the process of entering a foreign market by licensing a company’s products or technology to a local firm.", answer: "Licensing" }
            ]
        },
        words: [
            { word: "Ethnocentrism", startRow: 1, startCol: 2, direction: "across", clueNumber: 1 },
            { word: "LocalCost", startRow: 6, startCol: 0, direction: "across", clueNumber: 2 },
            { word: "InternationalMarketing", startRow: 11, startCol: 0, direction: "across", clueNumber: 3 },
            { word: "Adaptation", startRow: 15, startCol: 0, direction: "across", clueNumber: 4 },
            { word: "Geocentric", startRow: 0, startCol: 8, direction: "down", clueNumber: 5 },
            { word: "ProductAdaptation", startRow: 4, startCol: 6, direction: "down", clueNumber: 6 },
            { word: "Standardization", startRow: 5, startCol: 15, direction: "down", clueNumber: 7 },
            { word: "Intermediate", startRow: 6, startCol: 13, direction: "down", clueNumber: 8 },
            { word: "GlobalUniform", startRow: 7, startCol: 11, direction: "down", clueNumber: 9 },
            { word: "Licensing", startRow: 8, startCol: 17, direction: "down", clueNumber: 10 }
        ],
        notes: [
            "The process of marketing goods and services in multiple countries, requiring adaptation to different markets and environments.",
            "The term for cultural differences and similarities between countries that must be understood to successfully market products internationally.",
            "The process of adapting a product or service to fit the needs and preferences of a particular market, ensuring relevance and appeal.",
            "A global marketing strategy that emphasizes consistency and standardization across different markets to maintain brand identity and efficiency.",
            "The process of entering a foreign market by licensing a company’s products or technology to a local firm, allowing for local expertise and market entry",
            "A pricing strategy that allows for local adjustments based on specific market conditions, including competition and customer demand.",
            "A pricing strategy that balances global and local factors to create an effective pricing structure for multiple markets.",
            "Various factors that influence pricing decisions, including costs, market conditions, competitor prices, and consumer behavior.",
            "A pricing strategy that uses the same price globally, offering simplicity but possibly limiting flexibility in local markets."
        ],
    },

    5: {
        title: "Export and Import Practices",
        gridDimensions: { rows: 18, cols: 22 },
        clues: {
            across: [
                { clue: "1. A method of transporting goods in standardized containers.", answer: "ContainerShipping" },
                { clue: "2. A limit on the quantity of a product that can be imported or exported.", answer: "Quota" },
                { clue: "3. An agreement between countries to reduce or eliminate trade barriers.", answer: "FreeTradeAgreement" },
                { clue: "4. A government agency that collects taxes on imports and exports.", answer: "Customs" },
                { clue: "5. Selling goods in a foreign market at a price below the cost of production.", answer: "Dumping" }
            ],
            down: [
                { clue: "6. The policy of protecting domestic industries from foreign competition.", answer: "Protectionism" },
                { clue: "7. A tax imposed on imported or exported goods.", answer: "Tariff" },
                { clue: "8. The difference between a country’s exports and imports.", answer: "BalanceTrade" },
                { clue: "9. A government order prohibiting the trade of a particular product or with a particular country.", answer: "Embargo" },
                { clue: "10. A government payment to producers to help them compete in the global market.", answer: "Subsidy" }
            ]
        },
        words: [
            { word: "ContainerShipping", startRow: 1, startCol: 0, direction: "across", clueNumber: 1 },
            { word: "Quota", startRow: 4, startCol: 12, direction: "across", clueNumber: 2 },
            { word: "FreeTradeAgreement", startRow: 6, startCol: 4, direction: "across", clueNumber: 3 },
            { word: "Customs", startRow: 11, startCol: 2, direction: "across", clueNumber: 4 },
            { word: "Dumping", startRow: 15, startCol: 10, direction: "across", clueNumber: 5 },
            { word: "Protectionism", startRow: 0, startCol: 8, direction: "down", clueNumber: 6 },
            { word: "Tariff", startRow: 4, startCol: 15, direction: "down", clueNumber: 7 },
            { word: "BalanceTrade", startRow: 5, startCol: 10, direction: "down", clueNumber: 8 },
            { word: "Embargo", startRow: 6, startCol: 12, direction: "down", clueNumber: 9 },
            { word: "Subsidy", startRow: 11, startCol: 4, direction: "down", clueNumber: 10 }
        ],
        notes: [
            "A government order prohibiting the trade of a particular product or with a particular country.Embargoes are often used as a political tool to apply pressure on other nations.",
            "A limit on the quantity of a product that can be imported or exported. Quotas are used to control the volume of trade and protect domestic industries from foreign competition.",
            "An agreement between countries to reduce or eliminate trade barriers, such as tariffs or quotas, to encourage the free flow of goods and services.",
            "The difference between a country’s exports and imports. A positive balance (trade surplus) occurs when exports exceed imports, while a negative balance(trade deficit) happens when imports exceed exports.",
            "A government agency that collects taxes on imports and exports. Customs ensures compliance with laws and regulations related to trade.",
            "Selling goods in a foreign market at a price below the cost of production. This practice is often used to gain market share in a new region but is controversial and can lead to trade disputess",
            "The policy of protecting domestic industries from foreign competition through measures such as tariffs, quotas, or subsidies.",
            "A method of transporting goods in standardized containers. Container shipping allows for efficient, cost - effective movement of goods over long distances, especially in international trade."
        ],
    }
};

// Example notes for each set
const notes = {
    1: "Notes for Set 1: Regional Economic Development...",
    2: "Notes for Set 2: Introduction to International Business...",
    3: "Notes for Set 3: Introduction to Logistic Management...",
    4: "Notes for Set 4: International Marketing...",
    5: "This is an internal factor related to a company’s financial resources. It determines the ability of a business to fund operations, expansions, and investments.<br />2. This external factor is influenced by political events and policies, including government stability, political risk, and policy changes that may affect international business operations.<br />3. An internal factor related to a company’s technological capabilities, which plays a key role in maintaining competitiveness, innovation, and operational efficiency.<br />4. This external factor is shaped by cultural differences and norms, influencing international business through varying consumer preferences, communication styles, and workplace behavior.<br />5. An external factor influenced by economic conditions and trends such as inflation, interest rates, and exchange rates, which impact a company’s profitability and strategy.<br />6. An internal factor related to a company’s marketing strategies, including promotion, product placement, and market research that drives customer engagement and sales.<br />7. An internal factor related to a company’s management structure, which determines decision-making processes, leadership effectiveness, and operational efficiency."
};

let timeElapsed = 0;
let timerInterval;
let score = 0;
let correctCells = {};
let currentSet; // Variable to hold the current crossword set

function startTimer() {
    timerInterval = setInterval(function () {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
        const seconds = (timeElapsed % 60).toString().padStart(2, '0');
        document.getElementById("timer").innerText = `Time: ${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkCompletion() {
    const allCorrect = currentSet.words.every(wordData => {
        const { word, startRow, startCol, direction } = wordData;
        for (let i = 0; i < word.length; i++) {
            let row = startRow + (direction === "down" ? i : 0);
            let col = startCol + (direction === "across" ? i : 0);
            const cellKey = `${row}-${col}`;
            if (!correctCells[cellKey]) {
                return false; // Return false if any cell is not correct
            }
        }
        return true; // All cells for this word are correct
    });

    if (allCorrect) {
        stopTimer();
        alert(`Puzzle complete! Final score: ${score}`);
    }
}

function checkInput(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value.trim();
    const inputIndex = Array.from(inputElement.parentNode.parentNode.children).indexOf(inputElement.parentNode);
    const row = Math.floor(inputIndex / currentSet.gridDimensions.cols);
    const col = inputIndex % currentSet.gridDimensions.cols;

    // Get the correct letter for this cell
    let correctLetter = null;
    currentSet.words.forEach(wordData => {
        const word = wordData.word;
        // Adjusted condition to identify correct letter based on direction and position
        if (wordData.direction === "across" && row === wordData.startRow && col >= wordData.startCol && col < wordData.startCol + word.length) {
            correctLetter = word[col - wordData.startCol];
        } else if (wordData.direction === "down" && col === wordData.startCol && row >= wordData.startRow && row < wordData.startRow + word.length) {
            correctLetter = word[row - wordData.startRow];
        }
    });

    // Check if the input is correct
    if (inputValue === "") {
        inputElement.classList.remove('correct', 'incorrect');
    } else if (correctLetter && inputValue.toUpperCase() === correctLetter.toUpperCase()) {
        inputElement.classList.add('correct');
        inputElement.classList.remove('incorrect');
        updateScore(true, row, col);
        correctCells[`${row}-${col}`] = true; // Mark the cell as correct
        checkCompletion(); // Check if the crossword is completed
    } else {
        inputElement.classList.add('incorrect');
        inputElement.classList.remove('correct');
        updateScore(false, row, col);
        delete correctCells[`${row}-${col}`]; // Remove the cell mark
    }
}

function updateScore(isCorrect, row, col) {
    const cellKey = `${row}-${col}`;

    if (isCorrect) {
        if (!correctCells[cellKey]) {
            score += 10;
        }
    } else {
        if (correctCells[cellKey]) {
            score -= 10;
        }
    }

    document.getElementById("score").innerText = `Score: ${score}`;
}


function populateClues(set) {
    const acrossClues = document.getElementById('across-clues').querySelector('ul');
    const downClues = document.getElementById('down-clues').querySelector('ul');
    acrossClues.innerHTML = '';
    downClues.innerHTML = '';

    // Populate Across clues
    set.clues.across.forEach((clue, index) => {
        acrossClues.innerHTML += `<li> ${clue.clue}</li>`;
    });

    // Populate Down clues
    set.clues.down.forEach((clue, index) => {
        downClues.innerHTML += `<li> ${clue.clue}</li>`;
    });
}

function populateNotes(set) {
    const notesSection = document.getElementById('notes-section');

    // Clear existing paragraphs but keep the heading
    const existingParagraphs = notesSection.getElementsByTagName('p');
    while (existingParagraphs.length > 0) {
        notesSection.removeChild(existingParagraphs[0]);
    }

    // Populate new notes
    set.notes.forEach(note => {
        notesSection.innerHTML += `<p>${note}</p>`;
    });
}


// Function to update the notes section
function updateNotes(setNumber) {
    const notesSection = document.getElementById('notes-section').querySelector('p');
    notesSection.innerHTML = notes[setNumber] || "No notes available for this set.";
}
function createGrid() {
    console.log("Creating grid for:", currentSet.title);
    const grid = document.getElementById("crossword-grid");
    grid.style.gridTemplateColumns = `repeat(${currentSet.gridDimensions.cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSet.gridDimensions.rows}, 1fr)`;
    grid.innerHTML = '';

    const usedCells = Array.from({ length: currentSet.gridDimensions.rows }, () => Array(currentSet.gridDimensions.cols).fill(false));

    currentSet.words.forEach(wordData => {
        const { word, startRow, startCol, direction } = wordData;
        for (let i = 0; i < word.length; i++) {
            if (direction === "across") {
                if (startCol + i < currentSet.gridDimensions.cols) { // Ensure within bounds
                    usedCells[startRow][startCol + i] = true;
                }
            } else if (direction === "down") {
                if (startRow + i < currentSet.gridDimensions.rows) { // Ensure within bounds
                    usedCells[startRow + i][startCol] = true;
                }
            }
        }
    });

    console.log("Used Cells Array:", usedCells); // Log used cells to check placements

    for (let row = 0; row < currentSet.gridDimensions.rows; row++) {
        for (let col = 0; col < currentSet.gridDimensions.cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');

            if (usedCells[row][col]) {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = '1';
                input.addEventListener('input', checkInput);
                cell.appendChild(input);

                currentSet.words.forEach(wordData => {
                    if (wordData.startRow === row && wordData.startCol === col) {
                        const clueNumber = document.createElement('span');
                        clueNumber.classList.add('clue-number');
                        clueNumber.textContent = wordData.clueNumber;
                        cell.appendChild(clueNumber);
                    }
                });
            } else {
                cell.style.backgroundColor = 'black'; // Ensure this is intentional for black cells
            }

            grid.appendChild(cell);
        }
    }

    // Store a reference to each grid cell
    currentSet.gridCells = Array.from(grid.children);
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("level-selection").style.display = "block";
    });

    document.querySelectorAll('.level-btn').forEach(button => {
        button.addEventListener('click', function () {
            const setNumber = this.getAttribute('data-set'); // Get the set number
            currentSet = crosswordSets[setNumber]; // Set the current set based on button clicked

            console.log("Current Set Loaded:", currentSet.title); // Debugging output

            document.getElementById('level-selection').style.display = 'none';
            document.getElementById('crossword-container').style.display = 'block';
            document.getElementById('crossword-title').innerText = currentSet.title;

            // Ensure clues are populated correctly
            populateClues(currentSet);
            populateNotes(currentSet); // Populate notes for the current set
            createGrid(); // This should create the grid

            // Reset timer and score
            timeElapsed = 0;
            score = 0;
            document.getElementById("score").innerText = "Score: 0";
            startTimer(); // Start the timer
        });
    });
});

