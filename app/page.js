
import Nav from '@/app/components/nav'
import Hero from "@/app/components/hero"
import Footer from "@/app/components/footer"
import Newsletter from "@/app/components/newsletter"
import Clubs from "@/app/components/Clubs"
import About from "@/app/components/about"



export default function Home() {
  return (
    <>
      <Nav/>
      <Clubs/>
      <Hero/>
      <About/>
      <Newsletter/>
      <Footer/>
    </>
  )
}
