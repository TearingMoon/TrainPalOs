export default class ExerciseIntensity {
  constructor(
    public cuadripceps: number,
    public hamstrings: number,
    public glutes: number,
    public chest: number,
    public back: number,
    public deltoids: number,
    public biceps: number,
    public triceps: number,
    public trapeze: number,
    public calves: number,
    public abs: number
  ) {
    this.cuadripceps = cuadripceps;
    this.hamstrings = hamstrings;
    this.glutes = glutes;
    this.chest = chest;
    this.back = back;
    this.deltoids = deltoids;
    this.biceps = biceps;
    this.triceps = triceps;
    this.trapeze = trapeze;
    this.calves = calves;
    this.abs = abs;
  }

  notEmpty() {
    return (
      this.cuadripceps !== 0 ||
      this.hamstrings !== 0 ||
      this.glutes !== 0 ||
      this.chest !== 0 ||
      this.back !== 0 ||
      this.deltoids !== 0 ||
      this.biceps !== 0 ||
      this.triceps !== 0 ||
      this.trapeze !== 0 ||
      this.calves !== 0 ||
      this.abs !== 0
    );
  }
}
