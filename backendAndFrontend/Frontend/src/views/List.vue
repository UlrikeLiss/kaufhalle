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
  h1.name {{list.name}}
    h2 ------------------
    p(v-for="items in list.items")
  div {{ list.items }}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
</style>
