<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">Hellooo</div>
      <dash-board-menu-button-component />

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashBoardMenuButtonComponent from 'src/components/DashBoardMenuButtonComponent.vue';

//
</script>
