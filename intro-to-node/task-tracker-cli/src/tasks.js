import { insert, getDB, saveDB } from './db.js';

export const newTask = async (task) => {
    const data = {
        id: Date.now(),
        description: task,
        status: 'todo',
        createdAt: Date.now(),
        updatedAt: undefined
    }
    await insert(data);
    return data;
}

export const listTask = async (status='') => {
    let db = await getDB();
    db = db.tasks;
    if(status){
        return db.filter(task => task.status === status)
    }
    return db;
}

export const deleteTask = async (id) => {
    const db = await getDB();
    const task = db.tasks.find(task => task.id === id);
    const tasks = db.tasks.filter(task => task.id !== id);
    await saveDB({tasks});
    return task;
}

export const updateStatus = async (id, status) => {
    const task = await deleteTask(id);
    task.status = status;
    task.updatedAt = Date.now();
    await insert(task);
}

export const updateDesc = async (id, description) => {
    const task = await deleteTask(id);
    task.description = description;
    task.updatedAt = Date.now();
    await insert(task);
}