<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'list',
  created() {
    this.fetchList(this.$route.params.name)
  },
  computed: {
    ...mapState({
      list: state => state.lists.list
    }),
  },
  methods: {
    ...mapActions(['fetchList'])
  },
};
</script>

<template lang="pug">
div
  h2.name {{list.name}}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
</style>