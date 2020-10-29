import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/SummerSale2019/Nonprime/Main-Banner_1500_400_0205._CB465490718_.jpg"
                alt=""
            />
            <div className="home_row">
                <Product
                    key={4123123}
                    id="4123123"
                    title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)/Integrated Intel UHD Graphics), Transparent Silver"
                    price="56,990"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61z7MFZZAvL._AC_UL320_.jpg"
                />
                <Product
                    key={234}
                    id="4123123"
                    title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)/Integrated Intel UHD Graphics), Transparent Silver"
                    price="56,990"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61z7MFZZAvL._AC_UL320_.jpg"
                />
                <Product
                    key={5356}
                    id="4123123"
                    title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)/Integrated Intel UHD Graphics), Transparent Silver"
                    price="56,990"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61z7MFZZAvL._AC_UL320_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    key={2342}
                    id="4123123"
                    title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)/Integrated Intel UHD Graphics), Transparent Silver"
                    price="56,990"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61z7MFZZAvL._AC_UL320_.jpg"
                />
                <Product
                    id="4123123"
                    title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)/Integrated Intel UHD Graphics), Transparent Silver"
                    price="56,990"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61z7MFZZAvL._AC_UL320_.jpg"
                />
                <Product
                    id="4123123"
                    title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)/Integrated Intel UHD Graphics), Transparent Silver"
                    price="56,990"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61z7MFZZAvL._AC_UL320_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
