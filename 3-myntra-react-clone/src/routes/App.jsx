import './App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems'
import { useSelector } from 'react-redux'
import myntraStore from '../store'
import LoadingSpinner from '../components/LoadingSpinner'

function App() {

  const fetchStatus = useSelector(myntraStore => myntraStore.fetchStatus)

  return (
    <>
      <Header></Header>
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer></Footer>
    </>
  )
}

export default App
