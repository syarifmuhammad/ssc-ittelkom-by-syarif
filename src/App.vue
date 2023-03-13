<template>
  <navbar></navbar>
  <hero></hero>
  <panduan-pengajuan-layanan></panduan-pengajuan-layanan>
  <kategori-layanan></kategori-layanan>
  <custom-footer></custom-footer>
</template>
<script>
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import PanduanPengajuanLayanan from "./components/PanduanPengajuanLayanan.vue"
import KategoriLayanan from "./components/KategoriLayanan.vue"
import CustomFooter from "./components/CustomFooter.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    PanduanPengajuanLayanan,
    KategoriLayanan,
    CustomFooter,
  }
}
</script>
