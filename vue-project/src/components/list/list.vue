<template>
    <div id="list">
        list
    </div>
</template>

<script>
    import './list.scss'
    import http from '../../utils/httpClient.js'

    export default{
        data() {
            return {
                dataset: []
            }
        },
        components: {
        },
    }
</script>