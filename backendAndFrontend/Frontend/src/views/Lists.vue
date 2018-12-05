<script>
import { mapActions, mapState } from 'vuex';
import List from '@/components/List.vue'

export default {
  name: 'lists',
  created() {
    this.fetchLists();
  },

  components: {
    List
  },

  computed: {
    ...mapState({
      lists: state => state.lists.data,
    }),
  },
  methods: {
    ...mapActions(['fetchLists'])
    },
};
</script>


<template lang="pug">
div
    h1 Here are the Lists:
    div.lists-list
      div.list(v-for="list in lists")
        list(:data='list')
</template>

<style>
.lists-list {
  display: flex;
  margin: 0 auto 20px auto;
}

.list {
  margin: 0px auto;
}
</style>
