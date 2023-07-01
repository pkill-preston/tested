<template>
  <input :type="type" :placeholder="this.$props.placeholder">
</template>

<script>
export default {
  name: "FormInput",
  props: {
    type: String,
    placeholder: String
  },
  methods:{
  },
  created() {
  }
}
</script>

<style scoped>
input{
  margin-top: 1rem;
  height: 20px;
  border: 1px solid $primary_yellow;
}
</style>
