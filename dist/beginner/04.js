"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'John Doe',
    job: {
        title: 'Software Engineer',
    },
};
const { name, job = {} } = user;
const { title } = job;
const a = {
    name: 'John Doe',
    age: 18,
};
