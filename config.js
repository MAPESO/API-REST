module.exports = {
   port: parseInt(process.env.PORT, 10)|| 3000,
   db: process.env.MONGODB_URI || 'mongodb://localhost:27017/shop',
}