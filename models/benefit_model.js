import { query as _query } from '../config/database.js';

export const insertBenefit = async (id, name) => {
  const query = 'INSERT INTO benefits (id, benefit) VALUES (?, ?)';
  await _query(query, [id, name]);
};

export const readBenefit = async (offset = 1, limit = 10) => {
  const query = `SELECT id, benefit FROM benefits LIMIT ${offset},${limit}`;
  return _query(query);
};

export const checkBenefitExists = async (id) => {
  const query = 'SELECT 1 FROM benefits WHERE id = ?';
  const rows = await _query(query, [id]);
  return rows.length > 0;
};

export default { insertBenefit, readBenefit, checkBenefitExists };
