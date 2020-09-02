const index = `SELECT * FROM posts`;
const show = `SELECT * FROM posts WHERE id = $1`;
const create = `INSERT INTO posts (title, alias, body) VALUES ($1, $2, $3)`
module.exports = { index, show, create };