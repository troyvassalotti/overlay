import { html, css, LitElement } from "lit";

/**
 * @element over-lay
 * @summary Overlays are used to give interactive captions to imnages.
 *
 * @slot image - The image to receive a caption. Can be any image-like HTML element.
 * @slot caption - The image's caption, housed in a `figcaption`.
 *
 * @csspart figure - The component's `figure` element.
 * @csspart caption - The component's `figcaption` element.
 * @csspart content - Content wrapper for the caption.
 */
export default class Overlay extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: inline-block;
      }

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }

      ::slotted(img, picture) {
        block-size: auto;
        display: block;
        inline-size: auto;
        max-inline-size: 100%;
      }

      .link {
        display: inline-block;
      }

      .figure {
        inline-size: fit-content;
        margin: 0;
        position: relative;
      }

      .caption {
        display: grid;
        inset: 0;
        opacity: 0;
        overflow: auto;
        padding: 1rem;
        place-items: center;
        position: absolute;
        transition: 0.3s ease;
      }

      :host(:focus-visible) .caption,
      .caption:hover {
        background-color: hsl(0 0% 0% / 0.5);
        opacity: 1;
      }
    `;
  }

  handleLinkParent() {
    if (this.parentElement instanceof HTMLAnchorElement) {
      this.parentElement.dataset.hasOverlay = "";

      if (!document.head.querySelector("#over-lay-link-styles")) {
        let style = document.createElement("style");
        style.id = "over-lay-link-styles";

        style.innerText = `
        /* Assume that classes are setting display */
        a[data-has-overlay]:not([class]) {
          display: inline-block;
        }

        a[data-has-overlay]:focus-visible ::part(caption) {
          background-color: hsl(0 0% 0% / 0.5);
          opacity: 1;
        }

        a[data-has-overlay]:is(:hover, :focus-visible) ::part(caption) {
          text-decoration: underline;
        }
      `;

        document.head.append(style);
      }
    } else {
      this.tabIndex = "0";
    }
  }

  handleMissingAltText() {
    let missingAltText = this.querySelector("img:not([alt])");

    if (missingAltText) {
      missingAltText.alt = "";
      console.error(
        "HEY YOU - add alt text to your images. I did it for you, but please remember to do it yourself next time.",
      );
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.handleLinkParent();
    this.handleMissingAltText();
  }

  render() {
    return html`<figure part="figure" class="figure">
      <slot name="image"></slot>
      <figcaption part="caption" class="caption">
        <div part="content" class="content">
          <slot name="caption"></slot>
        </div>
      </figcaption>
    </figure>`;
  }
}

customElements.define("over-lay", Overlay);
