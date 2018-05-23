<template>
  <div>
    <a class="button is-primary" v-on:click="toggleTag(tag)" :class="{ 'is-success': (tagsToMatch.indexOf(tag) > 0) }">{{tag.name}}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    tag: Object,
    tagsToMatch: Array,
  },
  methods: {
    toggleTag(tagToToggle) {
      if (this.tagsToMatch.indexOf(tagToToggle) <= 0) {
        this.tagsToMatch.push(tagToToggle);
      }
    },
  },
};
</script>
