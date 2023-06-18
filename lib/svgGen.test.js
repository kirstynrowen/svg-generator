const LogoSVG = require('./svgGen');

test('add text and text color', () => {
    const expectedLogo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BEE</text></svg>';
    const logo = new LogoSVG();
    logo.createText('BEE', 'black');
    expect(logo.render()).toEqual(expectedLogo);
});