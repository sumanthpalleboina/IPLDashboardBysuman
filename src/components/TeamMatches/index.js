import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getHttpResponse()
  }

  getHttpResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const recentMatchesData = updatedData.recentMatches.map(each => ({
      competingTeam: each.competing_team,
      date: each.date,
      venue: each.venue,
      result: each.result,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      manOfTheMatch: each.man_of_the_match,
      umpires: each.umpires,
      matchStatus: each.match_status,
    }))

    const latestMatchDetail = {
      competingTeam: updatedData.latestMatchDetails.competing_team,
      date: updatedData.latestMatchDetails.date,
      venue: updatedData.latestMatchDetails.venue,
      result: updatedData.latestMatchDetails.result,
      competingTeamLogo: updatedData.latestMatchDetails.competing_team_logo,
      firstInnings: updatedData.latestMatchDetails.first_innings,
      secondInnings: updatedData.latestMatchDetails.second_innings,
      manOfTheMatch: updatedData.latestMatchDetails.man_of_the_match,
      umpires: updatedData.latestMatchDetails.umpires,
      matchStatus: updatedData.latestMatchDetails.match_status,
    }

    this.setState({
      teamBanner: updatedData.teamBannerUrl,
      latestMatch: latestMatchDetail,
      recentMatchesList: recentMatchesData,
      isLoading: false,
    })
  }

  teamBanner = () => {
    const {teamBanner} = this.state
    return (
      <div className="team-banner-container">
        <img src={teamBanner} alt="team banner" className="team-banner" />
      </div>
    )
  }

  getBgColor = () => {
    const {latestMatch} = this.state
    switch (latestMatch.competingTeam) {
      case 'Royal Challengers Bangalore':
        return 'gold-color'
      case 'Chennai Super Kings':
        return 'yellow-color'
      case 'Rajasthan Royals':
        return 'blue-color'
      case 'Kings XI Punjab':
        return 'red-color'
      case 'Sunrisers Hyderabad':
        return 'orange-color'
      default:
        return 'blue-color'
    }
  }

  render() {
    const {latestMatch, recentMatchesList, isLoading} = this.state
    const bgColorName = this.getBgColor()
    console.log(bgColorName)
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`Team-matches-container ${bgColorName}`}>
        {this.teamBanner()}
        <LatestMatch latestMatch={latestMatch} />
        <ul className="recent-Match-cards-container">
          {recentMatchesList.map(each => (
            <MatchCard recentMatch={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
