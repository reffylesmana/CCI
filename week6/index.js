import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>saya akan lawan</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});

//apa itu get put post delete patch options head
//get untuk mengambil data
//post untuk mengirim data
//put untuk mengupdate data secara keseluruhan
//patch untuk mengupdate data secara parsial
//delete untuk menghapus data