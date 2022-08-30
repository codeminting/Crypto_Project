import { Pool } from "pg";

const pool = new Pool({
  user: "nzbpsttk",
  host: "jelani.db.elephantsql.com",
  database: "nzbpsttk",
  password: "cKXaU7zkfFSqlsGlQTY8PDzfMRpWema-",
  port: 5432,
});

export default pool;