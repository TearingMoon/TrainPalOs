import Exercise from "./Exercise";
export default class Routine {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public exercises: {
      monday: Exercise[];
      tuesday: Exercise[];
      wednesday: Exercise[];
      thursday: Exercise[];
      friday: Exercise[];
      saturday: Exercise[];
      sunday: Exercise[];
    }
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.exercises = exercises;
  }
}
