# `create:view`

This script is used to create a new Vue view.

## Usage

```sh
npm run create:view <name>
```

## Arguments

- `name` - The name of the view to create.

## Options

- `-t, --typescript` - Add TypeScript to the `<script>` tag.
- `-o, --optionapi` - Use Option API instead of Composition API.
- `-d, --nodiv` - Don't add a root `<div>` tag.

## Example

```sh
npm run create:view main
```

This will create a new Vue view named `MainView.vue` in the `views` directory.

::: info Note
The word "View" and the `.vue` extension are automatically appended, so you don't need to add them.
:::
