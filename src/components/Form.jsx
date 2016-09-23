import style from 'styles/Form'

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
    <section className={style.form_container}>
      <h1>What you want me to remember?</h1>
      <form className={style.form} action="post">
        <input className={style.form_input} type="url" id="url" />
        <input className={style.form_button} type="submit" value="Save" onClick={addURL} />
        <input className={style.form_button} type="button" value="&times;" onClick={clear} />
      </form>
    </section>
  )
}
