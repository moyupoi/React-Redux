import { connect } from 'react-redux'

import App from '../components/App'

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  common: ''
})

export default connect(mapStateToProps, mapActionCreators)(App)
