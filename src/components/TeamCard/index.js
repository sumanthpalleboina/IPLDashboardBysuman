import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {card} = props
  const {id, name, teamImageUrl} = card
  return (
    <Link className="team-card-link" to={`/team-matches/${id}`}>
      <div className="team-card">
        <div className="imag-container">
          <img src={teamImageUrl} alt={name} className="team-card-pic" />
        </div>
        <p className="team-card-name">{name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
