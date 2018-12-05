<script>
import { mapActions, mapState } from 'vuex';
import Item from '@/components/Item.vue'

export default {
  name: 'list',
  created() {
    this.fetchList(this.$route.params.name)
  },
  components: {
    Item
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
  ul.items.list
      li(v-for="item in list.items")
        item(:data='item')
</template>

<style>
.name {
  color:rgb(255,20,147);
  border-bottom: 2px solid rgb(255,20,147);
  width: 300px;
  margin: 0 auto 20px auto;
}

.items{
  width: 300px; 
  text-align: left;
  margin: 0 auto 20px auto;
}
</style>