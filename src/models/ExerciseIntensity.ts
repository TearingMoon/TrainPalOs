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
}
