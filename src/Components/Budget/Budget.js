import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'
import * as actions from '../../redux/budgetReducer'

class Budget extends Component {

  render() {
    const {loading} = this.props.budget
    console.log(this.props)

    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases />
            </div>
            <div className='chart-container'>
              <Chart1 />
              <Chart2 />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    budget: state.budget 
  }
}
const mapDispatchToState = (dispatch) => {
 return {
  setLoadingTrue: () => dispatch(actions.setLoadingTrue()),
  setLoadingFalse: () => dispatch(actions.setLoadingFalse()),

 }
}
export default connect(mapStatetoProps, mapDispatchToState)(Budget);

{/* <connect mapsStateToProps={(state) => mapStatetoProps(state)}>
  <Budget budget={state.budget} />
</connect> */}
