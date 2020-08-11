import * as pentf from 'pentf';
import * as path from 'path';
import { __dirname } from './test-helpers.mjs';

pentf.main({
	rootDir: __dirname(import.meta.url),
	testsDir: path.join(__dirname(import.meta.url))
});
