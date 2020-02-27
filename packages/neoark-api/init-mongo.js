db.createUser({
  user: 'john',
  pwd: 'doe',
  roles: [
    {
      role: 'readWrite',
      db: 'neoark',
    },
  ],
});
