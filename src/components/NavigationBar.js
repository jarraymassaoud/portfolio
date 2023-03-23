import React from "react";
import { NavDropdown } from "react-bootstrap";
import $ from "jquery";

function NavigationBar() {
  $(document).ready(function () {
    $(".dropdown-item").click(function (e) {
      e.preventDefault();
      let currentUrl = window.location.href;
      let selectedLang = $(this).data("lang");
      let translateUrl =
        "https://translate.google.com/translate?hl=en&sl=auto&tl=" +
        selectedLang +
        "&u=" +
        encodeURIComponent(currentUrl);
      window.location.href = translateUrl;
    });
  });

  return <div></div>;
}

export default NavigationBar;
