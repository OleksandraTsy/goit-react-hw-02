
const Feedback = ({ feedback, totalFeedback, percentage }) => {
    const { good, neutral, bad } = feedback;
   
    return (
        <ul>
            <li>
                Good:{ good }
            </li> 
            <li>
                Neutral:{ neutral }
            </li>
            <li>
                Bad:{ bad }
            </li>
            <li>
                Total:{ totalFeedback }
            </li>
            <li>
                Positive:{percentage}%
            </li>
        </ul>
    )
}

export default Feedback;