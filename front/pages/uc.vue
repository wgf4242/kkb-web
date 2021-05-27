<template>
  <div>
    <h1>用户中心</h1>
    <div>hihi</div>
  </div>
</template>

<script>
export default {
  async mounted() {
    console.log('uc vue mounted');
    const ret = await this.$http.get('/user/info')
    console.log(ret);
  }
};
</script>

<style lang="scss" scoped></style>
