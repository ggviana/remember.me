import memory from 'lib/memory'

import Form   from 'components/Form'
import List   from 'components/List'

import 'normalize.css'
import 'styles/Home'

export default React.createClass({
  getInitialState () {
    return {
      items: memory.get(),
    }
  },

  add (item) {
    memory.push(item)

    this.setState({
      items: memory.get()
    })
  },

  remove (index) {
    memory.remove(index)

    this.setState({
      items: memory.get()
    })
  },

  render () {
    return (
      <main>
        <Form add={this.add} />
        <List items={this.state.items} remove={this.remove} />
      </main>
    )  
  }
})