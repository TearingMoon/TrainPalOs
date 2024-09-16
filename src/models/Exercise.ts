import ExerciseIntensity from "./ExerciseIntensity";
export default class Exercise {
  constructor(
    public name: string,
    public description: string,
    public intensity: ExerciseIntensity
  ) {
    this.name = name;
    this.description = description;
    this.intensity = intensity;
  }
}
