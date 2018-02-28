import { CenterComponent } from "../../component/common/center-component/centercomponent"
import { NavLink } from "../../component/common/navlink/navlink";
import React from "react";
import SideBarContent from '../../component/sidebar/sidebarcontent'
import Sidebar from "react-sidebar";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { setMe } from "../../action/member";

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
    if (!localStorage.getItem('token')) {
      this.props.router.push("/");
    }
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }
  componentWillReceiveProps(nextProps) {
    nextProps.setMe(nextProps.data);
    this.setState({
      me: nextProps.data.me
    });
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: this.state.mql.matches });
  };

  logOut = () => {
    localStorage.removeItem("token");
    window.location.reload()
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

  render() {
    return (
      
      <Sidebar
        sidebar={ !this.props.data.loading && <SideBarContent 
                      loading={this.props.data.loading} 
                      me={this.state.me}
                      logOut={this.logOut} 
                      />
                    }
        docked={this.state.sidebarDocked}
        open={this.state.clickMenu}
        onSetOpen={this.onSetSidebarOpen}
      >
          <NavLink
            hamburger={this.sideBarOpen}
            logOut={this.logOut}
          />
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
