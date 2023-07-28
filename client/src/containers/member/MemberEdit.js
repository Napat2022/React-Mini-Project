import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MemberForm from "../../components/member/MemberForm";
import { connect } from "react-redux";
import { memberCreate, memberUpdate, memberFetch } from "../../actions"
import '../../index.css';

class MemberEdit extends Component {
    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.memberFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, match, members, memberCreate, memberUpdate } = this.props;
        
        return (
            <div className="bg">
            <div>
                <Navbar />
                <div className="container col-md-5 text-light">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h3> Add Member Information </h3>
                            {
                                members.saved && (
                                    <div className="alert alert-secondary title" role="alert"> 
                                    {members.msg}
                                    </div>
                                )
                            }
                            
                            <MemberForm onMemberSubmit={() => memberCreate(formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h3> Edit Member Information </h3>
                            
                            {
                                members.saved && (
                                    <div className="alert alert-secondary title" role="alert"> 
                                    {members.msg}
                                    </div>
                                )
                            }

                            <MemberForm onMemberSubmit={() => memberUpdate( members.id, formValues)} />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
            </div>
        );
    }
}

function mapStateToProps( {form, members} )  {
    return { formValues: form.memberForm ? form.memberForm.values : null, members}
}

export default connect(mapStateToProps, { memberCreate, memberUpdate, memberFetch })(MemberEdit);