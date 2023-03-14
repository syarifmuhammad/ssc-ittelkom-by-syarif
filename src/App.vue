<template>
  <navbar @open-sidebar="openSidebar"></navbar>
  <sidebar ref="sidebar"></sidebar>
  <hero></hero>
  <panduan-pengajuan-layanan></panduan-pengajuan-layanan>
  <kategori-layanan></kategori-layanan>
  <custom-footer></custom-footer>
  <div class="fixed bottom-[30px] right-[30px] transition-transform duration-300 hover:-translate-y-[5px]">
    <scroll-top-button></scroll-top-button>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/Sidebar.vue"
import Hero from "./components/Hero.vue"
import PanduanPengajuanLayanan from "./components/PanduanPengajuanLayanan.vue"
import KategoriLayanan from "./components/KategoriLayanan.vue"
import CustomFooter from "./components/CustomFooter.vue"
import ScrollTopButton from "./components/ScrollTopButton.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Hero,
    PanduanPengajuanLayanan,
    KategoriLayanan,
    CustomFooter,
    ScrollTopButton,
  },
  methods: {
    openSidebar() {
      this.$refs.sidebar.open()
    }
  }
}
</script>
