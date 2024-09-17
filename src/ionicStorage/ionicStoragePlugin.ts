import { Storage } from "@ionic/storage";

export default {
  install: async (app: any) => {
    const storage = new Storage();
    await storage.create();

    // Proveer el almacenamiento en toda la app
    app.config.globalProperties.$storage = storage;
  },
};
