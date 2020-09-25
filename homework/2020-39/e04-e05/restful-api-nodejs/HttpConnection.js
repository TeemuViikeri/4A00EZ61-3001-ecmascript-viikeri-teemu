const fetch = require('node-fetch')

class HttpConnection {
  static get (url, id, callback) {
    if (id === undefined) {
      fetch(url).then(hr => hr.json()).then(callback)
    }

    fetch(url + id).then(hr => hr.json()).then(callback)
  }

  static post (url, object, callback) {
    fetch(url, { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(object) }).then(hr => hr.json().then(callback))
  }

  static delete (url, id, callback) {
    fetch(url + id, { method: 'delete' }, callback).then(callback)
  }
}

module.exports = HttpConnection
