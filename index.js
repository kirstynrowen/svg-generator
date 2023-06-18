const inquirer = require('inquirer');
const fs = require('fs');
//validate character count
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
//import classes
const { Circle, Square, Triangle } = require('./lib/shapes');
const LogoSVG = require('./lib/svgGen');

// GIVEN a command-line application that accepts user input
function runInquirer() {
    return inquirer
    .prompt([
        {
            name: 'text',
            type: 'maxlength-input',
            message: 'Please enter the text for your logo, no more than 3 characters.',
            maxLength: 3,
        },
        {
            name: 'shape',
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            name: 'shapeColor',
            type: 'input',
            message: 'What color would you like your logo to be?',
        },
        {
            name: 'textColor',
            type: 'input',
            message: 'What color would you like your logo text to be?',
        },
    ])
    .then(({ text, shape, shapeColor, textColor }) => {
        let newShape;
        switch (shape) {
            case 'circle':
                newShape = new Circle();
                break;
            case 'square':
                newShape = new Square();
                break;
            case 'triangle':
                newShape = new Triangle();
                break;
            default:
                console.log('Invalid choice');
                return;
        }
        newShape.setColor(shapeColor);
    })
}

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered