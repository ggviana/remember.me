import {render}          from 'react-dom'
import createApplication from 'createApplication'
import Home              from 'components/Home'

const application = createApplication(document)

render(
  <Home/>,
  application
)