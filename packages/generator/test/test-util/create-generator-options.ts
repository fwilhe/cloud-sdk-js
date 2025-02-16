import {
  GeneratorOptions,
  generatorOptionsCli,
  ParsedGeneratorOptions
} from '../../src/generator-options';
import { parseOptions } from '../../src/options-parser';

export function createOptions(
  options?: Partial<GeneratorOptions>
): ParsedGeneratorOptions {
  return parseOptions(generatorOptionsCli, {
    inputDir: '',
    outputDir: '',
    clearOutputDir: false,
    serviceMapping: 'service-mapping.json',
    s4hanaCloud: false,
    generatePackageJson: false,
    generateJs: false,
    sdkAfterVersionScript: false,
    generateCSN: false,
    ...options
  });
}
