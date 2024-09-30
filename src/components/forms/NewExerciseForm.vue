<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Name"
          placeholder="Exercise name"
          :v-model="exercise.name"
        ></ion-input>
      </ion-item>
      <IonItem>
        <ion-textarea
          label-placement="stacked"
          label="Description"
          placeholder="Exercise description"
          :v-model="exercise.description"
        ></ion-textarea>
      </IonItem>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Exercise from "@/models/Exercise";
import ExerciseIntensity from "@/models/ExerciseIntensity";
import {
  IonItem,
  IonList,
  IonContent,
  IonInput,
  IonTextarea,
} from "@ionic/vue";
export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      exercise: new Exercise(
        "",
        "",
        new ExerciseIntensity(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
      ),
    };
  },
  components: {
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonTextarea,
  },
});
</script>
