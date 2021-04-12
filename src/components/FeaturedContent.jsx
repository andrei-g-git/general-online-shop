import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Switch, Route } from 'react-router-dom';
import ProductPage from '../routes/ProductPage';
import '../css/FeaturedContent.scss';
import Footer from './Footer';
//test
import RouterDebugger from './RouterDebugger';

let $ = require('jquery');

function FeaturedContent(props) {

    let [, setState] = useState();
    return (
        <div>
            <ul id="product-grid">
                { 
                    typeof props.products !== "undefined"
                        ?
                            props.products.map(product => 
                                <ProductCard
                                    key={product.id}
                                    currencyPrefix = {props.currencyPrefix}
                                    product={product}
                                    notify={() => {cardWasClicked(product.id); setState({})}}
                                >
                                </ProductCard>   
                            )
                        :
                            <div></div>
                    
                } 
            </ul>

            <Footer></Footer>
            
        </div>
    )
}

const cardWasClicked = (id) => {
    $.ajax({
        url: "/api/products/" + id.toString(),
        type: "GET",
        success: (response) => {

        }
    });

}

const test = (routeProps, props) => {
    const intParamId = parseInt(routeProps.match.params.id);
    const products = props.products;
    const productsArrayWithOneElement = products   
        .filter(product => product.id === intParamId);
    const product = productsArrayWithOneElement[0];

    return typeof product !== "undefined"
        ? (
            <ProductPage
                currencyPrefix = {props.currencyPrefix}
                product={product}
            />
        )
        :
        <div></div>
}

export default FeaturedContent;






// const[
//     (
//         1,
//         "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         109.95,
//         10,
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "men clothing",
//         "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         4
//     ),
//     (
//         2,
//         "Mens Casual Premium Slim Fit T-Shirts ",
//         22.3,
//         5,
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "men clothing",
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         5
//     ),
//     (
//         3,
//         "Mens Cotton Jacket",
//         55.99,
//         0,
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "men clothing",
//         "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         3
//     ),
//     (
//         4,
//         "Mens Casual Slim Fit",
//         15.99,
//         3,
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         "men clothing",
//         "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         2
//     ),
//     (
//         5,
//         "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//         695,
//         150,
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//         "jewelery",
//         "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//         4
//     ),
//     (
//         6,
//         "Solid Gold Petite Micropave ",
//         168,
//         70,
//         "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//         "jewelery",
//         "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//         5
//     ),
//     (
//         7,
//         "White Gold Plated Princess",
//         9.99,
//         0,
//         "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//         "jewelery",
//         "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//         3
//     ),
//     (
//         8,
//         "Pierced Owl Rose Gold Plated Stainless Steel Double",
//         10.99,
//         0,
//         "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//         "jewelery",
//         "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//         2
//     ),
//     (
//         9,
//         "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//         64,
//         7,
//         "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//         "electronics",
//         "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//         5
//     ),
//     (
//         10,
//         "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//         109,
//         20,
//         "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//         "electronics",
//         "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//         5
//     ),
//     (
//         11,
//         "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//         109,
//         2,
//         "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//         "electronics",
//         "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//         4
//     ),
//     (
//         12,
//         "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//         114,
//         0,
//         "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//         "electronics",
//         "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//         4
//     ),
//     (
//         13,
//         "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//         599,
//         55,
//         "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//         "electronics",
//         "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//         5
//     ),
//     (
//         14,
//         "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//         999.99,
//         120,
//         "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//         "electronics",
//         "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//         3
//     ),
//     (
//         15,
//         "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//         56.99,
//         0,
//         "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//         "women clothing",
//         "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//         4
//     ),
//     (
//         16,
//         "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//         29.95,
//         0,
//         "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//         "women clothing",
//         "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//         5
//     ),
//     (
//         17,
//         "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//         39.99,
//         0,
//         "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//         "women clothing",
//         "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//         4
//     ),
//     (
//         18,
//         "MBJ Women's Solid Short Sleeve Boat Neck V ",
//         9.85,
//         2.45,
//         "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//         "women clothing",
//         "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//         4
//     ),
//     (
//         19,
//         "Opna Women's Short Sleeve Moisture",
//         7.95,
//         2,
//         "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//         "women clothing",
//         "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//         3
//     ),
//     (
//         20,
//         "DANVOUY Womens T Shirt Casual Cotton Short",
//         12.99,
//         0,
//         "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//         "women clothing",
//         "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//         4
//     }
// ]







