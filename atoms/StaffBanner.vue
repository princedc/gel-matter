<template>
    <div class="gel-staff-banner">
        <div class="gel-wrap">
            <div class="gel-layout">
                <div class="gel-layout__item">
                    <p class="gel-staff-banner__description">
                        <slot />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    @import '../common';

    .gel-staff-banner {
        background-color: #e6711b;
        color: white;
        padding-top: 24px;
        padding-bottom: 24px;

        a {
            color: #fff;
        }
    }

    .gel-staff-banner__description {
        margin: 0;
        @include gel-typography('pica');
    }
</style>
