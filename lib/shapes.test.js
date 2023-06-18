const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    test('render svg for a blue circle', () => {
        const expectedCircle = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColor('blue');
        const actualCircle = circle.render();
        expect(actualCircle).toEqual(expectedCircle);
    })
});

describe('Square', () => {
    test('render svg for a red square', () => {
        const expectedSquare = '<rect x="90" y="40" width="120" height="120" fill="red" />';
        const square = new Square();
        square.setColor('red');
        const actualSquare = square.render();
        expect(actualSquare).toEqual(expectedSquare);
    })
});

describe('Triangle', () => {
    test('render svg for a green triangle', () => {
        const expectedTriangle = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
        const triangle = new Triangle();
        triangle.setColor('green');
        const actualTriangle = triangle.render();
        expect(actualTriangle).toEqual(expectedTriangle);
    })
});