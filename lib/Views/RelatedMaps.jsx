import React from "react";
import PropTypes from "prop-types";

import MenuPanel from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx";
import PanelStyles from "terriajs/lib/ReactViews/Map/Panels/panel.scss";
import Styles from "./related-maps.scss";
import classNames from "classnames";

function RelatedMaps(props) {
  const dropdownTheme = {
    inner: Styles.dropdownInner,
    icon: "gallery"
  };

  return (
    <MenuPanel
      theme={dropdownTheme}
      btnText="Related Maps"
      smallScreen={props.smallScreen}
      viewState={props.viewState}
      btnTitle="See related maps"
    >
      <div className={classNames(PanelStyles.header)}>
        <label className={PanelStyles.heading}>Related Maps</label>
      </div>

      <p>Clicking on a map below will open it in a separate window or tab.</p>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a
          target="_blank"
          href="https://geodata.lvgmc.lv/portal/apps/webappviewer/index.html?id=284244e6dc5346e3bb989d35ba6ef5c8&extent=2112913.7274%2C7477364.7554%2C3288209.4743%2C8009977.9685%2C102100"
        >
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/aremi.jpg")}
            alt="AREMI"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://geodata.lvgmc.lv/portal/apps/webappviewer/index.html?id=284244e6dc5346e3bb989d35ba6ef5c8&extent=2112913.7274%2C7477364.7554%2C3288209.4743%2C8009977.9685%2C102100"
        >
          Latvijas plūdu riska un plūdu draudu kartes
        </a>

        <p>
          Latvijas plūdu draudu un plūdu riska kartēs var atrast informāciju par
          paliem (sniega kušanas un lietus plūdiem pavasarī) un jūras
          vējuzplūdiem.
        </p>
      </div>
    </MenuPanel>
  );
}

RelatedMaps.propTypes = {
  viewState: PropTypes.object.isRequired,
  smallScreen: PropTypes.bool
};

export default RelatedMaps;
