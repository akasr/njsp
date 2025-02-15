import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command('add', 'Add a new expense', (yargs) => {
        yargs.option('amount', {
            alias: 'a',
            describe: 'Amount of the expense',
            demandOption: true,
            type: 'number'
        }).option('description', {
            alias: 'd',
            describe: 'Description of the expense',
            demandOption: true,
            type: 'string'
        });
    }, (argv) => {
        console.log(`Adding expense: ${argv.amount} - ${argv.description}`);
    })
    .demandCommand(1)
    .parse();