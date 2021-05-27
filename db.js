
const Pool = require("pg").Pool;


const pool = new Pool({
   user:"ec2-54-197-100-79.compute-1.amazonaws.com",
   password:"1ff12e0361d1bb879451ba335426a658f6db3bf88fdc25e783bb584d49d95a9a",
   host: "eazgwfsdflzdzj",
   port: 5432,
   database: "d9drg9b24ulbcu",
   ssl: {
      rejectUnauthorized: false
   }
});

module.exports = pool;
