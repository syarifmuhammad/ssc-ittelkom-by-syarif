<template>
    <section id="kategori-layanan" class="px-6 lg:px-40 mt-[5.625rem]">
        <h1 class="mb-6 text-[22px]">
            <span class="text-secondary">
                <svg class="w-[22px] aspect-square inline-block mb-1" aria-hidden="true" focusable="false"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor"
                        d="M432 64H208C199.2 64 192 71.16 192 80V96H128V80C128 35.82 163.8 0 208 0H432C476.2 0 512 35.82 512 80V304C512 348.2 476.2 384 432 384H416V320H432C440.8 320 448 312.8 448 304V80C448 71.16 440.8 64 432 64zM0 192C0 156.7 28.65 128 64 128H320C355.3 128 384 156.7 384 192V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V192zM96 256H288C305.7 256 320 241.7 320 224C320 206.3 305.7 192 288 192H96C78.33 192 64 206.3 64 224C64 241.7 78.33 256 96 256z">
                    </path>
                </svg> Kategori
            </span> Layanan
        </h1>
        <!-- <div class="hidden xl:flex">
            <div v-for="slide, index in slider_items1" :key="slide"
                class="w-full border-[.5px] border-border-default rounded-lg" :class="{ 'ml-4': index != 0 }">
                <img class="m-auto mt-2.5 w-[100px] aspect-square" :src="slide.img" />
                <h2 class="text-center my-5">{{ slide.title }}</h2>
            </div>
        </div> -->
        <carousel class="mb-5" :snap-align="'start'" :breakpoints="breakpoints_slider_1">
            <slide v-for="slide in slider_items1" :key="slide">
                <div @click="active_slide = slide.title"
                    class="w-full px-4 border-[.5px] border-border-default rounded-lg mr-4 cursor-pointer"
                    :class="{ 'bg-secondary text-white': active_slide == slide.title, 'hover:text-secondary': active_slide != slide.title }">
                    <lord-icon :src="slide.icon" trigger="morph"
                        :colors="active_slide == slide.title ? slide.color.active : slide.color.unactive"
                        style="width:100px;height:100px">
                    </lord-icon>
                    <h2 class="text-center my-5 text-sm">{{
                        slide.title
                    }}</h2>
                </div>
            </slide>
        </carousel>
        <carousel :snap-align="'start'" :breakpoints="breakpoints_slider_2">
            <slide v-for="slide in slider_items2" :key="slide">
                <div @click="active_slide = slide.title"
                    class="w-full px-4 border-[.5px] border-border-default rounded-lg mr-4 cursor-pointer"
                    :class="{ 'bg-secondary text-white': active_slide == slide.title, 'hover:text-secondary': active_slide != slide.title }">
                    <lord-icon :src="slide.icon" trigger="morph"
                        :colors="active_slide == slide.title ? slide.color.active : slide.color.unactive"
                        style="width:100px;height:100px">
                    </lord-icon>
                    <h2 class="text-center my-5 text-sm">{{
                        slide.title
                    }}</h2>
                </div>
            </slide>
        </carousel>
    </section>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
    name: "KategoriLayanan",
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            active_slide: "PuTi",
            slider_items1: [
                {
                    title: "Akademik",
                    icon: "https://cdn.lordicon.com/wxnxiano.json",
                    color: {
                        unactive: "primary:#aa0000,secondary:#121331",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
                {
                    title: "PuTi",
                    icon: "https://cdn.lordicon.com/qhgmphtg.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
                {
                    title: "Kemahasiswaan",
                    icon: "https://cdn.lordicon.com/uukerzzv.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
                {
                    title: "Logistik",
                    icon: "https://cdn.lordicon.com/sbiheqdr.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
            ],
            slider_items2: [
                {
                    title: "Keuangan",
                    icon: "https://cdn.lordicon.com/vaeagfzc.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
                {
                    title: "Pusat Bahasa & Perpustakaan",
                    icon: "https://cdn.lordicon.com/gdjyhaga.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
                {
                    title: "FTIB",
                    icon: "https://cdn.lordicon.com/nobciafz.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
                {
                    title: "FTIEC",
                    icon: "https://cdn.lordicon.com/ckuogwdx.json",
                    color: {
                        unactive: "primary:#121331,secondary:#aa0000",
                        active: "primary:#ffffff,secondary:#ffffff"
                    }
                },
            ],
            breakpoints_slider_1: {
                1280: {
                    itemsToShow: 4,
                    mouseDrag: false,
                    touchDrag: false,
                },
                1024: {
                    itemsToShow: 3,
                    wrapAround: true,
                },
                768: {
                    itemsToShow: 2,
                    wrapAround: true,
                },
                0: {
                    itemsToShow: 1,
                    wrapAround: true,
                },
            },
            breakpoints_slider_2: {
                1280: {
                    itemsToShow: 4,
                    mouseDrag: false,
                    touchDrag: false,
                },
                1024: {
                    itemsToShow: 3,
                    wrapAround: true,
                },
                390: {
                    itemsToShow: 2,
                    wrapAround: true,
                },
                0: {
                    itemsToShow: 1,
                    wrapAround: true,
                },
            }
        }
    }
}
</script>
<style scoped>
h2 {
    color: inherit;
}

.carousel__slide {
    align-items: stretch;
}
</style>