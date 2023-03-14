<template>
    <div>
        <informasi v-bind="informasi">
            Merupakan unit yang bertugas mengelola administrasi perpus yang mencakup kegiatan layanan administrasi perpus,
            pusat
            bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Pusat Bahasa & Perpustakaan, silakan kunjungi:
        </informasi>
    </div>
</template>
<script>
import Informasi from "./Informasi.vue"

export default {
    name: "PusatBahasaDanPerpustakaan",
    components: {
        Informasi,
    },
    data() {
        return {
            informasi: {
                title: "Informasi Pusat Bahasa & Perpustakaan",
                img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-perpus.png",
                link_instagram: {
                    link: 'https://www.instagram.com/akademikitts/',
                    title: 'akademikitts'
                },
                link_website: {
                    link: 'https://perpus.ittelkom-sby.ac.id/',
                    title: 'https://perpus.ittelkom-sby.ac.id/'
                }
            }
        }
    }
}
</script>