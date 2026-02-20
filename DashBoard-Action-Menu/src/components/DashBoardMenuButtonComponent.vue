<template>
  <q-card
    class="q-pl-md text-black"
    style="border-radius: 0% !important; box-shadow: unset; margin-bottom: 15px"
  >
    <q-card-section class="row items-center q-pa-none">
      <div></div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { ref } from 'vue';

const isAdmin = ref(true);

let componentBtnsRegular = [
  [
    {
      label: 'Incluir',
      style: 'width: 160px',
      icon: '',
      action: function () {},
      show: function () {
        return isAdmin.value;
      },
    },
  ],
];
</script>
