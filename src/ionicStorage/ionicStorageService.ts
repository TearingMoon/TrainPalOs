import { Storage } from "@ionic/storage";

// Inicializamos el storage y lo exportamos como una promesa para ser usado en los stores
const storage = new Storage();
const storagePromise = storage.create();

export default storagePromise;
