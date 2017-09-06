const template = document.createElement('template');
template.innerHTML = `
  <style>

    :host {
      display: block;
      font-size: 1rem;
      font-family: Helvetica, Verdana, sans-serif;
      color: rgba(0,0,0,0.87);
      margin: 0;
      padding: 0;
      z-index: -10;
    }

    :host([hidden]) {
      display: none;
    }

    section {
      margin: 0;
      padding: 0;
      padding-top: 3.5rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f2f2f2;
      z-index: -10;
    }

  </style>

  <section>
    <slot name="maincontent"></slot>
  </section>
`

if (window.ShadyCSS) {
  ShadyCSS.prepareTemplate(template, 'daube-main-container');
}

class DaubeMainContainer extends HTMLElement {
  static get observedAttributes() {}
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }
} // Class CustomElement
customElements.define("daube-main-container", DaubeMainContainer);