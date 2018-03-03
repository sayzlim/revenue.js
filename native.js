var DISPLAY_STYLE;
var CLASS_NAME;

var _native = {
  init: function(
    zone,
    options = {
      class: "native-ad",
      display: "block"
    }
  ) {
    let srv = document.createElement("script");
    srv.src =
      "https://srv.buysellads.com/ads/" + zone + ".json?callback=_native_go";
    document.getElementsByTagName("head")[0].appendChild(srv);

    CLASS_NAME = options["class"];
    DISPLAY_STYLE = options["display"];
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

  if (ads.length === 0) {
    document.getElementsByClassName(CLASS_NAME)[0].style.display = "none";
    document.getElementsByClassName(CLASS_NAME)[0].innerHTML = null;
    return;
  }

  let adElement = document.getElementsByClassName(CLASS_NAME)[0].innerHTML;

  let ad = adElement
    .replace(/#native_bg_color#/g, ads[0]["backgroundColor"])
    .replace(/#native_bg_color_hover#/g, ads[0]["backgroundHoverColor"])
    .replace(/#native_company#/g, ads[0]["company"])
    .replace(/#native_cta#/g, ads[0]["callToAction"])
    .replace(/#native_cta_bg_color#/g, ads[0]["ctaBackgroundColor"])
    .replace(/#native_cta_bg_color_hover#/g, ads[0]["ctaBackgroundHoverColor"])
    .replace(/#native_cta_text_color#/g, ads[0]["ctaTextColor"])
    .replace(/#native_cta_text_color_hover#/g, ads[0]["ctaTextColorHover"])
    .replace(/#native_desc#/g, ads[0]["description"])
    .replace(/#native_image#/g, ads[0]["image"])
    .replace(/#native_link#/g, ads[0]["statlink"])
    .replace(/#native_logo#/g, ads[0]["logo"])
    .replace(/#native_text_color#/g, ads[0]["textColor"])
    .replace(/#native_text_color_hover#/g, ads[0]["textColorHover"])
    .replace(/#native_title#/g, ads[0]["title"]);

  document.getElementsByClassName(CLASS_NAME)[0].innerHTML = null;
  document.getElementsByClassName(CLASS_NAME)[0].innerHTML += ad;
  document.getElementsByClassName(CLASS_NAME)[0].style.display = DISPLAY_STYLE;
};

// Install the following script to trigger the ad

// _native.init("CKYD553E", {
//   class: 'native-ad',
//   display: 'flex'
// });
