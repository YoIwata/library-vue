<template>
  <div class="book" v-if="item" key="book">
    <h1>選択した本の詳細</h1>
    <p>このページは ID.{{ $route.params.id }} の本の詳細を表示します</p>

    <dl class="">
        <dt>題名</dt>
        <dd>{{ item.name }}</dd>

        <dt>内容</dt>
        <dd>{{ item.content }}</dd>
    </dl>
  </div>

  <div v-else key="loading">情報を読み込んでいます...</div>

</template>
<script>
import books from '@/api/books.js'
export default {
    props: {
        id: Number
    },
    data() {
        return {
            item: null
        }
    },
    watch: {
        id: {
            handler() {
                books.asyncFind(this.id, item => {
                    this.item = item
                })
            },
            immediate: true
        }
    }
}
</script>
