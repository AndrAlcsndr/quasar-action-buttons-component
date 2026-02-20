<template>
  <q-card
    class="q-pl-md text-black"
    style="border-radius: 0% !important; box-shadow: unset; margin-bottom: 15px"
  >
    <q-card-section class="row items-center q-pa-none">
      <div ></div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { ref } from 'vue';

const isAdmin = ref(true);

let componentBtnsRegular = [
  [
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
        return isAdmin.value
      }
    },
    {
      label: 'Relatórios',
      style: 'width: 200px;',
      icon: '',
      action: function () {},
      show: function () {
        return isAdmin.value
      }
    },
     {
      label: 'Paramêtros',
      style: 'width: 200px;',
      icon: '',
      action: function () {},
      show: function () {
        return isAdmin.value
      }
    },
    {
      label: 'Indicadores',
      style: 'width: 160px;',
      icon: '',
      action: function () {},
      show: function () {
        return isAdmin.value
      }
    }
  ],
  [
    {
      label: 'Avisos',
      style: 'width: 160px;',
      icon: '',
      action: async function () {},
      show: function () {
        return isAdmin.value
      }
    },
    {
      label: 'Perfis',
      style: 'width: 200px;',
      icon: '',
      action: async function () {},
      show: function () {
        return isAdmin.value
      }
    },
    {
      label: 'Itens pendentes',
      style: 'width: 200px;',
      icon: '',
      action: async function () {},
      show: function () {
        return isAdmin.value
      }
    },
    {
      label: 'Filtrar por tipo',
      style: 'width: 200px;',
      icon: '',
      action: async function () {},
      show: function () {
        return isAdmin.value
      }
    },
    {
      label: 'Diligencias',
      style: 'width: 160px;',
      icon: '',
      action: async function () {},
      show: function () {
        return isAdmin.value
      }
    }
  ],
];
</script>
