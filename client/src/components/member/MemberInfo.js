import React, { Component } from "react";

class MemberInfo extends Component {       
    constructor(props) {
        super(props) 
    }   

    render() {
        const {username, password, name, lastName, gender, age, email,tel,address , thumbnail} = this.props.member; 
        return (
 
            <div class="col mb-3">
                <div class="card">
                    <img className="img-fluid img-thumbnail" src={thumbnail}></img>
                    <div class="card-body">
                        <h5 className="mt-2">ชื่อผู้ใช้: {username}</h5>
                        <h6 className="mt-1">รหัสผ่าน: {password} </h6>
                        <h6 className="mt-1">ชื่อ: {name} </h6>
                        <h6 className="mt-1">นามสกุล: {lastName} </h6>
                        <h6 className="mt-1">เพศ: {gender} </h6>
                        <h6 className="mt-1">อายุ: {age} </h6>
                        <h6 className="mt-1">E-mail: {email} </h6>
                        <h6 className="mt-1">Telephone: {tel} </h6>
                        <h6 className="mt-1">Address: {address} </h6>
                 
                {(this.props.onDelMember || this.props.onEditMember) &&
                    <button className="btn btn-info title" onClick={() => this.props.onEditMember(this.props.member)}>
                        Edit
                    </button>
                }
                {(this.props.onDelMember || this.props.onEditMember) &&
                    <button className="btn btn-danger col-5 float-right title" onClick={() => this.props.onDelMember(this.props.member)}>
                        Delete
                    </button>
                }

                <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberInfo;
