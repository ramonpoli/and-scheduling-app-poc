<template>
  <div class="find-andi">
    <h1>This is the find ANDi page</h1>
    <div v-bind:key="tag.id" v-for="tag in tags">
      <tag-element :tag="tag" :tagsToMatch="tagsToMatch"></tag-element>
    </div>
    <a class="button" v-on:click="findAndi()">Find matching Andi</a>
    <div v-for="andiToMatch in foundAndis" :key="andiToMatch.id">
      <AndiDescription :andi="andiToMatch.andiWithMatchingSkills"/>
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
      tagsToMatch: [],
    };
  },
  computed: {
    foundAndis() {
      const vm = this;
      const andisWithMatchingSkills = [];
      this.andis.forEach((andiToMatch) => {
        const matchingSkills = vm.tagsToMatch.filter(tagToFind => andiToMatch.skills.indexOf(tagToFind.name) !== -1);
        if (matchingSkills.length >= 1) {
          andisWithMatchingSkills.push({
            andiWithMatchingSkills: andiToMatch,
            matchingSkills,
          });
        }
      });
      return andisWithMatchingSkills;
    },
  },
};
</script>