// const[
//     (
//         109.95,
//         10
//     ),
//     (
//         22.3,
//         5
//     ),
//     (
//         55.99,
//         0
//     ),
//     (
//         15.99,
//         3
//     ),
//     (
//         695,
//         150
//     ),
//     (
//         168,
//         70
//     ),
//     (
//         9.99,
//         0
//     ),
//     (
//         10.99,
//         0
//     ),
//     (
//         64,
//         7
//     ),
//     (
//         109,
//         20
//     ),
//     (
//         109,
//         2
//     ),
//     (
//         114,
//         0
//     ),
//     (
//         599,
//         55
//     ),
//     (
//         999.99,
//         120
//     ),
//     (
//         56.99,
//         0
//     ),
//     (
//         29.95,
//         0
//     ),
//     (
//         39.99,
//         0
//     ),
//     (
//         9.85,
//         2.45
//     ),
//     (
//         7.95,
//         2
//     ),
//     (
//         12.99,
//         0
//     )
// ]





// CREATE TABLE users(
//     city      VARCHAR(11) NOT NULL PRIMARY KEY
//    ,street    VARCHAR(16) NOT NULL
//    ,number    INTEGER  NOT NULL
//    ,zipcode   VARCHAR(10) NOT NULL
//    ,id        INTEGER  NOT NULL
//    ,email     VARCHAR(18) NOT NULL
//    ,username  VARCHAR(9) NOT NULL
//    ,password  VARCHAR(12) NOT NULL
//    ,firstname VARCHAR(7) NOT NULL
//    ,lastname  VARCHAR(8) NOT NULL
//    ,phone     VARCHAR(14) NOT NULL
//    ,loggedIn  VARCHAR(5) NOT NULL
//  );
//  INSERT INTO users(city,street,number,zipcode,id,email,username,password,firstname,lastname,phone,loggedIn)
// VALUES
// ('kilcoole','new road',7682,'12926-3874',1,'john@gmail.com','johnd','m38rmF$','john','doe','1-570-236-7033','false'),
// ('kilcoole 2','Lovers Ln',7267,'12926-3874',2,'morrison@gmail.com','mor_2314','83r5^_','david','morrison','1-570-236-7033','false'),
// ('Cullman','Frances Ct',86,'29567-1452',3,'kevin@gmail.com','kevinryan','kev02937@','kevin','ryan','1-567-094-1345','false'),
// ('San Antonio','Hunters Creek Dr',6454,'98234-1734',4,'don@gmail.com','donero','ewedon','don','romer','1-765-789-6734','false'),
// ('san Antonio','adams St',245,'80796-1234',5,'derek@gmail.com','derek','jklg*_56','derek','powell','1-956-001-1945','false'),
// ('el paso','prospect st',124,'12346-0456',6,'david_r@gmail.com','david_r','3478*#54','david','russell','1-678-345-9856','false'),
// ('fresno','saddle st',1342,'96378-0245',7,'miriam@gmail.com','snyder','f238&@*$','miriam','snyder','1-123-943-0563','false'),
// ('mesa','vally view ln',1342,'96378-0245',8,'william@gmail.com','hopkins','William56$hj','william','hopkins','1-478-001-0890','false'),
// ('miami','avondale ave',345,'96378-0245',9,'kate@gmail.com','kate_h','kfejk@*_','kate','hale','1-678-456-1934','false'),
// ('fort wayne','oak lawn ave',526,'10256-4532',10,'jimmie@gmail.com','jimmie_k','klein*#%*','jimmie','klein','1-104-001-4567','false')





// const[
//     {
        
