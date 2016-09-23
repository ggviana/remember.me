import memory from 'lib/memory'

import Form from 'components/Form'
import List from 'components/List'

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
      <div>
        <h1>What you want me to remember</h1>
        <Form add={this.add} />
        <h2>This is what I have in my memory</h2>
        <List items={this.state.items} remove={this.remove} />
      </div>
    )  
  }
})