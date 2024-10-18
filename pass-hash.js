const bcrypt = require('bcrypt');

async function hash() {
  const myPassword = 'micontraseña';
  const hash = await bcrypt.hashSync(myPassword, 10);
  console.log(hash);
}

hash();
