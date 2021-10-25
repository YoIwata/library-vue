import Vue from 'vue'
import VueRouter from 'vue-router'
// コンポーネント(これがページになる)
import Home from '@/views/Home'
import BookList from '@/views/BookList'
import Book from '@/views/Book'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/books',
            component: BookList
        },
        {
            path: '/book/:id',
            component: Book,
            props: route => ({
                id: Number(route.params.id)
            })
        }
    ]
})
export default router