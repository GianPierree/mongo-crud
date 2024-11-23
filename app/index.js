import { App } from './app.js';
import { Config } from './config/index.js';

const PORT = Config.PORT;
const server = new App().app;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});