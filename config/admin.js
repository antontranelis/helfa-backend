module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b40dbb8c6daf98beb412dc52be8a1c98'),
  },
});
