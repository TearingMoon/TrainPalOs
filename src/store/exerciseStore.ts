import { defineStore } from "pinia";
import Exercise from "@/models/Exercise";
export const exerciseStore = defineStore("exercises", {
  state: () => {
    return {
      exerciseList: [] as Exercise[],
    };
  },
  getters: {},
  actions: {},
});
