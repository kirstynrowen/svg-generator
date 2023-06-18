const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

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
}

// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered