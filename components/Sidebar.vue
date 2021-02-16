<template>
  <SB :items="items">
    <template v-slot:top>
      <Sponsors />
    </template>
  </SB>
</template>

<script>
import Sidebar from "@parent-theme/components/Sidebar.vue"
import Sponsors from "@theme/components/Sponsors.vue"

export default {
  name: "Sidebar",
  components: { SB: Sidebar, Sponsors },
  props: ["items"],
}
</script>