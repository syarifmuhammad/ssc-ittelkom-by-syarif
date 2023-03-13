<template>
    <section class="mt-[5.625rem]">
        <div class="w-1/2 min-h-[4rem] flex mb-5">
            <div class="bg-secondary h-[1.2rem] min-w-[42px] w-[11%] rounded-[0.3rem] mr-[7%] mt-[.5%]"></div>
            <h1 class="mb-6 text-[26px] text-secondary">
                Layanan Logistik
            </h1>
        </div>
        <tabs :tab_lists="tab_lists"></tabs>
    </section>
</template>
<script>
import Tabs from "../Tabs.vue"
export default {
    name: "Logistik",
    components: {
        Tabs,
    },
    data() {
        return {
            tab_lists: [
                {
                    title: "Peminjaman Asset",
                    title_detail: "Peminjaman Asset",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/logistik/peminjaman.png",
                    description: "Layanan peminjaman asset seperti ruangan kuliah, aula rapat, serta perlengkapan audio & video.",
                },
                {
                    title: "Pemeliharaan Asset Rusak/Hilang",
                    title_detail: "Pemeliharaan Asset Rusak/Hilang",
                    img: "https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/logistik/pemeliharaan.png",
                    description: "Layanan pemeliharaan asset mengenai kelistrikan, air, gedung, audio & video yang rusak atau hilang.",
                },
            ],
        }
    }
}
</script>