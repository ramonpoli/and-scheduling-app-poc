<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img v-bind:src="andi.img">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <ul>
            <li>
              <strong>{{andi.name}}</strong>
            </li>
            <li>
              <small>{{andi.role}}</small>
            </li>
            <li>
              <small>Skills:</small>
                <ul>
                  <span class="tag" v-for="skill in andi.skills" :key="skill">
                  {{skill}}
                  </span>
                </ul>
            </li>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet
            massa fringilla egestas. Nullam condimentum luctus turpis.
          </ul>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
            </a>
            <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
            </a>
            <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: 'AndiDescription',
  props: {
    andi: {},
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
  margin: 0 10px;

}
figure {
  margin-top: 50px;
  margin-left: 20px;
}

span{
  margin: 10px;
}

</style>
