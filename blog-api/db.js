const { DataStore } = require('notarealdb');
const store = new DataStore('./data');
module.exports = {
blogs:store.collection('blogs')

};