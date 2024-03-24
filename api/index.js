import http from 'http';
import app from '../app.js';

const server = http.createServer(app);

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const server = app.listen(
//   PORT, () => console.log(`API Server listening on port ${PORT}`));
