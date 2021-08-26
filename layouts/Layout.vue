<template>
  <ParentLayout>
    <template slot="page-top" v-if="currentVersion != 'latest'">
      <div class="theme-default-content">
        <div class="custom-block warning">
          <p class="custom-block-title">Outdated documentation</p>
          <p>
            You are reading documentation for <b>{{ currentVersion }}</b
            >, which is an outdated version. Click
            <RouterLink :to="latestLink">here</RouterLink> to go to the latest
            documentation.
          </p>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue"

export default {
  components: {
    ParentLayout,
  },
  computed: {
    currentVersion() {
      const path = this.$page.path.split("/")
      if (path.length >= 2 && path[1] !== "guide") {
        return path[1]
      }
      return "latest"
    },
    latestLink() {
      const v = this.currentVersion
      if (v === "latest") {
        return this.$page.path
      }
      return this.$page.path.substring(v.length + 1)
    },
  },
}
</script>

<style lang="stylus" scoped>
.theme-default-content {
  padding-bottom: 0

  .custom-block {
    margin-bottom: -2rem
  }
}
</style>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/dark.styl" lang="stylus"></style>
