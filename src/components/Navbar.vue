<template>
    <header ref="navbar"
        class="w-full h-[85px] lg:h-[100px] bg-white z-50 px-6 flex items-center justify-between shadow-md fixed top-0"
        :class="{ 'lg:shadow-none lg:static lg:w-auto lg:border-b xl:mx-36 lg:mx-20 lg:px-0': !fixed, 'xl:px-36 lg:px-20': fixed }">
        <img class="w-[100px]" src="@/assets/img/logo-basic.png" />
        <svg @click="$emit('openSidebar')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </header>
</template>
<script>
export default {
    name: "Navbar",
    emits: ['openSidebar'],
    data() {
        return {
            fixed: false,
        }
    },
    mounted() {
        document.addEventListener("scroll", this.navbar_behaviour)
    },
    methods: {
        navbar_behaviour() {
            if (document.documentElement.scrollTop >= 100) {
                this.fixed = true
            } else {
                this.fixed = false
            }

        }
    }
}
</script>