<template>
  <a :href="url" rel="nofollow" target="_blank" class="sponsor">
    <img :src="img" class="logo" :alt="name" />
  </a>
</template>

<script>
export default {
  name: "Sponsor",
  props: {
    name: { type: String, required: true },
    url: { type: String, required: true },
    img: { type: String, required: true },
  },
}
</script>

<style lang="stylus" scoped>
img, a {
  width: 125px;
}

.logo {
  color: $light;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  display: block;

  &:first-child {
    margin-top: 18px;
  }

  &:last-child {
    margin-bottom: 20px;
  }
}
</style>