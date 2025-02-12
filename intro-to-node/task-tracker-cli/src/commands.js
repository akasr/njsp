import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {newTask, listTask, deleteTask, updateStatus, updateDesc} from './tasks.js'

yargs(hideBin(process.argv))
    .command('add <task>', 'create a new task', yargs => {
        return yargs.positional('task', {
            describe: 'The content of the task you want to create',
            type: 'string'
        });
    }, async (argv) => {
        const task = await newTask(argv.task);
        console.log(`Task Added successfully (ID: ${task.id})`);
    })
    .command('list [status]', 'list task', yargs => {
        return yargs.positional('status', {
            describe: 'status of tasks to be listed',
            type: 'string',
            default: ''
        });
    }, async (argv) => {
        const tasks = await listTask(argv.status);
        console.table(tasks);
    })
    .command('mark <status> <id>', 'mark task as in-progress or completed', yargs => {
        return yargs.positional('status', {
            describe: 'the status of the task',
            type: 'string'
        })
        .positional('id', {
            describe: 'id of the task to be updated',
            type: 'number'
        });
    }, async (argv) => {
        await updateStatus(argv.id, argv.status);
    })
    .command('delete <id>', 'delete a task', yargs => {
        return yargs.positional('id', {
            describe: 'id of the task to be deleted',
            type: 'number'
        })
    }, async (argv) => {
        const task = await deleteTask(argv.id);
        console.log(`Task deleted (ID: ${task.id})`);
    })
    .command('update <id> <description>', 'update the task description', yargs => {
        return yargs.positional('id', {
            describe: 'id of the task to be updated',
            type: 'number'
        })
        .positional('description', {
            describe: 'new description of task',
            type: 'string'
        });
    }, async (argv) => {
        await updateDesc(argv.id, argv.description);
    })
    .demandCommand(1)
    .parse()