import dotenv from 'dotenv';
import path from 'path';

// librairie path est natif de nodejs
// Le fichier .env que j'utilise ici se trouve à la racine de notre mono repo
// const envPath= path.join(__dirname,'../../../');
// dotenv.config({path:envPath+ './.env'});


// export const NODE_ENV = process.env.NODE_ENV
export const API_base_URL = process.env.API_base_URL || 'http://localhost:4001/'