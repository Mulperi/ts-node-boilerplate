import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(cors());

app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening port ${port}`));
