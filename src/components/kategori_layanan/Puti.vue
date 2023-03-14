<template>
    <div>
        <section class="mt-[5.625rem]">
            <div class="w-1/2 min-h-[4rem] flex mb-5">
                <div class="bg-secondary h-[1.2rem] min-w-[42px] w-[11%] rounded-[0.3rem] mr-[7%] mt-[.5%]"></div>
                <h1 class="mb-6 text-[26px] text-secondary">
                    PuTi
                </h1>
            </div>
            <tabs :tab_lists="tab_lists"></tabs>
        </section>
        <informasi v-bind="informasi">
            Merupakan unit yang bertugas mengelola administrasi puti yang mencakup kegiatan layanan administrasi puti, pusat
            bahasa, dan perpustakaan. Informasi lengkap mengenai Unit PuTi, silakan kunjungi:
        </informasi>
    </div>
</template>
<script>
import Tabs from "../Tabs.vue"
import Informasi from "./Informasi.vue"
export default {
    name: "Puti",
    components: {
        Tabs,
        Informasi,
    },
    data() {
        return {
            tab_lists: [
                {
                    title: "Manajemen Akun",
                    title_detail: "Manajemen Akun (iGracias, eLearning, WiFi)",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/manajemen-akun.png",
                    description: "Layanan untuk permintaan akun Email, iGracias, e-Learning, WiFi, Office365 untuk menunjang keberlangsungan kegiatan akademik.",
                },
                {
                    title: "Akses Internet",
                    title_detail: "Akses Internet",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/internet.png",
                    description: "Layanan untuk pengaduan mengenai akses internet yang putus nyambung (Blind Spot) dan login wifi undefined, serta peminjaman Orbit atau kebutuhan internet untuk event",
                },
                {
                    title: "Layanan aplikasi",
                    title_detail: "Layanan aplikasi",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/layanan-aplikasi.png",
                    description: "Layanan untuk mengatasi aplikasi(iGracias, Elearning dsb) yang terkena masalah seperti bug dan error yang berdampak terhadap keberlangsungan kegiatan akademik.",
                },
                {
                    title: "Layanan Hosting",
                    title_detail: "Layanan Hosting",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/layanan-hosting.png",
                    description: "Layanan untuk memenuhi permintaan domain dan VPS untuk keperluan hosting aplikasi atau website",
                },
                {
                    title: "Pengembangan aplikasi",
                    title_detail: "Pengembangan aplikasi",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/pengembangan-app.png",
                    description: "Layanan pembuatan solusi sistem informasi untuk memenuhi kebutuhan proses bisnis.",
                },
            ],
            informasi: {
                title: "Informasi PuTi",
                img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-puti.png",
                link_instagram: {
                    link: 'https://www.instagram.com/puti.ittelkomsby/',
                    title: 'puti.ittelkomsby'
                },
                link_website: {
                    link: 'https://puti.ittelkom-sby.ac.id/',
                    title: 'https://puti.ittelkom-sby.ac.id/'
                }
            },
        }
    }
}
</script>