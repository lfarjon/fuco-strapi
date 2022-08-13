module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b93ee193c7c77094b9cc031fe891871c'),
  },
});
