<template>
    <div class="md:flex md:gap-x-6">
        <div class="md:w-4/12">
            <div class="w-full border-[0.8px] rounded-[5px] divide-y-[0.8px] overflow-hidden">
                <div v-for="tab_list, index in tab_lists" class="px-[30px] py-[15px] cursor-pointer"
                    :class="{ 'bg-secondary cursor-default': tab_lists[active_tab].title == tab_list.title }"
                    @click="active_tab = index">
                    <p class="font-lato text-sm font-normal"
                        :class="{ 'text-white': tab_lists[active_tab].title == tab_list.title }">
                        <svg class="aspect-square" aria-hidden="true" focusable="false" data-prefix="far"
                            data-icon="square-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            data-fa-i2svg="">
                            <path fill="currentColor"
                                d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z">
                            </path>
                        </svg>
                        &nbsp;{{ tab_list.title }}
                    </p>
                </div>
            </div>
        </div>
        <div v-if="tab_lists.length > 0 && active_tab != null && active_tab > -1"
            class="md:w-8/12 border-[0.8px] rounded-[5px] divide-y-[0.8px] overflow-hidden">
            <h2 class="p-4 text-sm font-semibold">{{ tab_lists[active_tab].title_detail }}</h2>
            <div class="p-4">
                <!-- content -->
                <img class="m-auto w-[240px] aspect-square" loading="lazy" :src="tab_lists[active_tab].img" />
                <p class="text-[#465b52] font-lato text-base font-normal">{{ tab_lists[active_tab].description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Tabs",
    props: {
        tab_lists: Array,
    },
    data() {
        return {
            active_tab: 0,
        }
    },
}
</script>
<style scoped>
.lazy {
    background-color: slategrey;
    border-radius: 50%;
}
</style>