<template>
    <section class="mt-[5.625rem]">
        <div class="w-1/2 min-h-[4rem] flex mb-5">
            <div class="bg-secondary h-[1.2rem] min-w-[42px] w-[11%] rounded-[0.3rem] mr-[7%] mt-[.5%]"></div>
            <h1 class="mb-6 text-[26px] text-secondary">
                Layanan Akademik
            </h1>
        </div>
        <tabs :tab_lists="tab_lists"></tabs>
    </section>
    <informasi v-bind="informasi">
        Merupakan unit yang bertugas mengelola administrasi akademik yang mencakup kegiatan layanan administrasi akademik,
        pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Akademik, silakan kunjungi:
    </informasi>
</template>
<script>
import Tabs from "../Tabs.vue"
import Informasi from "./Informasi.vue"
export default {
    name: "LayananAkademik",
    components: {
        Tabs,
        Informasi,
    },
    data() {
        return {
            tab_lists: [
                {
                    title: "Registrasi KRS",
                    title_detail: "Registrasi KRS",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/registrasi-krs.png",
                    description: "Merupakan registrasi mahasiswa pada setiap semester awal perkuliahan",
                },
                {
                    title: "Ujian (UTS & UAS)",
                    title_detail: "Ujian (UTS & UAS)",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/uts-uas.png",
                    description: "Layanan pengumuman jadwal kegiatan ujian akademik yang bertujuan untuk melakukan pengukuran dan penilaian kompetensi peserta didik, sebagai dasar kegiatan evaluasi pembelajaran perkuliahan.",
                },
                {
                    title: "Surat Keterangan Aktif",
                    title_detail: "Surat Keterangan Aktif",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/surat-keterangan-aktif.png",
                    description: "Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.",
                },
                {
                    title: "Layanan Perkuliahan",
                    title_detail: "Layanan Perkuliahan",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/layanan-perkuliahan.png",
                    description: "Layanan panduan mengenai proses pelayanan perkuliahan yang ada di IT Telkom Surabaya",
                },
                {
                    title: "Ijazah & Transkrip Nilai",
                    title_detail: "Ijazah & Transkrip Nilai",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/ijazah.png",
                    description: "Layanan mengenai proses penerbitan transkrip dan ijazah kepada calon lulusan dan pihak terkait sehingga proses penerbitan transkrip dapat terkendali.",
                },
            ],
            informasi: {
                title: "Informasi Akademik",
                img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-academic.png",
                link_instagram: {
                    link: 'https://www.instagram.com/akademikitts/',
                    title: 'akademikitts'
                },
                link_website: {
                    link: 'https://akademik.ittelkom-sby.ac.id/',
                    title: 'https://akademik.ittelkom-sby.ac.id/'
                }
            }
        }
    }
}
</script>