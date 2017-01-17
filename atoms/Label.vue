<template>
    <span class="gel-label">
        <slot />
    </span>
</template>

<script>

</script>

<style lang="scss">
    @import "../common";

    .gel-label {
        text-transform: uppercase;
        background-color: #e6711b;
        color: white;
        padding: 0 3px;

        @include gel-typography('minion-bold');
    }
</style>
