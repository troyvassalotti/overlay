import { css } from "lit";

export default css`
  :host {
    box-sizing: border-box;
    display: inline-block;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  img,
  ::slotted(img) {
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
    padding: 1rem;
    place-items: center;
    position: absolute;
    transition: 0.3s ease;
  }

  .caption:hover {
    background-color: hsl(0 0% 0% / 0.5);
    opacity: 1;
  }
`;
