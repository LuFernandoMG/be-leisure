const bcrypt = require('bcrypt');

async function verifyHash() {
  const myPassword = 'micontraseña';
  const hash = '$2b$10$F9WyRXE7QhsQmQICh/zxP.dxdEIfiTcxGHfc9A/F1aUp9BvJP7lk.';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log('isMatch ', isMatch);
}

verifyHash();