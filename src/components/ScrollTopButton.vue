<template>
    <button v-if="show" @click="scrollToTop" class="w-[40px] aspect-square bg-secondary rounded-[5px] z-50">
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
            <path
                d="M6,6.21a1,1,0,0,0,1.41,0L11,2.58V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V2.59l3.62,3.62a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41L14.13.88a3,3,0,0,0-4.24,0L6,4.8A1,1,0,0,0,6,6.21Z"
                fill="#ffffff" />
        </svg>

    </button>
</template>
<script>
export default {
    name: "ScrollTopButton",
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        document.addEventListener("scroll", this.buttonBehaviour)
    },
    methods: {
        scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        },
        buttonBehaviour() {
            if (document.documentElement.scrollTop >= 300) {
                this.show = true
            } else {
                this.show = false
            }
        }
    }
}
</script>