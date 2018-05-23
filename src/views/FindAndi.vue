<template>
  <div>
  <div class="find-andi">
    <h1>This is the find ANDi page</h1>
    <div>
      <ul>
        <li v-bind:key="tag.id" v-for="tag in tags">
          <tag-element :tag="tag" :tagsToMatch="tagsToMatch"></tag-element>
        </li>
      </ul>
    </div>
    <div class="tile is-child notification is-primary" v-for="andiToMatch in foundAndis" :key="andiToMatch.id">
      <AndiDescription :andi="andiToMatch.andiWithMatchingSkills"/>

    </div>
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

<style lang="scss" scoped>
h1 {

    color: red;
    font-weight: bold;
    font-size: 30px;
    padding: 10px;
    padding-bottom: 30px;
}
ul {
  list-style-type: none;
  padding: 0 0 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
