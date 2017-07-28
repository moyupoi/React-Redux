import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Vitae = require('./containers/VitaeContainer').default
      const reducer = require('./modules/vitae').default
      injectReducer(store, { key: 'vitae', reducer })
      cb(null, Vitae)
    }, 'vitae')
  }
})
