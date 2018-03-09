import { COLOR } from "../../constant/theme/constant";
import { CenterComponent } from "../common/center-component/centercomponent";
import { Link } from "react-router";
import React from "react";
import { SideBarContainer } from "../../theme/sidebar/sidebarTheme";

const headerLinks = [
  {
    label: "Profile",
    path: "profile"
  },
  {
    label: "Blogs",
    path: "blog"
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
                {this.props.me
                  ? this.props.me.imageUrl && (
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(" + this.props.me.imageUrl + ")"
                        }}
                      />
                    )
                  : ""}
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
                      backgroundColor: COLOR.BLUE,
                      color: COLOR.DARK_GRAY
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
