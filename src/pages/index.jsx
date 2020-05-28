import React from "react";
import Header from "../components/Header.js";
import Category from "../components/Category.js";

class MainPage extends React.Component {
  // Todo: get Categories from Backend
  state = {
    categories: ["k-pop", "soundtrack", "hiphop", "00s"],
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <section className="container">
          <h1>FROM JSX</h1>
          {this.state.categories.map((category, idx) => {
            return <Category key={idx} category={category} />;
          })}
        </section>
      </div>
    );
  }
}

export default MainPage;
