import { getDB, saveDB, insertDB } from "./db.js";

export const addExpense = async (expense, description) => {
  const data = {
    ID: Date.now(),
    Date: new Date().toDateString(),
    Description: description,
    Amount: expense,
  };
  await insertDB(data);
  console.log(`✅ Expense added successfully ${data.ID}`);
};

export const listExpenses = async () => {
  const db = await getDB();
  console.log("📋 Expense List:");
  console.table(db.expenses);
};

export const summary = async (month = 0) => {
  const db = await getDB();
  let total = 0;
  db.expenses.forEach((expense) => {
    if (month) {
      const expenseMonth = parseInt(
        new Date(expense.Date).toLocaleString("default", {
          month: "numeric",
        })
      );
      if (expenseMonth === month) {
        total += expense.Amount;
      }
    } else {
      total += expense.Amount;
    }
  });

  // Get month name from month number (accounting for 0-based month index in Date)
  const monthName = month
    ? new Date(0, month - 1).toLocaleString("default", { month: "long" })
    : "";

  console.log(
    `💰 Total expense ${month ? `for ${monthName}` : ""}: ₹ ${total}`
  );
};

export const deleteExpense = async (id) => {
  const db = await getDB();
  const index = db.expenses.findIndex((expense) => expense.ID === id);
  if (index === -1) {
    console.log(`❌ Expense with ID ${id} not found`);
    return;
  }
  db.expenses.splice(index, 1);
  await saveDB(db);
  console.log(`🗑️ Expense with ID ${id} deleted successfully`);
};
