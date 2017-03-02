<template>
	<div class="gel-masthead">
		<slot />
	</div>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
	@import '../common';
	.gel-masthead {
		border-bottom: solid 1px #ccc;
		padding: 16px 0;
	}
</style>
