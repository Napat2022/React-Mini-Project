import React, { Component } from "react";
import MemberInfo from "./MemberInfo";

class MemberList extends Component {

    showMembers() {
            return this.props.members && this.props.members.map(member => (
                <MemberInfo key={member.id} member={member} onDelMember={this.props.onDelMember} onEditMember={this.props.onEditMember}/>
            ))
        }

    render() {
        return (
            
            <div className="row col-auto">
                {(this.showMembers())}
            </div>
            
        );
    }
}
export default MemberList;