<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Name"
          placeholder="Exercise name"
          v-model="newRoutine.name"
        ></ion-input>
      </ion-item>
      <IonItem>
        <ion-textarea
          label-placement="stacked"
          label="Description"
          placeholder="Exercise description"
          v-model="newRoutine.description"
        ></ion-textarea>
      </IonItem>
    </ion-list>

    <ion-button
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
import Routine from "@/models/Routine";
import {
  IonItem,
  IonList,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
export default defineComponent({
  emits: ["formSubmitted"],
  data() {
    return {
      newRoutine: new Routine(0, "", "", {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      }),
      exerciseStore: exerciseStore(),
    };
  },

  components: {
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonTextarea,
    IonButton,
  },
  methods: {
    submitForm() {
      this.$emit("formSubmitted", this.newRoutine);
      //TODO: Save the new routine to the store
    },
  },
});
</script>
