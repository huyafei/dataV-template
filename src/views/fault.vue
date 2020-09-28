<template>
  <div class="container">
    <dv-full-screen-container>
      <div class="d1 flex-r">
        <div class="d2">

        </div>
        <div class="d2"></div>
        <div class="d2"></div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
export default {
  name: "Fault",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  //keep-alive 组件激活时调用
  activated() {},
  //keep-alive 组件停用时调用。
  deactivated() {},
  //销毁之前
  beforeDestroy() {},
  //销毁后
  destroyed() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.d1 {
  justify-content: space-between;
  div {
    width: 600px;
    height: 200px;
    border: 1px solid #ddd;
  }
}
</style>
