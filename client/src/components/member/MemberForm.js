import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { memberFormField } from "./formFields";
import { connect } from "react-redux";
import '../../index.css';

class MemberForm extends Component {
    
    renderFields (formFields) {
       
        return formFields.map( ({label, name, type, required}) => {
            return(
                <Field
                key={name}
                component= {FormField}
                label={label}
                name={name}
                type={type}
                required={required} 
                />
            );
        } );
        
    }
    
    render() {
        
        const { onMemberSubmit } = this.props;

        return (
            
            <div>
                <form onSubmit={this.props.handleSubmit(onMemberSubmit)}>
                  {this.renderFields(memberFormField)}
                  <button className="btn btn-black btn-info title" type="submit">
                    Submit
                  </button>
                </form>
                <hr />
                </div>
            
        );
        
    }

}

function validate(values){
    console.log(values);

const errors = {};
memberFormField.forEach(({name, required}) => {
    if(!values[name] && required) {
        errors[name] = 'Please enter your information';
    }
});
    return errors;
}

function mapStateToProps({members}) {
 if(members && members.id) {
     return {initialValues: members};
    } else {
     return{};
    }
 }

 MemberForm = reduxForm({ validate, form : "memberForm"})(MemberForm);

export default connect(mapStateToProps)(MemberForm);