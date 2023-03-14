<template>
    <div>
        <section class="mt-[5.625rem]">
            <div class="w-1/2 min-h-[4rem] flex mb-5">
                <div class="bg-secondary h-[1.2rem] min-w-[42px] w-[11%] rounded-[0.3rem] mr-[7%] mt-[.5%]"></div>
                <h1 class="mb-6 text-[26px] text-secondary">
                    Layanan Keuangan
                </h1>
            </div>
            <tabs :tab_lists="tab_lists"></tabs>
        </section>
        <informasi v-bind="informasi">
            Merupakan unit yang bertugas mengelola administrasi keuangan yang mencakup kegiatan layanan administrasi
            keuangan,
            pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Keuangan, silakan kunjungi:
        </informasi>
    </div>
</template>
<script>
import Tabs from "../Tabs.vue"
import Informasi from "./Informasi.vue"
export default {
    name: "Keuangan",
    components: {
        Tabs,
        Informasi,
    },
    data() {
        return {
            tab_lists: [
                {
                    title: "Pembayaran BPP Semester",
                    title_detail: "Pembayaran BPP Semester",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Pembayaran_BPP_Semester.png",
                    description: "Panduan pembayaran Biaya Penyelenggaraan Pendidikan setiap semester.",
                },
                {
                    title: "Pengajuan Angsuran",
                    title_detail: "Pengajuan Angsuran",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Pengajuan_Angsuran.png",
                    description: "Pengajuan keringanan bagi mahasiswa yang belum dapat melakukan pelunasan pembayaran BPP",
                },
                {
                    title: "Permintaan Bukti Pembayaran/Kuitansi Pembayaran Biaya Pendidikan",
                    title_detail: "Permintaan Bukti Pembayaran/Kuitansi Pembayaran Biaya Pendidikan",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Bukti_Pembayaran.png",
                    description: "Permintaan bukti pembayaran biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa",
                },
                {
                    title: "Permintaan Surat Tagihan/ Invoice Biaya Pendidikan",
                    title_detail: "Permintaan Surat Tagihan/ Invoice Biaya Pendidikan",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Surat_Tagihan.png",
                    description: "Permintaan surat tagihan atau invoice biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa",
                },
                {
                    title: "Permintaan Surat Keterangan Bebas Administrasi Keuangan",
                    title_detail: "Permintaan Surat Keterangan Bebas Administrasi Keuangan",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Surat_Keterangan.png",
                    description: "Permintaan surat keterangan yang menyatakan bahwa mahasiswa sudah tidak memiliki piutang biaya pendidikan. Surat tersebut digunakan untuk keperluan mengurus proses kelulusan dan proses undur diri",
                },
            ],
            informasi: {
                title: "Informasi Keuangan",
                img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-keuangan.png",
                link_instagram: {
                    link: 'https://www.instagram.com/keuangan.ittelkomsby/',
                    title: 'keuangan.ittelkomsby'
                },
                link_website: {
                    link: 'https://keuangan.ittelkom-sby.ac.id/',
                    title: 'https://keuangan.ittelkom-sby.ac.id/'
                }
            }
        }
    }
}
</script>