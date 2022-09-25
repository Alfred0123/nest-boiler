import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { registerAs } from '@nestjs/config';
import { CONFIG_TYPE } from '@/type/config/config.type';
import { DefaultConfig } from '@/interface/config/config.interface';

const ENV = process.env.ENV || 'local';
const YAML_CONFIG_FILENAME = `${ENV}.config.yaml`;

export const defaultConfig = registerAs(CONFIG_TYPE.DEFAULT, () => {
  // TODO. validation 추가
  // TODO. default 값 입력 sample 추가
  return yaml.load(
    readFileSync(
      join(`dist/config/${CONFIG_TYPE.DEFAULT}/${YAML_CONFIG_FILENAME}`),
      // join(__dirname, `${CONFIG_TYPE.DEFAULT}/${YAML_CONFIG_FILENAME}`),
      'utf8',
    ),
  ) as Record<string, any>;
});

export const databaseConfig = registerAs(CONFIG_TYPE.DATABASE, () => {
  return yaml.load(
    readFileSync(
      join(`dist/config/${CONFIG_TYPE.DATABASE}/${YAML_CONFIG_FILENAME}`),
      // join(__dirname, `${CONFIG_TYPE.DATABASE}/${YAML_CONFIG_FILENAME}`),
      'utf8',
    ),
  ) as Record<string, any>;
});
