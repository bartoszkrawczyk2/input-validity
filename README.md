<div style="text-align:center;">
<h1>input-validity</h1>

<img src="https://badgen.net/static/license/MIT/green" style="height:20px" />
<img src="https://badgen.net/static/npm%20package/0.2.0/green" style="height:20px" />
<img src="https://badgen.net/static/minzipped%20size/702%20B" style="height:20px" />
<img src="https://badgen.net/static/dependencies/0" style="height:20px" />

<img src="input-validity.png" style="max-width:600px;width:100%;" />
</div>

Minimal [(702 B min+gzip)](https://bundlephobia.com/package/input-validity@0.2.0) client-side form validation library with 0 dependencies that uses [native HTML5 validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation). Works perfect with server-rendered apps and minimal frontend libraries such as [HTMX](https://htmx.org/) or [Alpine.js](https://alpinejs.dev/).

Docs: [https://input-validity.pages.dev/](https://input-validity.pages.dev/)

## How it works

In essence it allows for custom styling of HTML validation and aligns behaviour attributes like `required`, `type="email"`, `min`, `maxlength`, etc. to behave more like modern frontend framework validation.

Under the hood `input-validity` does following:

1. Adds `data-dirty` to a `<input />` or element, which combined with `:invalid` CSS pseudo class allows for indicating error state of the input. This attribute is added to the input after first `invalid` event (fired after first submit attempt).
2. Displays native error message in any DOM element specified with `validation-message` attribute. Falls back to native popover if not specified.
3. Allows for custom error messages with `message-*` attributes. Falls back to native messages if not specified.

## Installing

Installing `input-validity` is as simple as adding a `<script>` tag to your page. No need for complicated build steps or systems.

### via CDN, for example [unpkg](https://www.unpkg.com/)

```html
<script src="https://www.unpkg.com/input-validity"></script>
```

or with specific version:

```html
<script src="https://www.unpkg.com/input-validity@0.2.0"></script>
```

CDN approach is extremely simple but you may want to consider [not using CDNs in production](https://blog.wesleyac.com/posts/why-not-javascript-cdn).

### Download a copy

[Download](https://www.unpkg.com/input-validity@0.2.0/dist/iife/index.js) and copy it into your project to a public assets directory

```html
<script src="/path/to/input-validity.js"></script>
```

### NPM and bundlers

If you prefer you can also install with `npm` / `pnpm` / `yarn`:

```
npm install input-validity
```

And then import into your code:

```js
import "input-validity";
```

Currently only ESM is supported.

## Examples and usage

See [guides](https://input-validity.pages.dev/guides/messages/) and [examples](https://input-validity.pages.dev/).

## API

[API reference](https://input-validity.pages.dev/guides/examples/)

## Browser support

`input-validity` will work on all browsers that support [ValidityState API](https://caniuse.com/?search=validitystate)

## License

MIT
