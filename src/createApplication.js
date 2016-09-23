export default (document) => {
  var application = document.createElement('div')
  application.id = 'application'

  document.body.appendChild(application)
  
  return application
}