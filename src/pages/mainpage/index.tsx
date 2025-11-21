import Contactus from "../../components/contactus/Contact"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import HeroSection from "../../components/home/Home"
import Ourwork from "../../components/ourwork/Ourwork"
import ServicesSection from "../../components/services/Services"
import TestimonialSection from "../../components/testimonials/Testimonials"
import WhyChooseUs from "../../components/whychoose/WhyChooseUs"


const Mainpage = () => {
  return (
    <>
     <div className="mt-14">
      <Header/>
     <HeroSection/>
     
     <Ourwork/>
     <ServicesSection/>
     <WhyChooseUs/>
     <TestimonialSection/>
     <Contactus/>
     <Footer/>
     </div>
    </>
  )
}

export default Mainpage