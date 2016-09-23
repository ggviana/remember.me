import {render}          from 'react-dom'
import createApplication from 'createApplication'
import Home              from 'components/Home'

require('offline-plugin/runtime').install()

const application = createApplication(document)

render(
  <Home/>,
  application
)