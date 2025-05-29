import dotenv from 'dotenv'
dotenv.config()

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from './schema';
// import * as relations from './relations';

const createPool = () => {
  try {
    return mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || '',
      port: Number(process.env.DB_PORT) || 3306,
      connectionLimit: process.env.NODE_ENV === 'production' ? 10 : 5,
    });
  } catch (error) {
    console.error('Failed to create database pool:', error);
    throw error;
  }
}

let poolInstance: mysql.Pool | null = null;

const createDb = () => {
  try {
    const pool = createPool();
    poolInstance = pool; // เก็บ reference
    return drizzle(pool, { 
    //   schema: { ...schema, ...relations }, 
    schema: { ...schema }, 
      mode: "default"
    });
  } catch (error) {
    console.error('Failed to create drizzle instance:', error);
    throw error;
  }
}

declare const globalThis: {
  dbGlobal: ReturnType<typeof createDb> | undefined;
} & typeof global;

// Singleton pattern
const db = globalThis.dbGlobal ?? createDb();

if (process.env.NODE_ENV !== 'production') {
  globalThis.dbGlobal = db;
}

export default db;

export const getPool = (): mysql.Pool | null => {
  return poolInstance;
}

export const closeDb = async () => {
  try {
    const pool = getPool();
    if (pool && typeof pool.end === 'function') {
      await pool.end();
      console.log('Database pool closed successfully');
    }
  } catch (error) {
    console.error('Error closing database pool:', error);
  }
}

export const checkDbConnection = async () => {
  try {
    const pool = getPool();
    if (pool) {
      const connection = await pool.getConnection();
      await connection.ping();
      connection.release();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Database health check failed:', error);
    return false;
  }
}