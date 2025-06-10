// File: 6-completed_tasks.js
const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Error: Received status code ${response.statusCode}`);
    return;
  }

  const todos = JSON.parse(body);
  const completedCount = {};

  todos.forEach(task => {
    if (task.completed) {
      const userId = task.userId;
      completedCount[userId] = (completedCount[userId] || 0) + 1;
    }
  });

  console.log(completedCount);
});
