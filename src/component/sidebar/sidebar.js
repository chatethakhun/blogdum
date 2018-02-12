import React from "react";
import Sidebar from "react-sidebar";
import { setMe } from "../../action/member";
import { connect } from "react-redux";
import { Link } from "react-router";
import { NavLink } from "../common/navlink/navlink";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { CenterComponent } from "../common/center-component/centercomponent";
import decodeJWt from 'jwt-decode'
import SideBarContent from './sidebarcontent'

const mql = window.matchMedia(`(min-width: 800px)`);

const meQuery = gql`
  query allMember {
    me {
      fname
      lname
      email
      imageUrl
    }
  }
`;

class Sidebars extends React.Component {
  constructor() {
    super();
    this.state = {
      mql: mql,
      clickMenu: false,
      me: ""
    };
    this.sideBarOpen = this.sideBarOpen.bind(this);
  }
  componentWillMount() {
    const token = localStorage.getItem("token")
    console.log(decodeJWt)
    if (!localStorage.getItem("token")) {
      this.props.router.push("/");
    }
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }
  componentWillReceiveProps(nextProps) {
    console.log("props ===>", nextProps);
    //nextProps.setMe(nextProps.data.me);
    this.setState({
      me: nextProps.data.me
    });
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: this.state.mql.matches });
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.props.router.push("/");
  };

  sideBarOpen = () => {
    this.setState({
      clickMenu: !this.state.clickMenu
    });
  };
  onSetSidebarOpen = () => {
    this.setState({
      clickMenu: false
    });
  };

  goToEditProfile = () => {
    this.props.router.push("profile");
  };
  render() {

    console.log("me ===>", this.props.me);
    return (
      <Sidebar
        sidebar={<SideBarContent />}
        open={this.state.clickMenu}
        docked={this.state.sidebarDocked}
        sidebarClassName="menu"
        overlayClassName="active"
        onSetOpen={this.onSetSidebarOpen}
      >
        {this.props.route.headDetail && (
          <NavLink
            hamburger={this.sideBarOpen}
            headDetail={this.props.route.headDetail}
          />
        )}
        {!this.props.loading ?  this.props.children : <CenterComponent loading/>}
      </Sidebar>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    setMe: me => {
      dispatch(setMe(me));
    }
  };
};

const Me = graphql(meQuery)(Sidebars);
export default connect(null, mapDispatch)(Me);
