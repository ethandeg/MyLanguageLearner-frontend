import { render, screen } from '@testing-library/react';
import Deck from './Deck';
import {Provider} from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer"
import { BrowserRouter } from "react-router-dom"
const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );
const component = render(<Provider store={store}><BrowserRouter><Deck deck={{name:"test"}}/></BrowserRouter>  </Provider>);

//smoke test
test('renders without crashing', () => {
    component
  
  });

//snapshot test

test('should match the snapshot', () => {
    const {asFragment} = component
    expect(asFragment()).toMatchSnapshot()
})