import React from "react";
import Header from "../components/Header.js";
import QuizCard from "../components/QuizCard.js";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    localStorage.clear()
  }

  state = {
    categories: ["k-pop"],
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <section className="container">
          {this.state.categories.map((category, idx) => {
            return <QuizCard key={idx} category={category} />;
          })}
        </section>
      </div>
    );
  }
}

export default MainPage;
