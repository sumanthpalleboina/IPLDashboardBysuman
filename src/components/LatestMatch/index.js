import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    venue,
    date,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <div className="heading">
        <h1 className="latest-match-text">Latest Matches</h1>
      </div>
      <div className="latest-match">
        <div className="latest-match-card">
          <div className="from-name-to-pic">
            <div className="text-container">
              <p className="competing-team">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <div className="img-container">
              <img
                src={competingTeamLogo}
                alt={`latest match ${competingTeam}`}
                className="logo"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="from-innings-umpires">
            <h1 className="heading-style">First Innings</h1>
            <p className="para-style">{firstInnings}</p>
            <h1 className="heading-style">Second Innings</h1>
            <p className="para-style">{secondInnings}</p>
            <h1 className="heading-style">Man Of The Match</h1>
            <p className="para-style">{manOfTheMatch}</p>
            <h1 className="heading-style">Umpires</h1>
            <p className="para-style">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
