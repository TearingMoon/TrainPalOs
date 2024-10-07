<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { userDataStore } from "./store/userDataStore";
import { exerciseStore } from "./store/exerciseStore";
import { routineStore } from "./store/routineStore";

userDataStore().getPersistentData();
exerciseStore().getPersistentData();
routineStore().getPersistentData();
</script>
