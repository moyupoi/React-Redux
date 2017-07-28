import { connect } from 'react-redux'

import { fetchEntrance } from '../modules/home'
import Home from '../components/Home'

const mapActionCreators = {
  fetchEntrance
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(Home)
