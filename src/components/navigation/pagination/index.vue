<template>
    <ul class="smy-pagination">
        <li class="smy-pagination-prev"></li>
        <slot></slot>
        <li class="smy-pagination-next"></li>
    </ul>
</template>
<script>
    export default {
        name: "SmyPagination",
        props: {
            currentPage: {
                type: Number
            },
            pageSize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number
            }
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style>
    .smy-pagination {
        font-size: 12px;
    }
</style>