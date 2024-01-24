function Progress({index, numQuestions, maxPossiblePoints, points,answer}) {
    
    return (
       <header className = "progress">
        <progress max = {numQuestions} value = {index + Number(answer !== null)}/>
        <p>Question <strong> {index}</strong> / <strong>
        {numQuestions}</strong></p>

        <p>
            <strong>{points}</strong> / {maxPossiblePoints}
        </p>
       </header>
    )
}

export default Progress
