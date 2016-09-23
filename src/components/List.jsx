import style from 'styles/List'

export default ({items, remove}) => {
  return items.length ? (
    <section>
      <h2>This is what I have in my memory</h2>
      <div className={style.list_container}>
        <ul className={style.list}>
          {items.map((item, index) => (
            <li className={style.list_item} key={index}>
              <span className={style.list_item_remove} onClick={() => remove(index)}>
                &times;
              </span>
              <a className={style.list_item_link} href={item} target="_blank" rel="noopener">
                {item}
              </a>
            </li>
            )
          )}
        </ul>
      </div>
    </section>
  ) : null 
}