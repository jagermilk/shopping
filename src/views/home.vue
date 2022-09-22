<template>
    <div class="home">
        <Mainnavbar tabname="购物街"></Mainnavbar>
    </div>
</template>

<script>
    import {request} from '../network/request'
import Mainnavbar from '@/components/content/navbar/Mainnavbar.vue'

    export default {
    created() {
        request({
            url: "/home/multidata"
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    },
    data() {
        return {};
    },
    components: { Mainnavbar }
}
</script>

<style lang="scss" scoped>

</style>