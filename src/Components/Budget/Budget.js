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
// import * as actions from '../../redux/budgetReducer'
import { requestUserData } from './../../redux/userReducer'
import { requestBudgetData, addPurchase, removePurchase } from './../../redux/budgetReducer'

class Budget extends Component {
  componentDidMount() {
    this.props.requestUserData()
    this.props.requestBudgetData()

  }

  render() {
    const {loading, purchases, budgetLimit} = this.props.budget
    const {firstName, lastName} = this.props.user
    console.log(this.props)

    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={this.props.addPurchase}/>
              <DisplayPurchases purchases={purchases} removePurchase={this.props.removePurchase}/>
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit}/>
              <Chart2 purchases={purchases}/>
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    budget: state.budget,
    user: state.user
  }
}
// const mapDispatchToState = (dispatch) => {
//  return {
//   setLoadingTrue: () => dispatch(actions.setLoadingTrue()),
//   setLoadingFalse: () => dispatch(actions.setLoadingFalse()),

//  }
// }
export default connect(mapStatetoProps, { requestUserData, requestBudgetData, addPurchase, removePurchase})(Budget)//mapDispatchToState)(Budget);

// <connect mapsStateToProps={(state) => mapStatetoProps(state)}>
  //<Budget budget={state.budget} />
//</connect>
