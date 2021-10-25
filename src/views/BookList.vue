<template>
    <div class="books">
        <h1>本一覧</h1>
        <p>クリックして詳細へ飛ぶ</p>
        <ul>
            <li v-for="{ id, name } in list" :key="id">
                <router-link :to="`/book/${ id }`">{{ name }}</router-link>
            </li>
        </ul>

    <div class="form">
        <h2>題名: </h2>
        <input v-model.trim="bookTitle" class="formInput"><br>
        <h2>内容: </h2>
        <textarea v-model.trim="bookContent" class="formInput" cols="30" rows="7"></textarea><br>

        <button v-on:click="addList">登録</button>
    </div>

    </div>
</template>

<script>
import books from '@/api/books.js'

export default {
    data: function () {
        return {
            bookTitle: '',
            bookContent: ''
        }
    },
    computed: {
        list: () => books.fetch()
    },
    methods: {
        addList: function() {
            if(this.bookTitle != null && this.bookContent != null) {
                this.list.push({id: this.list.length + 1, name: this.bookTitle, content: this.bookContent});
                this.bookTitle = '';
                this.bookContent = '';
            }
        }
    }
}
</script>
