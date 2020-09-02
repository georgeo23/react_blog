const index = `SELECT * FROM posts`;
const show = `SELECT * FROM posts WHERE id = $1`;
module.exports = { index, show };