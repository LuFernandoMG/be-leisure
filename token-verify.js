
const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcyODc4MDAzMn0.JjCPViV5nY621_IMszoNWm7zuD1Q0SmAsE7s9mE0O4g'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
