# Expense Tracker

This is a simple command-line expense tracker application built with Node.js and yargs.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/akasr/njsp.git 
    ```
2. Navigate to the project directory:
    ```sh
    cd njsp/intro-to-node/expense-tracker
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a symbolic link to the `expense-tracker` script:
    ```sh
    npm link
    ```
5. Run the `expense-tracker` command to see the available options:
    ```sh
    expense-tracker --help
    ```
6. You can now use the `expense-tracker` command to manage your expenses.

## Usage

You can use the following commands to manage your expenses:

### Add a new expense

```sh
expense-tracker add --amount 24 --description "Omelette"
# ✅ Expense added successfully (ID: 1)
```

### List all expenses

```sh
expense-tracker list

#   ┌────┬───────────────-┬────────────┬────────┐ 
#   │ ID │ Date           │ Description│ Amount │
#   ├────┼───────────────-┼────────────┼────────┤
#   │ 1  │ Fri Feb 28 2025│ Omelette   │ $24    │
#   └────┴───────────────-┴────────────┴────────┘
```

### Show a summary of expenses for a specific month

```sh
expense-tracker summary --month 2
# 💰 Total expense for February: ₹ 24
```

### Show a summary of expenses 
```sh
expense-tracker summary
# 💰 Total expense: ₹ 24
```

### Delete an expense

```sh
expense-tracker delete 1
# 🗑️ Expense with ID 1 deleted successfully
```

## License

This project is licensed under the MIT License.
