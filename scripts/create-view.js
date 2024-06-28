import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { program } from 'commander';

const viewTemplate = (isOptionAPI, noRootDiv) =>
  `<template>
${
  !noRootDiv
    ? `  <div>
    
  </div>`
    : `  `
}
</template>

<script ${isOptionAPI ? '' : 'setup '}lang="ts">
${
  isOptionAPI
    ? `  export default {
    data() {
      return {

      }
    }
  }`
    : ``
}
</script>
`;

program
  .argument('<name>', 'name of the view')
  .option('-o, --optionapi', 'use Option API instead of Composition API')
  .option('-d, --nodiv', "don't add a root <div> tag");

program.action((name) => {
  const opts = program.opts();

  const isOptionAPI = opts.optionapi;
  if (isOptionAPI) {
    console.log(chalk.bold(`⚙ Option API View`));
  }

  const noRootDiv = opts.nodiv;
  if (noRootDiv) {
    console.log(chalk.bold(`⚙ No Root <div>`));
  }

  const viewName = name.charAt(0).toUpperCase() + name.slice(1);
  const filePath = path.join('./src/views', `${viewName}View.vue`);
  const content = viewTemplate(isOptionAPI, noRootDiv);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);

  console.log(chalk.green(`✔ ${viewName}View.vue view is created successfully.`));
});

program.parse(process.argv);
