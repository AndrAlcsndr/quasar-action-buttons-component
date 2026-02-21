<template>
  <q-card
    class="q-pl-md text-black"
    style="border-radius: 0% !important; box-shadow: unset; margin-bottom: 20px"
  >
    
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
import { useRouter } from 'vue-router';

const isAdmin = ref(true);
const $router = useRouter();

const componentBtns = ref([
  {
    label: 'Inclusão',
    style: 'width: 160px',
    icon: 'fa-solid fa-plus',
    action: function () {
      $router.push('/inclusao');
    },
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Rascunho',
    style: 'width: 160px',
    icon: 'fa-solid fa-pen',
    action: function () {
      $router.push('/rascunho');
    },
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Relatórios',
    style: 'width: 160px;',
    icon: 'fa-solid fa-paperclip',
    action: function () {
      $router.push('/relatorios');
    },
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Paramêtros',
    style: 'width: 160px;',
    icon: 'fa-solid fa-sliders',
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },
  {
    label: 'Indicadores',
    style: 'width: 160px;',
    icon: 'fa-solid fa-caret-down',
    action: function () {},
    show: function () {
      return isAdmin.value;
    },
  },
]);
</script>
