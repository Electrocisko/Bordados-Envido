import express from 'express';
import dotenvConfig from './config/dotenvConfig.js';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = dotenvConfig.app.PORT;
const app = express();

//midlewars
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));


// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');



app.get('/',(req,res) => {
    res.render("index.ejs")
   })


app.listen(PORT, () => {
    console.log('server http://localhost:'+PORT);
})