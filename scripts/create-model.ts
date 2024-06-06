import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { program } from 'commander';
import { toPascalCase } from '../src/utils/string';

const modelTemplate = (modelName: string) =>
  `import Request from '@/services/requestService';
import type { Model } from '@/types/model.type';

class ${toPascalCase(modelName)} extends Request implements Model {
  private static endpoint = '/${modelName}s';
  constructor() {
    super(${toPascalCase(modelName)}.endpoint);
  }
}

export default new ${toPascalCase(modelName)}();
`;

program.argument('<name>', 'name of the model').option('--in', 'In which feature file');

program.action((name) => {
  const filePath = path.join('./src/models', `${toPascalCase(name)}.vue`);
  const content = modelTemplate(name);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);

  console.log(chalk.green(`✔ ${toPascalCase(name)} model is created successfully.`));
});

program.parse(process.argv);
