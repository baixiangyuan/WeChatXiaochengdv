const express = require('express');
const axios = require('axios');
const app = express();

app.all('*', async (req, res) => {
  try {
    const target = "http://8.152.0.186:9178" + req.path;
    const resp = await axios({
      method: req.method,
      url: target,
      data: req.body
    });
    res.send(resp.data);
  }catch(err){
    res.send("连接后端服务器失败");
  }
})

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`服务启动`);
});
