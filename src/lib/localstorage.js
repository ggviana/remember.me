export default {

  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get (key) {
    var value
    
    try {
      value = JSON.parse(localStorage.getItem(key))
    }
    catch (e) {}

    return value
  },

  remove (key) {
    localStorage.removeItem(key)
  },
}