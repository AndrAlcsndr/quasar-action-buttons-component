<template>
  <q-card
    class="q-pl-md text-black"
    style="border-radius: 0% !important; box-shadow: unset; margin-bottom: 15px"
  >
    aqui: <q-icon name="fa-solid fa-paperclip" size="24px" />
    <q-card-section class="row items-center q-pa-none">
      <div class="row q-pt-md">
        <div
          :class="componente.show() ? 'q-pr-lg q-pb-md' : 'q-pr-none'"
          v-for="componente in componentBtns"
          :key="componente.label"
        >
          <q-btn
            :label="componente.label"
            :style="componente.style"
            color="primary"
            class="q-mr-sm q-mb-sm"
            :icon="componente.icon"
            @click="componente.action()"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAdmin = ref(true);

const componentBtns = ref([
  {
    label: 'Inclusão',
    style: 'width: 160px',
    icon: '',
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Rascunho',
    style: 'width: 200px',
    icon: '',
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Relatórios',
    style: 'width: 200px;',
    icon: 'fa-solid fa-paperclip',
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },

  {
    label: 'Paramêtros',
    style: 'width: 200px;',
    icon: ``,
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Indicadores',
    style: 'width: 160px;',
    icon: '',
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },
]);
</script>
