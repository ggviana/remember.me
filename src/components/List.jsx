export default ({items, remove}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <span>{item}</span>
        <span onClick={() => remove(index)}>&times;</span>
      </li>
      )
    )}
  </ul>
)