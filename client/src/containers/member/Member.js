import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MemberList from "../../components/member/MemberList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {membersFetch, memberDelete } from "../../actions";
import '../../index.css';


class Member extends Component {

    constructor(props) {
        super(props);
        this.delMember=this.delMember.bind(this);
        this.editMember=this.editMember.bind(this);
    }

    componentDidMount() {
       this.props.membersFetch();
    }

    delMember(member) {
     this.props.memberDelete(member.id);
    }

    editMember(member) {
        this.props.history.push('members/edit/' + member.id);

    }
    render () {
        return (
            <div className="bg">
            <div>
            <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 text-light">
                            <h1>สมาชิก</h1>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success title float-right" onClick={() => this.props.history.push('members/add')}>เพิ่มพนักงาน</button>
                        </div>
                    </div>
                </div>
                {this.props.members && Array.isArray(this.props.members) &&
                <MemberList members={this.props.members}
                    onDelMember={this.delMember} onEditMember={this.editMember}
                />}
                 <Footer Company = "Kasetsart University" Email="Napatparkdee.com"/>
            </div>
            </div>
        )
    }
}

function mapStateToProps({members}){
    return { members };
}

export default withRouter( connect(mapStateToProps, {membersFetch, memberDelete}) (Member));