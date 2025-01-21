import MainCatalog from './MainCatalog'
import MainSearch from './MainSearch'

function MainNavigation() {
  return (
    <div className="flex justify-between flex-col  sm:flex-row gap-5 p-3">
      <MainCatalog />
      <MainSearch />
    </div>
  )
}

export default MainNavigation
