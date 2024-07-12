import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faBuilding,
  faDrum,
  faDollarSign,
  faMapMarker,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";

const SideDrawer = (props) => {
  // Function to scroll to a specific section on click
  const scrollToSection = (element) => {
    scroller.scrollTo(element, {
      duration: 1500, // Scroll duration in milliseconds
      delay: 150, // Delay before scrolling starts
      smooth: true, // Smooth scrolling
      offset: -160, // Offset from the top after scrolling (adjust as needed)
    });
    props.onClose(false); // Close the drawer after clicking a navigation item
  };

  // Styles for navigation icons
  const navIcon = {
    color: "#1690F0", // Icon color
    padding: "10px", // Padding around the icon
    fontSize: "25px", // Icon size
  };

  return (
    <Drawer
      anchor="right" // Drawer position (right side)
      open={props.open} // Drawer open state controlled by props
      onClose={() => props.onClose(false)} // Close drawer handler
    >
      <List component="nav">
        {/* List items for navigation */}
        <ListItem button onClick={() => scrollToSection("startTime")}>
          <FontAwesomeIcon icon={faCalendarAlt} style={navIcon} />
          Event starts in
        </ListItem>
        <ListItem button onClick={() => scrollToSection("venue")}>
          <FontAwesomeIcon icon={faBuilding} style={navIcon} />
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrollToSection("highlights")}>
          <FontAwesomeIcon icon={faDrum} style={navIcon} />
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToSection("Discount")}>
          <FontAwesomeIcon icon={faDollarSign} style={navIcon} />
          Discount
        </ListItem>
        <ListItem button onClick={() => scrollToSection("Items")}>
          <FontAwesomeIcon icon={faCameraRetro} style={navIcon} />
          Items
        </ListItem>
        <ListItem button onClick={() => scrollToSection("location")}>
          <FontAwesomeIcon icon={faMapMarker} style={navIcon} />
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
