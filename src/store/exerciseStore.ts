import { defineStore } from "pinia";
import Exercise from "@/models/Exercise";
import storagePromise from "@/ionicStorage/ionicStorageService";

export const exerciseStore = defineStore("exercises", {
  state: () => {
    return {
      exerciseList: [] as Exercise[],
    };
  },
  getters: {},
  actions: {
    addExercise(exercise: Exercise) {
      this.exerciseList.push(exercise);
      this.savePersistentData();
    },
    async savePersistentData() {
      const storage = await storagePromise;
      await storage.set("user", this.exerciseList);
      console.log("-- Exercise List saved to storage --");
    },
    async getPersistentData() {
      const storage = await storagePromise;
      const exerciseList = await storage.get("user");
      if (exerciseList) {
        this.exerciseList = exerciseList;
      }
      console.log("-- Exercise List retrieved from storage --");
    },
  },
});
