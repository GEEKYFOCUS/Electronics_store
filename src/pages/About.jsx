import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaBagShopping } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { SlLike } from "react-icons/sl";

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";




function About() {
  return <div>
  <div>
    <div>
        <h1>Our Story</h1>
        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>

    <img src="" alt="" />

      <div>

        <div>
            <div><SiHomeassistantcommunitystore /></div>  
        </div>

        <div>
            <div><AiOutlineDollar /></div>  
        </div>

        <div>
            <div><FaBagShopping /></div>  
        </div>

        <div>
            <div><SlLike /></div>  
        </div>
  
    </div>

    {/* Carousel */}
    <div>
      <div>
        <img src="" alt="" />
        {/* <h1></h1> */}
      </div>
      <div>
        <img src="" alt="" />
        {/* <h1></h1> */}
      </div>
      <div>
        <img src="" alt="" />
        {/* <h1></h1> */}
      </div>


    </div>

    {/* delivery */}

    <div>
    <TbTruckDelivery />
    <h2>FREE AND FAST DELIVERY</h2>
    <p>Free delivery for all orders over $140</p>
    </div>
    <div>
    <RiCustomerService2Fill />
    <h2>24/7 CUSTOMER SERVICE</h2>
    <p>Friendly 24/7 customer support</p>
    </div>
    <div>
    <AiTwotoneSafetyCertificate />
    <h2>MONEY BACK GUARANTEE</h2>
    <p>We reurn money within 30 days</p>
    </div>

  </div>
</div>
}

export default About;
