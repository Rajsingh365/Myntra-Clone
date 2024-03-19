import { useSelector } from "react-redux"
import HomeItem from "../components/HomeItem"
import myntraStore from "../store"
import FetchItems from "../components/FetchItems"

const Home = () => {

  const items = useSelector(myntraStore => myntraStore.items)
  return (
    <>
      <FetchItems />
      <main>
        <div className="items-container">
          {items.map(item => <HomeItem key={item.id} item={item}></HomeItem>)}
        </div>
      </main>
    </>
  )
}
export default Home