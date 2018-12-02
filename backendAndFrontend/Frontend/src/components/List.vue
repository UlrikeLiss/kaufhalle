<script>
export default {
    name: 'list',
    props: ['data']
}
</script>

<template lang="pug">
div
    div {{data.name}}
</template>

<style>
.wrapper {
    background: red;
    padding: 20px;
    border: 1px solid;
    border-radius: 20px;
}
</style>