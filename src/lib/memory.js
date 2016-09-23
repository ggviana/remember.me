import localstorage from 'lib/localstorage'

let memory = localstorage.get('memory') || []

export default {
  push (item) {
    memory.push(item)

    this.save()

    return this
  },

  get () {
    return memory
  },

  remove (index) {
    memory.splice(index, 1)

    this.save()

    return this
  },

  save () {
    localstorage.set('memory', this.get())
  }
}