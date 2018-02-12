import React from "react";
import Sidebar from "react-sidebar";
import { setMe } from "../../action/member";
import { connect } from "react-redux";
import { NavLink } from "../../component/common/navlink/navlink";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { CenterComponent } from "../../component/common/center-component/centercomponent"
import SideBarContent from '../../component/sidebar/sidebarcontent'

const mql = window.matchMedia(`(min-width: 800px)`);

class Sidebars extends React.Component {
  constructor() {
    super();
    this.state = {
      mql: mql,
      clickMenu: false,
      me: "",
      sidebarDocked: false
    }
    this.sideBarOpen = this.sideBarOpen.bind(this);
  }
  componentWillMount() {
    if (!localStorage.getItem("token")) {
      this.props.router.push("/");
    }
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }
  componentWillReceiveProps(nextProps) {
    nextProps.setMe(nextProps.data.me);
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

  // goToEditProfile = () => {
  //   this.props.router.push("profile");
  // };
  render() {
    return (
      <Sidebar
        sidebar={<SideBarContent 
                      loading={this.props.data.loading} 
                      me={this.state.me}
                      logOut={this.logOut} 
                      />
                    }
        docked={this.state.sidebarDocked}
        open={this.state.clickMenu}
        // sidebarClassName="menu"
        //overlayClassName="active"
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
const ME_QUERY = gql`
  query me {
    me {
      fname
      lname
      email
      imageUrl
    }
  }
`;


const SideBarWithData = connect(null, mapDispatch)(graphql(ME_QUERY)(Sidebars))
export default SideBarWithData
