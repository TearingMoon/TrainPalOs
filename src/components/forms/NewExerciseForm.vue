<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Name"
          placeholder="Exercise name"
          v-model="newExercise.name"
        ></ion-input>
      </ion-item>
      <IonItem>
        <ion-textarea
          label-placement="stacked"
          label="Description"
          placeholder="Exercise description"
          v-model="newExercise.description"
        ></ion-textarea>
      </IonItem>
    </ion-list>
    <ion-list :inset="true">
      <ion-item>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Cuadriceps"
          v-model="newExercise.intensity.cuadripceps"
        >
        </ion-range>
      </ion-item>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Hamstrings"
          v-model="newExercise.intensity.hamstrings"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Glutes"
          v-model="newExercise.intensity.glutes"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Chest"
          v-model="newExercise.intensity.chest"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Back"
          v-model="newExercise.intensity.back"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Deltoids"
          v-model="newExercise.intensity.deltoids"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Biceps"
          v-model="newExercise.intensity.biceps"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Triceps"
          v-model="newExercise.intensity.triceps"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Trapeze"
          v-model="newExercise.intensity.trapeze"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Calves"
          v-model="newExercise.intensity.calves"
        >
        </ion-range>
      </IonItem>
      <IonItem>
        <ion-range
          :ticks="true"
          :snaps="true"
          :min="0"
          :max="4"
          label-placement="fixed"
          label="Abs"
          v-model="newExercise.intensity.abs"
        >
        </ion-range>
      </IonItem>
    </ion-list>
    <ion-button
      :disabled="newExercise.name == '' || !newExercise.intensity.notEmpty()"
      @click="submitForm"
      expand="block"
      class="ion-padding"
      color="primary"
    >
      Save
    </ion-button>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { exerciseStore } from "@/store/exerciseStore";
import Exercise from "@/models/Exercise";
import ExerciseIntensity from "@/models/ExerciseIntensity";
import {
  IonItem,
  IonList,
  IonContent,
  IonInput,
  IonTextarea,
  IonRange,
  IonButton,
} from "@ionic/vue";
export default defineComponent({
  emits: ["formSubmitted"],
  data() {
    return {
      newExercise: new Exercise(
        "",
        "",
        new ExerciseIntensity(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
      ),
      exerciseStore: exerciseStore(),
    };
  },

  components: {
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonTextarea,
    IonRange,
    IonButton,
  },
  methods: {
    submitForm() {
      this.$emit("formSubmitted", this.newExercise);
      this.exerciseStore.addExercise(this.newExercise);
    },
  },
});
</script>
