import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { program } from 'commander';

const template = (isOptionAPI, noRootDiv) =>
  `<template>
${
  !noRootDiv
    ? `  <div>
    
  </div>`
    : ` `
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
  .argument('<name>', `name of the component`)
  .option('-o, --optionapi', 'use Option API instead of Composition API')
  .option('-f, --feature <feature>', 'the feature folder to put the file in')
  .option('-d, --no-div', "don't add a root <div> tag");

program.action((name) => {
  const opts = program.opts();

  const isOptionAPI = opts.optionapi;
  if (isOptionAPI) {
    console.log(chalk.bold(`⚙ Option API component`));
  }

  const noRootDiv = opts.nodiv;
  if (noRootDiv) {
    console.log(chalk.bold(`⚙ No Root <div>`));
  }

  const feature = opts.feature;
  if (feature) {
    console.log(chalk.bold(`✨ Put in ${feature} feature folder`));
  }

  // todo: make it capitalize()
  const fileName = name.charAt(0).toUpperCase() + name.slice(1);
  const filePath = path.join(
    feature ? `./src/features/${feature}/components` : `./src/components`,
    `${fileName}.vue`
  );
  const content = template(isOptionAPI, noRootDiv);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);

  console.log(chalk.green(`✔ ${fileName}.vue component is created successfully.`));
});

program.parse(process.argv);
