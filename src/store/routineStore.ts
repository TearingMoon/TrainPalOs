import { defineStore } from "pinia";
import Routine from "@/models/Routine";
import storage from "@/ionicStorage/ionicStorageService";

export const routineStore = defineStore("routines", {
  state: () => {
    return {
      currentRoutine: {} as Routine,
      routineList: [] as Routine[],
    };
  },
  getters: {
    getCurrentRoutine: (state) => state.currentRoutine,
    getRoutines: (state) => state.routineList,
  },
  actions: {
    saveRoutine(routine: Routine) {
      routine.id = this.generateId();
      this.routineList.push(routine);
      this.savePersistentData();
    },
    setCurrentRoutine(routine: Routine) {
      this.currentRoutine = routine;
      this.savePersistentData();
    },
    removeRoutine(routine: Routine) {
      const index = this.routineList.indexOf(routine);
      this.routineList.splice(index, 1);
      this.reorderRoutines();
      this.savePersistentData();
    },
    editRoutine(routine: Routine) {
      const index = this.routineList.findIndex((r) => r.id === routine.id);
      this.routineList[index] = routine;
      this.savePersistentData();
    },
    generateId() {
      let id = 1;
      if (this.routineList.length > 0) {
        for (const routine of this.routineList) {
          if (routine.id == id) {
            id++;
          } else {
            break;
          }
        }
      }
      return id;
    },
    reorderRoutines() {
      this.routineList.sort((a, b) => a.id - b.id);
    },
    //#region Storage
    async savePersistentData() {
      await storage.set("currentRoutine", this.currentRoutine);
      await storage.set("routines", this.routineList);
      console.log("-- Routines saved to storage --");
    },
    async getPersistentData() {
      const currentRoutine = await storage.get("currentRoutine");
      const routines = await storage.get("routines");
      if (currentRoutine) {
        this.currentRoutine = currentRoutine;
      }
      if (routines) {
        this.routineList = routines;
      }
      console.log("-- Routines retrieved from storage --");
    },
    //#endregion
  },
});
