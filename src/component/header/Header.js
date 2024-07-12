import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false, // State to manage whether drawer is open or closed
    headerShow: false, // State to manage whether header should be shown with background
  };

  componentDidMount() {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  componentWillUnmount() {
    // Remove scroll event listener when component unmounts
    window.removeEventListener("scroll", this.handleScrollEvent);
  }

  // Function to handle scroll event
  handleScrollEvent = () => {
    // Check if user has scrolled beyond the top of the page
    if (window.scrollY > 0) {
      this.setState({ headerShow: true }); // If scrolled, show header with background
    } else {
      this.setState({ headerShow: false }); // If at the top, show header without background
    }
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent", // Conditional background color based on headerShow state
          boxShadow: "none", // Remove default box shadow
          padding: "10px 0px", // Add padding to toolbar
        }}
      >
        <Toolbar>
          {/* Logo and title */}
          <div className="header_logo">
            <div className="font_righteous header_logo_venue ">
              Brooklyn Stoop
            </div>
            <div className="header_logo_title">Vintage items</div>
          </div>

          {/* Menu icon button */}
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.setState({ drawerOpen: true })} // Open drawer on menu icon click
          >
            <MenuIcon />
          </IconButton>

          {/* SideDrawer component */}
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.setState({ drawerOpen: value })} // Close drawer based on value from SideDrawer
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