//             "city": "kilcoole",
//             "street": "new road",
//             "number": 7682,
//             "zipcode": "12926-3874",
//         "id": 1,
//         "email": "john@gmail.com",
//         "username": "johnd",
//         "password": "m38rmF$",
//             "firstname": "john",
//             "lastname": "doe",
//         "phone": "1-570-236-7033",
//         "loggedIn": false
//     },
//     {
        
//             "city": "kilcoole",
//             "street": "Lovers Ln",
//             "number": 7267,
//             "zipcode": "12926-3874",
//         "id": 2,
//         "email": "morrison@gmail.com",
//         "username": "mor_2314",
//         "password": "83r5^_",
//             "firstname": "david",
//             "lastname": "morrison",
//         "phone": "1-570-236-7033",
//         "loggedIn": false
//     },
//     {
        
//             "city": "Cullman",
//             "street": "Frances Ct",
//             "number": 86,
//             "zipcode": "29567-1452",
//         "id": 3,
//         "email": "kevin@gmail.com",
//         "username": "kevinryan",
//         "password": "kev02937@",
//             "firstname": "kevin",
//             "lastname": "ryan",
//         "phone": "1-567-094-1345",
//         "loggedIn": false
//     },
//     {
        
//             "city": "San Antonio",
//             "street": "Hunters Creek Dr",
//             "number": 6454,
//             "zipcode": "98234-1734",
//         "id": 4,
//         "email": "don@gmail.com",
//         "username": "donero",
//         "password": "ewedon",
//             "firstname": "don",
//             "lastname": "romer",
//         "phone": "1-765-789-6734",
//         "loggedIn": false
//     },
//     {
        
//             "city": "san Antonio",
//             "street": "adams St",
//             "number": 245,
//             "zipcode": "80796-1234",
//         "id": 5,
//         "email": "derek@gmail.com",
//         "username": "derek",
//         "password": "jklg*_56",
//             "firstname": "derek",
//             "lastname": "powell",
//         "phone": "1-956-001-1945",
//         "loggedIn": false
//     },
//     {
        
//             "city": "el paso",
//             "street": "prospect st",
//             "number": 124,
//             "zipcode": "12346-0456",
//         "id": 6,
//         "email": "david_r@gmail.com",
//         "username": "david_r",
//         "password": "3478*#54",
//             "firstname": "david",
//             "lastname": "russell",
//         "phone": "1-678-345-9856",
//         "loggedIn": false
//     },
//     {
        
//             "city": "fresno",
//             "street": "saddle st",
//             "number": 1342,
//             "zipcode": "96378-0245",
//         "id": 7,
//         "email": "miriam@gmail.com",
//         "username": "snyder",
//         "password": "f238&@*$",
//             "firstname": "miriam",
//             "lastname": "snyder",
//         "phone": "1-123-943-0563",
//         "loggedIn": false
//     },
//     {
        
//             "city": "mesa",
//             "street": "vally view ln",
//             "number": 1342,
//             "zipcode": "96378-0245",
//         "id": 8,
//         "email": "william@gmail.com",
//         "username": "hopkins",
//         "password": "William56$hj",
//             "firstname": "william",
//             "lastname": "hopkins",
//         "phone": "1-478-001-0890",
//         "loggedIn": false
//     },
//     {
        
//             "city": "miami",
//             "street": "avondale ave",
//             "number": 345,
//             "zipcode": "96378-0245",
//         "id": 9,
//         "email": "kate@gmail.com",
//         "username": "kate_h",
//         "password": "kfejk@*_",
//             "firstname": "kate",
//             "lastname": "hale",
//         "phone": "1-678-456-1934",
//         "loggedIn": false
//     },
//     {
        
//             "city": "fort wayne",
//             "street": "oak lawn ave",
//             "number": 526,
//             "zipcode": "10256-4532",
//         "id": 10,
//         "email": "jimmie@gmail.com",
//         "username": "jimmie_k",
//         "password": "klein*#%*",
//             "firstname": "jimmie",
//             "lastname": "klein",
//         "phone": "1-104-001-4567",
//         "loggedIn": false
//     }
// ]
 
