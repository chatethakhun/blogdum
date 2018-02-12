import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { MemberContainer } from "../../component/dashboard/members";
const MemberQuery = gql`
  query allMember {
    me {
      fname
      lname
      admin
    } 
  }
`;

class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      allMember: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("NextProps =====>", nextProps);
    this.setState({
      allMember: nextProps.data.members
    });
  }
  render() {
    console.log(this.props);
    return (
      <MemberContainer>
        <div className="table">
          <div>
            <h3>First Name</h3>
          </div>
          <div>
            <h3>Last Name</h3>
          </div>
          <div>
            <h3>Email</h3>
          </div>
        </div>
        {this.state.allMember &&
          this.state.allMember.map(member => (
            <div className="table">
              <div>
                <h3>{member.fname}</h3>
              </div>
              <div>
                <h3>{member.lname}</h3>
              </div>
              <div>
                <h3>{member.email}</h3>
              </div>
            </div>
          ))}
      </MemberContainer>
    );
  }
}

const MembersWithData = graphql(MemberQuery)(Members);

export default MembersWithData;
