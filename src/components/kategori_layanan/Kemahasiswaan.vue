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
            Merupakan unit yang bertugas mengelola administrasi kemahasiswaan yang mencakup kegiatan layanan administrasi
            kemahasiswaan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Kemahasiswaan, silakan kunjungi:
        </informasi>
    </div>
</template>
<script>
import Tabs from "../Tabs.vue"
import Informasi from "./Informasi.vue"
export default {
    name: "Kemahasiswaan",
    components: {
        Tabs,
        Informasi,
    },
    data() {
        return {
            tab_lists: [
                {
                    title: "Transkrip aktivitas kemahasiswaan (TAK)",
                    title_detail: "Transkrip aktivitas kemahasiswaan (TAK)",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/tak.png",
                    description: "Layanan approval sertifikat TAK sebagai syarat untuk mengikuti sidang tugas akhir/skripsi/proyek akhir, mendapatkan beasiswa, dan mengikuti seleksi mahasiswa berprestasi.",
                },
                {
                    title: "Surat Tugas / Dispensasi",
                    title_detail: "Surat Tugas / Dispensasi",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-dispen.png",
                    description: "Layanan pembuatan surat tugas atau dispensasi untuk kebutuhan presensi.",
                },
                {
                    title: "Surat Rekomendasi / Delegasi Lomba",
                    title_detail: "Surat Rekomendasi / Delegasi Lomba",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-lomba.png",
                    description: "Layanan pengajuan surat rekomendasi atau surat pengantar lomba.",
                },
                {
                    title: "Surat Keterangan Beasiswa",
                    title_detail: "Surat Keterangan Tidak Menerima Beasiswa Dari Kampus",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-beasiswa.png",
                    description: "Layanan pembuatan surat keterangan tidak menerima beasiswa dari kampus untuk keperluan tertentu.",
                },
                {
                    title: "KTM, Jas Almamater dan Vest",
                    title_detail: "KTM, Jas Almamater dan Vest",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/ktm.png",
                    description: "Layanan pendataan, penerimaan jas almamater & vest serta KTM mahasiswa Institut Teknologi Telkom Surabaya.",
                },
                {
                    title: "Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM",
                    title_detail: "Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/proposal-pengajuan.png",
                    description: "Layanan terkait pelaksanaan pengusulan & pendanaan program kegiatan ormawa dan UKM.",
                },
                {
                    title: "Asuransi dan Layanan Kesehatan Telkomedika",
                    title_detail: "Asuransi dan Layanan Kesehatan Telkomedika",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/asuransi.png",
                    description: "Layanan terkait pelaksanaan pengajuan klaim & asuransi kesehatan mahasiswa.",
                },
            ],
            informasi: {
                title: "Informasi Kemahasiswaan",
                img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-kemahasiswaan.png",
                link_instagram: {
                    link: 'https://www.instagram.com/kemahasiswaanitts/',
                    title: 'kemahasiswaanitts'
                },
                link_website: {
                    link: 'https://www.instagram.com/kemahasiswaan.ittelkomsby/',
                    title: 'https://www.instagram.com/kemahasiswaan.ittelkomsby/'
                }
            }
        }
    }
}
</script>