import React from "react"
import AnswerCard from "./AnswerCard"
import "../AnswerBox.css"

class AnswerBox extends React.Component {
    constructor(props) {
        super(props)
        this.state.items = this.props.items
    }

    state = {
        items: []
    }

    render() {
        return (
            <div className="answer-box">
                {this.state.items.map((item, idx) => {
                    return <AnswerCard content={item.content} id={idx}/>
                })}
            </div>
        )
    }
}

export default AnswerBox;