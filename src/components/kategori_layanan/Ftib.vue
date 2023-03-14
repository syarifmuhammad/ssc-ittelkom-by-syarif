<template>
    <div>
        <section class="mt-[5.625rem]">
            <div class="w-1/2 min-h-[4rem] flex mb-5">
                <div class="bg-secondary h-[1.2rem] min-w-[42px] w-[11%] rounded-[0.3rem] mr-[7%] mt-[.5%]"></div>
                <h1 class="mb-6 text-[26px] text-secondary">
                    Layanan FTIB
                </h1>
            </div>
            <tabs :tab_lists="tab_lists"></tabs>
        </section>
        <informasi v-bind="informasi">
            Merupakan unit yang bertugas mengelola administrasi ftib yang mencakup kegiatan layanan administrasi ftib, pusat
            bahasa, dan perpustakaan. Informasi lengkap mengenai Unit FTIB, silakan kunjungi:
        </informasi>
    </div>
</template>
<script>
import Tabs from "../Tabs.vue"
import Informasi from "./Informasi.vue"
export default {
    name: "Ftib",
    components: {
        Tabs,
        Informasi,
    },
    data() {
        return {
            tab_lists: [
                {
                    title: "Surat Keterangan Aktif Mahasiswa di Fakultas",
                    title_detail: "Surat Keterangan Aktif Mahasiswa di Fakultas",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png",
                    description: "Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu",
                },
                {
                    title: "Surat Pengantar dari Kampus untuk Tugas MK dan TA",
                    title_detail: "Surat Pengantar dari Kampus untuk Tugas MK dan TA",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Pengantar_dari_Kampus.png",
                    description: "Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan",
                },
                {
                    title: "Surat Dispensasi",
                    title_detail: "Surat Dispensasi",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Dispensasi.png",
                    description: "Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal",
                },
                {
                    title: "Surat Rekomendasi",
                    title_detail: "Surat Rekomendasi",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Rekomendasi.png",
                    description: "Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut",
                },
                {
                    title: "Surat Peminjaman Lab dan Perlengkapannya",
                    title_detail: "Surat Peminjaman Lab dan Perlengkapannya",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Peminjaman_Lab.png",
                    description: "Surat peminjaman ruangan atau inventaris laboratorium",
                },
                {
                    title: "Residensi TA (menginap di kampus)",
                    title_detail: "Residensi TA (menginap di kampus)",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Residensi_TA.png",
                    description: "Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir",
                },
                {
                    title: "Proposal Dana Kegiatan",
                    title_detail: "Proposal Dana Kegiatan",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Proposal_Dana_Kegiatan.png",
                    description: "Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor",
                },
                {
                    title: "Legalisir KHS & Transkrip",
                    title_detail: "Legalisir KHS & Transkrip",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Legalisir_KHS.png",
                    description: "Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip",
                },
            ],
            informasi: {
                title: "Informasi FTIB",
                img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-ftib.png",
                link_instagram: {
                    link: 'https://www.instagram.com/ftib.ittelkomsby/',
                    title: 'ftib.ittelkomsby'
                },
                link_website: {
                    link: 'https://ftib.ittelkom-sby.ac.id/',
                    title: 'https://ftib.ittelkom-sby.ac.id/'
                }
            }
        }
    }
}
</script>