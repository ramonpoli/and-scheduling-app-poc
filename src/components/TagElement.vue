<template>
    <a class="button is-primary" v-on:click="tagsToMatch.push(tag)" :class="{ 'is-success': tagsToMatch.indexOf(tag) !== 0 }">{{tag.name}}</a>
</template>
<script>
export default {
  props: {
    tag: Object,
    tagsToMatch: Array,
  },
};
</script>
