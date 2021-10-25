<template>
  <div id="app">
    <h1>図書館へようこそ</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/books">本一覧</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* ナビゲーション */
nav {
    display: flex;
    align-items: center;
    background: #222;
}
nav a {
    display: block;
    padding: 0.5em;
    color: #eee;
    line-height: 1em;
    text-decoration: none;
}
/* アクティブなリンク */
.router-link-active {
    background: palevioletred;
}

ul, ol {
  padding: 0;
  position: relative;
  width:500px;
}

ul li, ol li {
  color: #2d8fdd;
  border-left: solid 6px #2d8fdd;/*左側の線*/
  background: #f1f8ff;/*背景色*/
  margin-bottom: 3px;/*下のバーとの余白*/
   line-height: 1.5;
  padding: 0.5em;
  list-style-type: none!important;/*ポチ消す*/
}

.form {
  width: 250px;
}

.formInput {
    border: none;
    background: #f3f3f3;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 0 25px;
  color: #228bc8;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  position: relative;
  transition-duration: 0.2s;
}

</style>
