import React from "react";
import { SideBarContainer } from "../../theme/sidebar/sidebarTheme";
import { Link } from "react-router";
import { CenterComponent } from "../common/center-component/centercomponent";

const headerLinks = [
  {
    label: "Profile",
    path: "profile"
  },
  {
    label: "Income",
    path: "/income"
  }
];

class SideBarContent extends React.Component {
  render() {
    return (
      <SideBarContainer>
        {!this.props.loading ? (
          <div>
            <div>
              <h2>Menu</h2>
              <hr />
            </div>
            <div className="profile">
              <div>
                {!this.props.me.imageUrl ? (
                  <img
                    src="https://api.adorable.io/avatars/285/abott@adorable.png"
                    alt=""
                    //onClick={this.goToEditProfile.bind(this)}
                  />
                ) : (
                  <img
                    src={this.props.me.imageUrl}
                    alt=""
                    //onClick={this.goToEditProfile.bind(this)}
                  />
                )}
              </div>
              <div>
                <p>
                  {!this.props.loading &&
                    this.props.me &&
                    `Hi, ${this.props.me.fname}`}
                </p>
              </div>
            </div>
            <div className="list">
              <ul>
                {headerLinks.map(({ label, path, submenu }, index) => (
                  <Link
                    key={index}
                    to={path}
                    activeStyle={{
                      backgroundColor: "orange"
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <CenterComponent loading />
        )}
      </SideBarContainer>
    );
  }
}

export default SideBarContent;
