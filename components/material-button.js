class MaterialButton extends HTMLElement {
    CSS = `:host button {
        background: #6200ee;
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

    constructor() {
        super();

        this.render();
    }

    render() {
        const template = document.createElement("template");
        template.innerHTML = `<style>${this.CSS}</style><button><slot /></button>`;   
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("material-button", MaterialButton);
