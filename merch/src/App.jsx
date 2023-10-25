import {
  CustomerReviews,
  PoprlarProducts,
  Footer,
  Hero,
  Services,
  SpecialOffer,
  Subcribe,
  SuperQuality,
  Nav
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PoprlarProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
