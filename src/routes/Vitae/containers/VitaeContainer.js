import { connect } from 'react-redux'

import { fetchEntrance } from '../modules/vitae'
import Vitae from '../components/Vitae'

const mapActionCreators = {
  fetchEntrance
}

const mapStateToProps = (state) => ({
  vitae: state.vitae
})

export default connect(mapStateToProps, mapActionCreators)(Vitae)
