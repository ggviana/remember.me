import memory from 'lib/memory'

import 'normalize.css'
import 'styles/Home.css'

import Form   from 'components/Form'
import List   from 'components/List'

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