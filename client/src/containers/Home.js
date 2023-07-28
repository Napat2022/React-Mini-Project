import React from 'react';
import { Component } from 'react';
import Footer from '../components/Footer';
import MemberList from '../components/member/MemberList';
import { connect } from "react-redux";
import { membersFetch } from "../actions";
import '../index.css';
import Navbar from '../components/Navbar';

class Home extends Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.membersFetch();
  
  }

  render () {
    return (
      <div className="bg">
      <dir>
        <Navbar />
        <div className="title">
          <h1>รายชื่อสมาชิก</h1>
        </div>
        {this.props.members && Array.isArray(this.props.members) &&
        (<MemberList members ={this.props.members}></MemberList>)}
        <Footer />
      </dir>
      </div>
    )
  }

}
function mapStateToProps(state){
  return { members: state.members };
}


export default connect(mapStateToProps, { membersFetch}) (Home);
