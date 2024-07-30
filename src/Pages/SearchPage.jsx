
import { Link } from "react-router-dom";
function SearchPage({showModal, search, toggle, filteredProducts}) {

  return (
    showModal &&(
        <div className="p-5 w-1/3 absolute top-80 left-20 bg-white shadow-lg z-30">
        <div className="display">
          {filteredProducts.length==0 && search!="" ? <div>no products found</div> : (search=="" ? <div>type to start searching</div>: (filteredProducts.map((item) => (
            <Link to={`/detail/${item.id}`} className="p-2" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md h-24"
                />
              <h6>{item.category}</h6>
              <h3>{item.title}</h3>
              <h5>${item.price}</h5>
            </Link>
          ))))}
        </div>
      </div>
    )
  );
}

export default SearchPage;
