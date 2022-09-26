<template>
    <div class="tabbaritem">
        <div @click="routerlink">
            <div v-if="!active">
                <slot name="item-icon"></slot>
            </div>
            <div v-if="active">
                <slot name="item-icon-active"></slot>
            </div>
            <div :class="{isActive:active}">
                <slot name="item-name"></slot>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        link: String
    },
    computed: {
        active() {
            return this.$route.path.indexOf(this.link) !== -1
        }
    },
    methods: {
        routerlink() {
            this.$router.push(this.link)
        }
    }
}
</script>

<style lang="less" scoped>
.tabbaritem {
    div {}
}

.isActive {
    color:rgb(255, 110, 134);
}
</style>