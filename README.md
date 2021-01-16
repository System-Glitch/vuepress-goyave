# Vuepress Goyave

The Vuepress theme for the [Goyave documentation](https://system-glitch.github.io/goyave/).

Features:
- Dark theme
- Color blindness friendly
- New containers
    - Images in text (left or right)
    - Monospace box (compatible with formatting)
    - Wrapping grid
- Back to top

## Installation

```
npm install --save-dev vuepress-theme-goyave
```

Set the theme in your vuepress config (`.vuepress/config.js`):
```js
module.exports = {
    theme: "goyave"
}
```

## New containers

### Image in text (left)

```md
::: img-row <img :src="$withBase('/image.svg')" height="150" alt="Image description"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
:::
```

### Image in text (right)

```md
::: img-row-right <img :src="$withBase('/image.svg')" height="150" alt="Image description"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
:::
```

### Monospace box

```md
:::vue
Monospace text **compatible** with *formatting*.
:::
```

### Wrapping grid

```md
::: table
[Link 1](#link-1)
[Link 2](#link-2)
[Link 3](#link-3)
[Link 4](#link-4)
[Link 5](#link-5)
[Link 6](#link-6)
:::
```
