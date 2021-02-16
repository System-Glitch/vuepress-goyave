<template>
  <div class="sponsors">
    <template v-if="sponsors.length">
      <span class="sidebar-heading">Sponsors</span>
      <div>
        <Sponsor
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          :name="sponsor.name"
          :img="sponsor.img"
          :url="sponsor.url"
        />
      </div>
    </template>
    <a
      class="become-backer"
      :href="$themeConfig.becomeSponsorLink"
      rel="nofollow"
      target="_blank"
      v-if="$themeConfig.becomeSponsorLink"
    >
      Become a Sponsor
    </a>
  </div>
</template>

<script>
import Sponsor from "@theme/components/Sponsor.vue"

export default {
  name: "Sponsors",
  components: { Sponsor },
  computed: {
    sponsors() {
      return this.$themeConfig.sponsors ? this.$themeConfig.sponsors : []
    }
  }
}
</script>

<style lang="stylus" scoped>
.become-backer {
  border: 1px solid $accentColor;
  border-radius: 2em;
  display: inline-block;
  color: $green;
  font-size: 0.8em;
  width: 125px;
  padding: 4px 0;
  text-align: center;
}

.sponsors {
  color: $light;
  font-size: 0.85em;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  .sidebar-heading {
    padding: 0;
  }
}

@media screen and (min-width: 1300px) {
  .sponsors {
    display: block;
  }
}
</style>