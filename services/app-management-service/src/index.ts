/* Configure Environment */
import fs from 'fs';
import dotenv from 'dotenv';
 
const filename = `.env.${process.env.NODE_ENV}`;
const envFile = process.env.NODE_ENV && fs.existsSync(filename) ? filename : '.env';
dotenv.config({ path: envFile });
/* Configure Environment */

import app from './server';

const port = Number(process.env.PORT || 8080);
app.listen(port, () => {
  console.info('Service started on port: ' + port);
});
