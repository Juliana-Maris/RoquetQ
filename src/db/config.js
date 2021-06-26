const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); // para não usar tudo, somente o open do sqlite

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite', // caminho do banco de dados
        driver: sqlite3.Database,
    });