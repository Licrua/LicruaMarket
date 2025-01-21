
function MainSearch() {
  return (
	<div className="join ">
  <div>
    <div>
      <input className="input input-bordered w-25 cus sm:w-auto  join-item" placeholder="Search" />
    </div>
  </div>
  <select defaultValue={'По умолчанию'}  className="select select-bordered  min-w-[80px] sm:w-auto join-item">
    <option>Убывание</option>
    <option>Возрастание</option>
    <option>По умолчанию</option>
  </select>
  <div className="indicator">
    {/* <span className="indicator-item badge badge-secondary">new</span> */}
    <button className="btn  join-item sm:w-auto">Поиск</button>
  </div>
</div>
  )
}

export default MainSearch
