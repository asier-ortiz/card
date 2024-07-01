// Pull in our modules
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import boxen from 'boxen';
import chalk from 'chalk';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'bold',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           Asier Ortiz'),
	handle: chalk.white('asier-ortiz'),
	work: chalk.white('Junior Full Stack Developer'),
	github: chalk.gray('https://github.com/') + chalk.green('asier-ortiz'),
	web: chalk.cyan('under development...'),
	npx: `${chalk.red('npx')} ${chalk.white('@asier-ortiz/card')}`,
	labelWork: chalk.white.bold('    Work:'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	labelWeb: chalk.white.bold('     Web:'),
	labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading +
	newline +
	newline +
	working +
	newline +
	newline +
	githubing +
	newline +
	webing +
	newline +
	newline +
	carding;

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.magenta(boxen(output, options)),
);
