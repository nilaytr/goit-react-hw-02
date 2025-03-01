const Feedback = ({ good, neutral, bad, total, positive }) => {

    if (total === 0) {
        return (<p>No feedback yet</p>)
    }
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    );
};

export default Feedback;