<template>
  <div>
    <h1>用户中心</h1>
    <input type="file" name="file" @change="handleFileChange" />
    <el-button @click="uploadFile">上传</el-button>
  </div>
</template>

<script>
export default {
  async mounted() {
    const ret = await this.$http.get("/user/info");
    console.log(ret);
  },
  data() {
    return { file: null };
  },
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) {
        return;
      }
      this.file = file;
    },

    async uploadFile() {
      const form = new FormData();
      form.append("name", "file");
      form.append("file", this.file);
      const ret = await this.$http.post("/uploadfile", form);
      console.log(ret);
    }
  }
};
</script>

<style lang="scss" scoped></style>
