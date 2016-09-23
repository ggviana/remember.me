export default ({add}) => {

  function addURL (event) {
    event.preventDefault()

    const $url = document.getElementById('url')

    add($url.value)

    $url.value = ""
  }

  function clear (event) {
    event.preventDefault()

    const $url = document.getElementById('url')

    $url.value = ""
  }

  return (
    <form action="post">
      <input type="url" id="url" />
      <input type="submit" value="Save" onClick={addURL} />
      <input type="button" value="&times;" onClick={clear} />
    </form>
  )
}
