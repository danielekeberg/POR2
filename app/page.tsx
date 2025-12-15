import Header from "./components/Header"
import Hero from "./components/Hero"
import SelectedWork from "./components/Selected"
import Footer from "./components/Footer";
export default function Home() {
  return(
    <div id="top">
      <Header />
      <Hero />
      <SelectedWork />
      <Footer />
    </div>
  )
}