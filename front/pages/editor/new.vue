<template>
  <div>
    <div class="write-btn">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
    <el-row>
      <el-col :span="12">
        <textarea ref="editor" class="md-editor" :value="content" @input="update" ></textarea>
      </el-col>
      <el-col :span="12">
        <div class="markdown-body" v-html="compiledContent"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
export default {
  data() {
    return {
      content: `# 开课吧
      * 上课
      * 吃饭
      * 写代码
      \`\`\`javascript
        let a=1;
        console.log(a);
      \`\`\`
      `
    };
  },
  mounted() {
    this.timer = null
    this.bindEvents();

    marked.setOption({
      rendered: new marked.Rendered(),
      highlight(code){
        return hljs.highlightAuto(code).value
      }
    })
  },
  computed: {
    compiledContent() {
      return marked(this.content, {});
    }
  },
  methods: {
    bindEvents() {
      this.$refs.editor.addEventListener('paste', async e=>{
        const files = e.clipboardData.files
        console.log(files);
        // 文件上传
      })
      this.$refs.editor.addEventListener('drop', async e=>{
        const files = e.dataTransfer.files
        console.log(files);
        // @todo 文件上传
        e.preventDefault();
      })
    },
    update(e) {
      clearTimeout(this.timer)
      setTimeout(() => {
          this.content = e.target.value;
      }, 350)
    },
    submit() {

    }
  }
};
</script>

<style scoped>
.md-editor {
  width: 100%;
  height: 100vh;
  outline: none;
}

.write-btn {
  position: fixed;
  z-index: 100;
  right: 30px;
  top: 10px;
}
</style>
