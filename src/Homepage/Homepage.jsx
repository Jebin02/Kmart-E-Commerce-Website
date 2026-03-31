import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = ({ isLoggedIn, triggerLogin }) => {
  const navigate = useNavigate();

  // Carousel images
  const images = [
    "https://i.pinimg.com/736x/84/ad/1c/84ad1c67da7c18049aaa3f71bb3e474b.jpg",
    "https://i.pinimg.com/1200x/16/1f/02/161f02f8e5b7728798f862e0f9bea230.jpg",
    "https://i.pinimg.com/736x/3f/50/dc/3f50dc11de0c352f8ef7d5e046e476ee.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  // ✅ FIXED: Works even after logout
  const handleDiscover = (path) => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate(path);
    } else {
      if (triggerLogin) {
        triggerLogin(); // open login modal
      } else {
        navigate("/login"); // fallback
      }
    }
  };


 
  return (
    <div>
      {/* 🔥 TOP CAROUSEL */}
      <div className="carousel">
        <img src={images[current]} alt="banner" className="carousel-img" />
      </div>

      {/* FIRST COLLECTION */}
      <div className="cont1">
        <h1 className="cont2">NEW COLLECTIONS</h1>
      </div>

      <div className="test">
        <div className="card">
          <img
            className="card-img-top"
            src="https://themewagon.github.io/kaira/images/banner-image-1.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Jacket</h4>
            <p className="card-text">
              Premium leather jacket crafted from high-quality materials.
            </p>
            <div className="btn-grp">
              <button className="btn" onClick={() => handleDiscover("/productpage")}>
                Discover More
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://i.pinimg.com/736x/53/6a/5b/536a5bf3812440af46428f8adb249fa7.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">T-shirt for Girls</h4>
            <p className="card-text">
              Stylish and durable leather jacket for everyday wear.
            </p>
            <button className="btn" onClick={() => handleDiscover("/productpage1")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">SmartPhone</h4>
            <p className="card-text">Classic leather jacket with premium finish.</p>
            <button className="btn" onClick={() => handleDiscover("/productpage2")}>
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* SECOND COLLECTION */}
      <div className="cont1">
        <h1 className="cont2">SHOE COLLECTIONS</h1>
      </div>

      <div className="test">
        <div className="card">
          <img
            className="card-img-top"
            src="https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/24750662/2023/8/31/42b8c8e5-3098-4484-bd98-70ef6c3ec0e41693479000812FormalShoes1.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Formal shoe</h4>
            <p className="card-text">Modern shoe with classic looks and browny classic shoe</p>
            <button className="btn" onClick={() => handleDiscover("/productpage3")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.edokan.co/public/stores/61e022fa4c90a5779374d5f9/product-square/1688_0308_143330_01.jpeg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Casual shoe</h4>
            <p className="card-text">Premium collection with stylish design.</p>
            <button className="btn" onClick={() => handleDiscover("/productpage4")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/397446/02/sv01/fnd/PNA/fmt/png/PUMA-Club-II-Year-Of-Sports-Men's-Sneakers"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Sneaker</h4>
            <p className="card-text">Brand speaks well high quality with smart comfort</p>
            <button className="btn" onClick={() => handleDiscover("/productpage5")}>
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Third COLLECTION */}
      <div className="cont1">
        <h1 className="cont2">DRESSES</h1>
      </div>

      <div className="test">
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdnc.lystit.com/photos/2012/04/13/polo-ralph-lauren-white-miami-polo-shirt-product-4-3219583-310149366.jpeg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Dress For Men</h4>
            <p className="card-text">Modern shirt with classic looks and white classic look</p>
            <button className="btn" onClick={() => handleDiscover("/productpage6")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://i.pinimg.com/originals/bc/04/51/bc0451e0f4b31ce70eab732f42af15ef.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Womens Classical Dress</h4>
            <p className="card-text">Premium collection with stylish design.</p>
            <button className="btn" onClick={() => handleDiscover("/productpage7")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://fashiondream.co.in/cdn/shop/files/063A4692.jpg?v=1722767450&width=1500"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Kids Wear</h4>
            <p className="card-text">Elegant leather for all occasions.</p>
            <button className="btn" onClick={() => handleDiscover("/productpage8")}>
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Fourth COLLECTION */}
      <div className="cont1">
        <h1 className="cont2">BEST GADGETS</h1>
      </div>

      <div className="test">
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.bassheadspeakers.com/wp-content/uploads/2019/11/Lasuney-Bluetooth-Wireless-Earbuds-for-iPhone.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">EarBuds </h4>
            <p className="card-text">Quality sound and Premium Looks.</p>
            <button className="btn" onClick={() => handleDiscover("/productpage9")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://i.pinimg.com/736x/79/9f/6d/799f6dded9a4c35ced3d1ff12c613e9b.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Laptops</h4>
            <p className="card-text">high power long life power savage</p>
            <button className="btn" onClick={() => handleDiscover("/productpage10")}>
              Discover More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://m.media-amazon.com/images/I/716Jq5LJKsL._AC_SL1500_.jpg"
            alt="card"
          />
          <div className="card-body">
            <h4 className="card-title">Watches</h4>
            <p className="card-text">smart and premium</p>
            <button className="btn" onClick={() => handleDiscover("/productpage11")}>
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;