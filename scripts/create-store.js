import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { program } from 'commander';

// Define the template for the store files
const storeTemplate = (storeName) =>
  `import { defineStore } from 'pinia';

export const use${storeName.charAt(0).toUpperCase() + storeName.slice(1)} = defineStore('${storeName}', {
  state: () => {
    return {
      // Data
    };
  },
  actions: {
    // Actions
  },
});
`;

program.argument('<name>', 'name of the store');

program.action((name) => {
  const storeName = name.charAt(0).toUpperCase() + name.slice(1);
  const filePath = path.join('stores', `use${storeName}.js`);
  const content = storeTemplate(name);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);

  console.log(chalk.green(`✔ use${storeName}.js created successfully.`));
});

program.parse();
