<template>
  <div class="find-andi">
    <h1>This is the find ANDi page</h1>
    <div v-bind:key="tag.id" v-for="tag in tags">
      <tag-element :tag="tag"></tag-element>
    </div>
    <div v-for="andi in andis" :key="andi.id">
      <AndiDescription :andi="andi"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tags from '../../data/tags.json';
import Andis from '../../data/andis.json';
import TagElement from '../components/TagElement.vue';
import AndiDescription from './AndiDescription.vue';


export default {
  components: { AndiDescription, TagElement },
  data() {
    return {
      tags: Tags,
      andis: Andis,
    };
  },
};
</script>
