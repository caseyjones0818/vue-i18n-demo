<template>
  <div class="hello">
    <h1>Vue-i18n 例子</h1>
    <p>
      <span>切换语言：</span>
      <select v-model="$i18n.locale">
        <option value="zh-hans">简体中文</option>
        <option value="zh-hant">繁体中文</option>
        <option value="en">英文</option>
      </select>
    </p>

    <h3>普通文本</h3>
    <p> {{ $t("message.pangram") }} </p>

    <h3>单复数</h3>
    <p> 1 {{ $tc('message.mile', 1) }} </p>
    <p> 100 {{ $tc('message.mile', 100) }} </p>

    <h3>时间格式</h3>
    <p>en-SG: {{ $d(new Date(), 'long', 'en-SG') }}</p>
    <p>zh-CN: {{ $d(new Date(), 'long', 'zh-CN') }}</p>
    <p>zh-HK: {{ $d(new Date(), 'long', 'zh-HK') }}</p>

    <h3>货币格式</h3>
    <p>en-SG: {{ $n(100, 'currency', 'en-SG') }}</p>
    <p>zh-CN: {{ $n(100, 'currency', 'zh-CN') }}</p>
    <p>zh-HK: {{ $n(100, 'currency', 'zh-HK') }}</p>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
