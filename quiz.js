const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Power Unit",
            "Control Program Utility"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which of the following is an input device?",
        options: [
            "Monitor",
            "Printer",
            "Keyboard",
            "Speakers"
        ],
        answer: "Keyboard"
    },
    {
        question: "What is RAM primarily used for in a computer?",
        options: [
            "Long-term data storage",
            "Temporary data storage for active programs",
            "Processing graphical information",
            "Managing network connections"
        ],
        answer: "Temporary data storage for active programs"
    },
    {
        question: "Which language is primarily used for web development to structure content?",
        options: [
            "CSS",
            "JavaScript",
            "HTML",
            "Python"
        ],
        answer: "HTML"
    },
    {
        question: "What is the full form of 'HTTP'?",
        options: [
            "HyperText Transfer Protocol",
            "High Technology Transfer Program",
            "Hyperlink Texting Protocol",
            "Home Tool Transfer Protocol"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Which operating system is open-source?",
        options: [
            "Windows",
            "macOS",
            "Linux",
            "iOS"
        ],
        answer: "Linux"
    },
    {
        question: "A byte is composed of how many bits?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: "8"
    },
    {
        question: "What is the primary function of a firewall?",
        options: [
            "To speed up internet connection",
            "To prevent unauthorized access to a network",
            "To cool down computer components",
            "To display web pages"
        ],
        answer: "To prevent unauthorized access to a network"
    },
    {
        question: "Which of these is a widely used database management system?",
        options: [
            "Microsoft Word",
            "Adobe Photoshop",
            "MySQL",
            "Google Chrome"
        ],
        answer: "MySQL"
    },
    {
        question: "What does 'URL' stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Reference Link",
            "United Resource Language",
            "User's Remote Location"
        ],
        answer: "Uniform Resource Locator"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        console.log(`\nQuestion ${currentQuestionIndex + 1}: ${q.question}`);
        q.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        rl.question('Enter your choice (number): ', (answer) => {
            const chosenOptionIndex = parseInt(answer) - 1;

            if (chosenOptionIndex >= 0 && chosenOptionIndex < q.options.length) {
                if (q.options[chosenOptionIndex] === q.answer) {
                    console.log('Correct!');
                    score++;
                } else {
                    console.log(`Incorrect. The correct answer was: ${q.answer}`);
                }
                currentQuestionIndex++;
                askQuestion(); // Ask the next question
            } else {
                console.log('Invalid input. Please enter a valid number for your choice.');
                askQuestion(); // Re-ask the current question due to invalid input
            }
        });
    } else {
        // Quiz finished
        console.log('\n--- Quiz Completed! ---');
        console.log(`You scored ${score} out of ${questions.length} questions.`);
        if (score === questions.length) {
            console.log('Congratulations! You got all questions correct!');
        } else if (score >= questions.length / 2) {
            console.log('Good job! You passed the quiz.');
        } else {
            console.log('Keep studying! You can do better next time.');
        }
        rl.close(); // Close the readline interface
    }
}

console.log('--- Welcome to the Computer Exam Quiz! ---');
askQuestion(); // Start the quiz