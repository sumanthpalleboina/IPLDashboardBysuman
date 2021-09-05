import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatch
  console.log(recentMatch)
  console.log(competingTeamLogo)
  const colorName = matchStatus === 'Won' ? 'color-won' : 'color-lost'
  return (
    <li className="card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result-display">{result}</p>
      <p className={`match-status ${colorName}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
