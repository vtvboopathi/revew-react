import { Review } from "./comp";
import reviews from "./const";
import './style.css'


function App() {
  return (
   <main>
    <section className="container">
      <div className="title">
        <h2>Review we got!</h2>
        <div className="underline"></div>
      </div>
      <Review reviews={reviews}/>
    </section>
   </main>
  );
}

export default App;
