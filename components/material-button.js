class MaterialButton extends HTMLElement {
    CSS = `:host button {
        background: ${this.color};
        color: #fff;
        padding: 0 16px;
        font-family: Roboto,sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: .875rem;
        line-height: 2.25rem;
        font-weight: 500;
        letter-spacing: .0892857143em;
        text-decoration: none;
        text-transform: uppercase;
        will-change: transform,opacity;
        padding: 0 8px;
        display: -ms-inline-flexbox;
        display: inline-flex;
        position: relative;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-width: 64px;
        height: 36px;
        border: none;
        outline: none;
        line-height: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-appearance: none;
        overflow: hidden;
        vertical-align: middle;
        border-radius: 4px;
    }`;

    enterPressedEventHandler() {
        return new CustomEvent("enterPressed");
    }

    get color() {
        return this.getAttribute("color");
    }

    set color(color) {
        this.setAttribute("color", color);
    }

    get onEnterPressed() {
        return Function(this.getAttribute("onEnterPressed")).bind(this);
    }

    constructor() {
        super();

        this.render();
        this.bindEvents()
    }

    bindEvents() {
        this.addEventListener("keyup", /** @param {KeyboardEvent} e */ e => {
            if (e.key === "Enter") {
                this.dispatchEvent(this.enterPressedEventHandler());
            }
        });

        this.addEventListener("enterPressed", () => this.onEnterPressed());
    }

    render() {
        const template = document.createElement("template");
        template.innerHTML = `<style>${this.CSS}</style><button><slot /></button>`;   
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("material-button", MaterialButton);
