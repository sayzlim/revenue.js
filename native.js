var _native = {
  construct: function(e) {
    var default_options = {
      class: "native-ad",
      display: "block",
      visibleClass: "native-show",
      placement: ""
    };

    if (typeof e == "undefined") return default_options;
    Object.keys(default_options).forEach((key, index) => {
      if (typeof e[key] == "undefined") {
        e[key] = default_options[key];
      }
    });
    return e;
  },
  init: function(zone, options) {
    options = this.construct(options);
    this.className = options["class"];
    this.displayStyle = options["display"];
    this.visibleClassName = options["visibleClass"];

    let jsonUrl = "https://srv.buysellads.com/ads/" + zone + ".json?callback=_native_go";
    if (options["placement"] !== "") {
      jsonUrl += "&segment=placement:" + options["placement"];
    }

    let srv = document.createElement("script");
    srv.src = jsonUrl;
    document.getElementsByTagName("head")[0].appendChild(srv);
  },
  sanitize: function(ads) {
    return ads
      .filter(ad => {
        return Object.keys(ad).length > 0;
      })
      .filter(ad => {
        return ad.hasOwnProperty("statlink");
      });
  }
};

var _native_go = function(json) {
  let ads = _native.sanitize(json["ads"]);

  let selectedClassName = document.querySelectorAll("." + _native.className);

  selectedClassName.forEach((className, index) => {
    if (typeof ads[index] !== "undefined" && typeof className !== "undefined") {
      let adElement = document.getElementsByClassName(_native.className)[index].innerHTML;

      let ad = adElement
        .replace(/#native_bg_color#/g, ads[index]["backgroundColor"])
        .replace(/#native_bg_color_hover#/g, ads[index]["backgroundHoverColor"])
        .replace(/#native_company#/g, ads[index]["company"])
        .replace(/#native_cta#/g, ads[index]["callToAction"])
        .replace(/#native_cta_bg_color#/g, ads[index]["ctaBackgroundColor"])
        .replace(/#native_cta_bg_color_hover#/g, ads[index]["ctaBackgroundHoverColor"])
        .replace(/#native_cta_text_color#/g, ads[index]["ctaTextColor"])
        .replace(/#native_cta_text_color_hover#/g, ads[index]["ctaTextColorHover"])
        .replace(/#native_desc#/g, ads[index]["description"])
        .replace(/#native_index#/g, "native-index-" + ads[index]["i"])
        .replace(/#native_image#/g, ads[index]["image"])
        .replace(/#native_link#/g, ads[index]["statlink"])
        .replace(/#native_logo#/g, ads[index]["logo"])
        .replace(/#native_text_color#/g, ads[index]["textColor"])
        .replace(/#native_text_color_hover#/g, ads[index]["textColorHover"])
        .replace(/#native_title#/g, ads[index]["title"]);

      document.getElementsByClassName(_native.className)[index].innerHTML = null;
      document.getElementsByClassName(_native.className)[index].innerHTML += ad;
      document.getElementsByClassName(_native.className)[index].style.display = _native.displayStyle;
      if (_native.className !== "")
        document.getElementsByClassName(_native.className)[index].className += " " + _native.visibleClassName;
    } else {
      document.getElementsByClassName(_native.className)[index].innerHTML = null;
      document.getElementsByClassName(_native.className)[index].style.display = "none";
    }
  });
};

// Install the following script to trigger the ad

_native.init("CKYDLK3N", {
  visibleClass: "native-show"
});
