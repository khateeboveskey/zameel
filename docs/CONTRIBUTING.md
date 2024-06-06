---
title: Contribution
---

# Contribution

Thank you for your interest in contributing to Zameel! We welcome your contributions to help improve the project and make it better for everyone.

This guide provides detailed information to help new contributors.

## Commit Convention

We use and enforce [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) Messages with the help of [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky), this means that if you did not follow this convention, an error will be thrown on `git commit` command!

:::danger Important
Make sure to read and follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) Messages specification before making a commit.
:::

## Style Guide

::: info
We use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to enforce a consistent code style. This guide covers not-configured rules.
:::

### Vue

1. You should follow [Vue Style Guide](https://vuejs.org/style-guide/).
2. Use `<script setup>` **Composition API** instead of `<script>` for Vue SFC.

---

### CSS

1. Don't use `-webkit-` prefixes inside element's `class`

use `@apply` at-rule to apply classes to selected element.

❌ Bad

```html
<div class="[&::-webkit-scrollbar]:hidden"></div>
```

✔ Good

```css
.custom-scrollbar::-webkit-scrollbar {
  @apply hidden;
}
```

2. Don't write unlayered rules

If you are forced to write in `index.css`, use `@layer` at-rule to group rules.

❌ Bad

```css
.custom-scrollbar::-webkit-scrollbar {
  @apply hidden;
}
```

✔ Good

```css
@layer base {
  /* ... */
  .custom-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }
}
```

3. Prefer a direction-based class over a position-based class

❌ Bad

```css
@apply ml-5 mr-2;
```

✔ Good

```css
@apply ms-5 me-2;
```

## Licence

By contributing, you agree that your contributions will be licensed under its MIT License.
