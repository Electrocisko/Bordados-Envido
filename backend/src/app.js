import express from 'express';
import dotenvConfig from './config/dotenvConfig.js';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = dotenvConfig.app.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));

app.get('/', (req,res) => {
    res.json({
        message: "App de Bordados"
    })
})


app.listen(PORT, () => {
    console.log('server http://localhost:'+PORT);
})