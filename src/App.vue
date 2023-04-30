<script lang="ts" setup>
import FormInput from "./components/FormInput/FormInput.vue";
import { vMaska } from "maska"
import {VaDateInput} from "vuestic-ui";

const fields = {
  name: {
    type: 'text',
    placeholder:'Name',
  },
  cpf: {
    type: 'text',
    placeholder:'CPF',
    mask: '###-###-###-##'
  },
  date: {
    type: 'text',
    placeholder:'Date',
    mask: '##/##/####'
  },
  phone: {
    type: 'text',
    placeholder:'Phone',
    mask: '(##) ####-####'
  },
  email: {
    type: 'text',
    placeholder:'Email',
  },
  password: {
    type: 'password',
    placeholder:'Password',
  },
}

Object.entries(fields).forEach((item) => {
  console.log(`${item[0]}`,item[1].placeholder)
})

</script>

<template>
  <div class="placeholder">
    <div class="container">
      <FormInput v-maska v-for="(item,index) in Object.entries(fields)" :placeholder="item[1].placeholder" :data-maska="item[1]?.mask" :type="item[1].type" :key="index"/>
      <va-date-input
                      :readonly="false"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.placeholder {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $background;
}

.container {
  display: flex;
  justify-content: space-evenly;
  border: 3px solid #fadd1c;
  border-radius: 16px;
  max-width: 350px;
  width: 100%;
  height: 400px;
  background: #002b87;
  flex-wrap: wrap;
  align-content: space-around;
  flex-direction: column;
}

</style>
