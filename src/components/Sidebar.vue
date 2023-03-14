<template>
    <div @click="close()" v-if="active" :class="{ 'opacity-0': transition }"
        class="transition duration-500 oveflow-hidden fixed z-60 w-full h-full left-0 top-0 bg-black/70 cursor-pointer">
    </div>
    <div v-if="active"
        class="transition duration-500 oveflow-hidden fixed z-70 w-[320px] md:w-[360px] h-full right-0 top-0 bg-white"
        :class="{ 'translate-x-full': transition }">
        <div class="py-2.5 px-5 border-b border-b-[#E2E9FA] flex justify-between items-center">
            <img class="w-[80px] md:w-[100px]" src="@/assets/img/logo-basic.png" />
            <svg @click="close" class="cursor-pointer text-xl w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        <ul class="p-[30px] divide-y divide-[#f2f2f2]">
            <li class="group py-2.5">
                <a class="text-base font-bold capitalize text-[#1a1a1a] font-lato group-hover:text-secondary group-hover:italic"
                    href="">Home</a>
            </li>
            <li class="group py-2.5">
                <a class="text-base font-bold capitalize text-[#1a1a1a] font-lato group-hover:text-secondary group-hover:italic"
                    href="https://ssc.ittelkom-sby.ac.id/dashboard">Admin Page</a>
            </li>
            <li class="group py-2.5">
                <a class="text-base font-bold capitalize text-[#1a1a1a] font-lato group-hover:text-secondary group-hover:italic"
                    href="https://ssc.ittelkom-sby.ac.id/list">Services List</a>
            </li>
            <li class="group py-2.5">
                <a class="text-base font-bold capitalize text-[#1a1a1a] font-lato group-hover:text-secondary group-hover:italic"
                    href="https://ssc.ittelkom-sby.ac.id/log-ticket">Log Ticket</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Sidebar",
    data() {
        return {
            active: false,
            transition: false,
        }
    },
    methods: {
        open() {
            this.transition = true
            this.active = true
            setTimeout(() => {
                this.transition = false
            }, 1)
        },
        close() {
            this.transition = true
            setTimeout(() => {
                this.active = false
                this.transition = false
            }, 300)
        }
    }
}
</script>