# `create:comp`

This script is used to create a new Vue component.

## Usage

```sh
npm run create:comp <name>
```

## Arguments

- `name` - The name of the component to create.

## Options

- `-t, --typescript` - Add TypeScript to the `<script>` tag.
- `-o, --optionapi` - Use Option API instead of Composition API.
- `-d, --nodiv` - Don't add a root `<div>` tag.

## Example

```sh
npm run create:comp MyComponent
```

This will create a new Vue component named `MyComponent.vue` in the `src/components` directory.

::: info Note
The `.vue` extension is automatically appended, so you don't need to add it.
:::
