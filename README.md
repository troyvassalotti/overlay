# `<over-lay>`

A web component to put interactive captions overtop an image.

## Installation

### Via npm

`npm install @troyv/overlay`

### Via ESM

```html
<script type="module">
  import Overlay from "https://esm.sh/@troyv/overlay";
</script>
```

## Usage

You either need a bundling solution that will handle the bare module imports from `lit` or you need to use import maps in the browser.

```html
<!-- for browsers that don't natively support import maps -->
<script async src="https://esm.sh/es-module-shims"></script>
<script type="importmap">
  {
    "imports": {
      "lit": "https://esm.sh/lit"
    }
  }
</script>
<script type="module" src="over-lay.js"></script>
```

Images go in the `image` slot, and the caption goes in the `caption` slot. As slots, your image and caption are free to be styled as you wish, but there are sensible defaults in place (mostly on the image).

Additional styling is available through CSS parts.

1. `::part(content)`: Content wrapper for the caption. Provides scroll functionality.
2. `::part(figure)`: The figure element wrapping the image and caption.
3. `::part(caption)`: The figure's caption element.
