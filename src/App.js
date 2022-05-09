import Bottombar from './components/Bottombar';
import Card from './components/Card';
import Header from './components/Header';
import "./index.css"
import { circleButtonStyle } from './themes/circleButton';
import { useReducer } from "react"

export default function App() {
  const initialState = {
    rate: 0,
    isRated: false
  }
  function reducer(state, action) {
    switch(action.type) {
      case 'changeRate': 
        return {
          ...state,
          rate: action.rate,
        }
      case 'submitRate':
        return {
          ...state,
          isRated: !state.isRated
        }
      case 'cancelRate':
        return {
          rate: 0,
          isRated: !state.isRated
        }
      default: 
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
          <Card>
            <Header 
              isRated={state.isRated}
              currentRate={state.rate}
              starButtonStyle={circleButtonStyle}
              toggleRate={dispatch}
              />
            <Bottombar 
              isRated={state.isRated}
              currentRate={state.rate}
              rateButtonStyle={circleButtonStyle}
              toggleRate={dispatch} 
              />
          </Card>

  );
}
