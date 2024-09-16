import { defineStore } from "pinia";
import User from "@/models/User";
export const userDataStore = defineStore("userData", {
  state: () => {
    return {
      user: {} as User,
    };
  },
  getters: {},
  actions: {},
});
