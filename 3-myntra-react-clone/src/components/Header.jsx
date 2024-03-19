import { MdPersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import myntraStore from "../store";
const Header = () => {
  const bag = useSelector(myntraStore => myntraStore.bag)
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to=""><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon d-flex align-items-center"><IoSearchOutline /></span>
          <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <MdPersonOutline />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <CiHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <HiOutlineShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  )
}
export default Header