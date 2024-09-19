var config = {};
config.DefaultConnectionData = {
  user: 'sa',
  password: 'P@ssw0rd',
  server: 'SUNNY-AKKARACHA', // You can use an IP address or server name
  database: 'DSTM',
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: true // Trust the self-signed certificate
  }
};

module.exports = config;