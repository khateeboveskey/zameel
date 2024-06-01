# Introduction to Scripts API

We use [commander.js](https://github.com/tj/commander.js) to create scripts for Zameel.

Scripts are listed in `package.json` instead of directly run them with `node` command, this makes the commands more readable and easier to remember.

::: details
When writing `npm run create` command, be sure to add `--` before options, this tells the shell that these options are for the command inside `create` script and not for the `npm run` command.

```sh
# Correct
npm run create:comp -- -t

# Incorrect
npm run create:comp -t # [!code error]
```

:::
