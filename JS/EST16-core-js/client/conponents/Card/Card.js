
class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.state = {
      showImage: this.getAttribute('showImage') || 'true',
      title: this.getAttribute('title') || '{ Card Title }'
    };
  }

  connectedCallback() {
    this.render();

    console.log(this.state);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>@import url('./components/Card/Card.css');</style>

      <div class="card">
        <figure>
          <img src="./assets/visual.webp" alt="" />
          <figcaption class="a11y-hidden">히말라야 정상의 모습</figcaption>
        </figure>
        <h2>title</h2>
        <p>description.....</p>
        <button type="button">CTA</button>
      </div>
    `;
  }
}

customElements.define('c-card', Card);
