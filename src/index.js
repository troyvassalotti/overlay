import { html, LitElement } from "lit";
import styles from "./index.styles";

/**
 * @element over-lay
 * @summary Overlays are used to give interactive captions to imnages.
 *
 * @slot image - The image to receive a caption. Can be any image-like HTML element.
 * @slot caption - The image's caption, housed in a `figcaption`.
 *
 * @attr {String} href - An optional href for the image to link to.
 * @attr {String} target - Link target.
 *
 * @prop {Element} missingAltText - The slotted image if it's missing an `alt` attribute.
 *
 * @csspart link - The component's wrapper if am href is passed.
 * @csspart figure - The component's `figure` element.
 * @csspart caption - The component's `figcaption` element.
 */
export class Overlay extends LitElement {
  static styles = styles;

  static get properties() {
    return {
      target: { type: String },
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.href = "";
    this.target = "_blank";
  }

  get missingAltText() {
    return this.querySelector("img:not([alt])") ?? null;
  }

  #isLink() {
    return this.href ? true : false;
  }

  renderOverlay() {
    return html`<figure part="figure" class="figure">
      <slot name="image">
        <img
          src="https://via.placeholder.com/500"
          width="500"
          height="500"
          alt=""
          decoding="async"
          loading="lazy" />
      </slot>
      <figcaption part="caption" class="caption">
        <slot name="caption"><span>Your content goes here</span></slot>
      </figcaption>
    </figure>`;
  }

  render() {
    return this.#isLink()
      ? html` <a
          part="link"
          class="link"
          href=${this.href}
          target=${this.target}
          rel="noopener noreferrer">
          ${this.renderOverlay()}
        </a>`
      : html`${this.renderOverlay()}`;
  }

  firstUpdated() {
    if (this.missingAltText) {
      this.missingAltText.alt = "";
      console.error(
        "HEY YOU - add alt text to your images. I did it for you, but please remember to do it yourself next time."
      );
    }
  }
}

customElements.define("over-lay", Overlay);
