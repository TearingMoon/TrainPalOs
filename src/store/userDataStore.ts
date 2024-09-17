import { defineStore } from "pinia";
import User from "@/models/User";
import storage from "@/ionicStorage/ionicStorageService";

export const userDataStore = defineStore("userData", {
  state: () => {
    return {
      user: {} as User,
    };
  },
  getters: {
    getUser: (state) => state.user,
    getName: (state) => state.user.name,
    getAge: (state) => state.user.age,
    getWeight: (state) => state.user.weight,
    getHeight: (state) => state.user.height,
  },
  actions: {
    setUser(user: User) {
      this.user = user;
      this.savePersistentData();
    },
    async savePersistentData() {
      await storage.set("user", this.user);
      console.log("-- User data saved to storage --");
    },
    async getPersistentData() {
      const user = await storage.get("user");
      if (user) {
        this.user = user;
      }
      console.log("-- User data retrieved from storage --");
    },
  },
});
