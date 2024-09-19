// app.js or your route file
const express = require('express');
// const { getPool } = require('./dbConnection');
const models = require('./models');
const modeaaa = require('./models/user.ts');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.get('/api/data', async (req, res) => {
  try {
     const pool = await getPool();
     const result = await pool.request().query('SELECT * FROM TB_M_Level');
     
     res.json(result.recordset);
  } catch (err) {
    console.error('SQL error', err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/UpdateLevel', async (req, res)=>{
  try {

    const pool = await getPool();
    pool.query('Update TB_M_Level set DeleteFlg = 0')
    //  console.log(req.body)
     res.json({Text:'Good'});
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  
  
  // models.TB_R_User.then(x=>console.log(x))
  
  // TB_R_User.then(user=>{
  //   user.
  // })

  // models.TB_R_User.findByPk(137845).then(user => {
  //   user.then(x=>)
  // });
});