const database = [
    { id: 1, name: 'スッキリわかるサーブレット&JSP入門', content: 'Javaの文法を身につけたならこれを読もう' },
    { id: 2, name: 'Java本格入門', content: 'Java8について学ぶならこれ!!!!' },
    { id: 3, name: 'ハッカーと画家', content: 'ポール・グレアムの名著' }
  ]
  // インポート先で使用できる関数をオブジェクトとしてまとめたもの
  export default {
    fetch() {
      return database
    },
    find(id) {
      return database.find(el => el.id === id)
    },
    asyncFind(id, callback) {
      setTimeout(() => {
        callback(database.find(el => el.id === id))
      }, 1000)
    }
  }