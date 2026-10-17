const express = require('express');
const app = express();
app.use(express.json());

app.get('/webhook/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('WEBHOOK VERIFICADO!');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook/whatsapp', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => res.send('GEO BOT ACTIVO'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('En puerto ' + PORT));
