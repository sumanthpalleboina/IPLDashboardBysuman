import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: false}

  componentDidMount() {
    this.getTeams()
  }

  getIPLDashboardTeams = () => {
    const {teamsData} = this.state
    return teamsData.map(each => <TeamCard key={each.id} card={each} />)
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()
    const UpdatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: UpdatedData, isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="dashboard-background">
        <div className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-ipl"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamCard-container">
            {this.getIPLDashboardTeams()}
          </div>
        )}
      </div>
    )
  }
}
export default Home
