class LogoSVG {
    constructor() {
        this.logoText = '';
        this.logoShape = '';
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.logoText}${this.logoShape}</svg>`;
    }

    createText(message, color) {
        return this.logoText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    createShape(shape) {
        this.logoShape = shape.render();
    }
}

module.exports = LogoSVG;

