# `<over-lay>`

A web component to put interactive captions overtop an image.

## Installation

Via npm: `npm install @troyv/overlay`

## Usage

Use the component any place you would normally use an image. There are two available props:

1. `[href]`: (Optional) Give your image a link.
2. `[target]`: (Optional) The link target. By default, clicking the link will open in the same tab.

Images go in the `image` slot, and the caption goes in the `caption` slot. As slots, your image and caption are free to be styled as you wish, but there are sensible defaults in place (mostly on the image).

Additional styling is available through CSS parts.

1. `::part(link)`: Visible if you're using the `href` prop.
2. `::part(figure)`: The figure element wrapping the image and caption.
3. `::part(caption)`: The figure's caption element.
