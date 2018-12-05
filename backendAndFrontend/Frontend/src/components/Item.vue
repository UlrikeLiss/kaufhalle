<script>
export default {
    name: 'item',
    props: ['data']
}
</script>

<template lang="pug">
div
     span {{data.count}}
     span {{' '}}
     span {{data.name}}
</template>

<style>
.wrapper {
    background: red;
    padding: 20px;
    border: 1px solid;
    border-radius: 20px;
}
</style>