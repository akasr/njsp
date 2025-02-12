# Task Tracker CLI

A simple command-line interface (CLI) for managing tasks.

## Installation

To install the CLI globally, navigate to the project directory and run:

```bash
npm link
```

## Usage

### Add a new task

```bash
task-tracker add "Your task description"
```

### List tasks

```bash
task-tracker list
```

You can also filter tasks by status:

```bash
task-tracker list [status]
```

### Mark a task as in-progress or completed

```bash
task-tracker mark <status> <id>
```

### Delete a task

```bash
task-tracker delete <id>
```

### Update a task description

```bash
task-tracker update <id> "New task description"
```

## Example

```bash
# Add a new task
task-tracker add "Finish the project documentation"
# Output: Task added successfully (ID: 1)

# Mark a task as done or in-progress
task-tracker mark done 1
task-tracker in-progress 1

# Delete a task
task-tracker delete 1
# Output: Task deleted (ID: 1)

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress

# Update a task description
task-tracker update 2 "Review the project code"
```

## License

This project is licensed under the MIT License.