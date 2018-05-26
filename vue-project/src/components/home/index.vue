<template>
    <div id="siku">
        <main>home</main>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import './index.scss'
    import http from '../../utils/httpClient'
    import footComponent from './foot/foot.vue'
    import router from "../../router/router.js"

    export default{
        data(){
            return{
                dataset: []
            }
        },
        components: {
            footComponent
        },
    }
</script>