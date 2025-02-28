import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addExpense, listExpenses, summary, deleteExpense } from "./expense.js";

yargs(hideBin(process.argv))
  .command(
    "add",
    "Add a new expense",
    (yargs) => {
      yargs
        .option("amount", {
          alias: "a",
          describe: "Amount of the expense",
          demandOption: true,
          type: "number",
        })
        .option("description", {
          alias: "d",
          describe: "Description of the expense",
          demandOption: true,
          type: "string",
        });
    },
    async (argv) => {
      await addExpense(argv.amount, argv.description);
    }
  )
  .command(
    "list",
    "List all expenses",
    () => {},
    async () => {
      await listExpenses();
    }
  )
  .command(
    "summary [month]",
    "Show a sum of all expenses for a specific month",
    (yargs) => {
      yargs.positional("month", {
        describe: "Month to show the summary for",
        type: "number",
      });
    },
    async (argv) => {
      await summary(argv.month);
    }
  )
  .command(
    "delete <id>",
    "Delete an expense",
    (yargs) => {
      yargs.positional("id", {
        describe: "ID of the expense to delete",
        type: "number",
      });
    },
    async (argv) => {
      await deleteExpense(argv.id);
    }
  )
  .demandCommand(1)
  .parse();
