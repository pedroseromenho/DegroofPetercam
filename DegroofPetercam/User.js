

import React from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class User extends React.Component {
  render() {
    return (
      <FormLabel>fullname</FormLabel>
      <FormInput onChangeText={someFunction}/>
      value={this.state.fullname}
      <FormValidationMessage>{'This field is required'}</FormValidationMessage>

      <FormLabel>email</FormLabel>
      <FormInput onChangeText={someFunction}/>
      value={this.state.fullname}
      <FormValidationMessage>{'This field is required'}</FormValidationMessage>
          <button  onpress={() => this.coucou()} onSubmit={this.addUser}/>
          title ='coucou' />
        
        );
      }}
      export default User;

      class User extends React.Component {
        constructor() {
          super();
          this.state = {
           email: '',
           fullname: ''
          };
        }}

        updateInput = e => {
            this.setState({
              [e.target.name]: e.target.value
            });
          }
          
          render() {
            return (
                 <FormLabel>"fullname"</FormLabel>
                 <FormInput>onChange={this.updateInput}</FormInput>
            )}