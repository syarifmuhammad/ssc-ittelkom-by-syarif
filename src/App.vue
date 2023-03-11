<template>
  <navbar></navbar>
  <hero></hero>
  <panduan-pengajuan-layanan></panduan-pengajuan-layanan>
</template>
<script>
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import PanduanPengajuanLayanan from "./components/PanduanPengajuanLayanan.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    PanduanPengajuanLayanan,
  }
}
</script>
