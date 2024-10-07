<template>
  <ion-page ref="page">
    <ion-content color="light">
      <ion-list lines="full" :inset="true">
        <!-- New Exercise -->
        <ion-item :button="true" id="open-exercise-modal">
          <ion-label>New exercise</ion-label>
        </ion-item>
        <ion-modal
          trigger="open-exercise-modal"
          ref="exercise-modal"
          :presenting-element="$refs.page?.$el"
        >
          <ion-header>
            <ion-toolbar>
              <ion-title>New Exercise</ion-title>
            </ion-toolbar>
          </ion-header>
          <new-exercise-form
            @form-submitted="$refs['exercise-modal']?.$el.dismiss()"
          ></new-exercise-form>
        </ion-modal>

        <!-- New Routine -->
        <ion-item :button="true" id="open-routine-modal">
          <ion-label>New routine</ion-label>
        </ion-item>
        <ion-modal
          trigger="open-routine-modal"
          ref="routine-modal"
          :presenting-element="$refs.page?.$el"
        >
          <ion-header>
            <ion-toolbar>
              <ion-title>New routine</ion-title>
            </ion-toolbar>
          </ion-header>
          <new-routine-form
            @form-submitted="$refs['routine-modal']?.$el.dismiss()"
          ></new-routine-form>
        </ion-modal>
      </ion-list>
      <ion-list lines="full" :inset="true">
        <ion-list-header>Options</ion-list-header>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonContent,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import newExerciseForm from "@/components/forms/NewExerciseForm.vue";
import newRoutineForm from "@/components/forms/NewRoutineForm.vue";
</script>
