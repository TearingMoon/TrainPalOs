import { defineStore } from "pinia";
import Routine from "@/models/Routine";
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
      this.routineList.push(routine);
    },
    setCurrentRoutine(routine: Routine) {
      this.currentRoutine = routine;
    },
    removeRoutine(routine: Routine) {
      const index = this.routineList.indexOf(routine);
      this.routineList.splice(index, 1);
    },
    editRoutine(routine: Routine) {
      const index = this.routineList.findIndex((r) => r.id === routine.id);
      this.routineList[index] = routine;
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
  },
});
