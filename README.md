### Native JS
Native.js is the unofficial standalone framework to display ads from BuySellAds Monetization Framework. Send me a DM at [@sayzlim](https://twitter.com/sayzlim) if you wish to sign up as a publisher.

The framework allows publishers to insert placeholders in their HTML which will get replaced with the ads valuee upon script initialization.

The idea behind this framework is to allow publishers to decide the ad HTML structure and style the ad design with the color values returned from the API.

### Examples and Demos
Demos are used to showcase different type of common ad layout you can create using the framework. You may edit the HTML and the CSS to match your site design.

You don’t have to select one of the layouts from the demos below. In fact, we encourage publishers to design the ad format from scratch and use the placeholders to display the ad value.

- Fixed Footer Bar: https://codepen.io/sayzlim/pen/Pdaojb
- Floating Footer Bar: https://codepen.io/sayzlim/pen/KxbVoq
- Grid Based Demo: https://codepen.io/sayzlim/pen/OvJPJR
- Inline Sponsor Demo: https://codepen.io/sayzlim/pen/GxRgYE
- Paragraph Inline Demo: https://codepen.io/sayzlim/pen/qyojRJ
- Ribbon Demo: https://codepen.io/sayzlim/pen/NMjKEq
- Standard Banner Demo: https://codepen.io/sayzlim/pen/oqWyyL

You can also refer to the collection page at https://codepen.io/collection/XOmLrK/


### How to Use
1. Download the [native.js](https://github.com/sayzlim/native.js/blob/master/native.js) file and host it on your server.

2. Insert the file before </head> of your site. Replace `path/to/native.js` with the path to your `native.js` hosted on your site.

```
<div class="native-ad> // Required
    Write the HTML structure inside this element.
</div>

<script src="path/to/native.js"></script>
<script>
  _native.init("CKYIT2QJ"); // Demo Zone Key
</script>
```


`_native.init` accepts two parameters: zone and options.

- Zone: The key you receive when you’re accepted as a publisher.
- Options: There are multiple options you can select to customize the values from the framework.

```
default_options = {
  carbonZoneKey: "",
  display: "block",
  fallback: "",
  ignore: "false",
  placement: "nativejs",
  prefix: "native",
  targetClass: "native-ad"
};
```

Here’s an example of starting the script by passing these options.

```
<div class="native-js> // Required
    Write the HTML structure inside the targetClass element.
</div>

<script src="path/to/native.js"></script>
<script>
  _native.init("CKYIT2QJ", {
    ignore: "true",
    targetClass: "native-js"
  });
</script>
```

**fallback**
You can insert HTML element to display as the fallback when there is no ads returned from the API. You can use backtick to wrap escape the quote automatically.

**ignore**
Set the value to `true` for the development purpose.

**prefix**
The prefix you’re inserting for the placeholder. The default is `native` for placeholders like `#native_link#`. If you change the value to `bsa`, you must use `#bsa_link#` as the placeholder.

**targetClass**
The target class accept the class name of the HTML element you’ll be targeting. Only the content of the HTML inside the target will be replaced with the values returned from the Native API. The default value is `native-ad`.


### Using Carbon Ads as Fallback
You can also use Carbon Ads as the fallback when no ads are returned from the API. Carbon covers more regions compared to the Native ad units so you can maximize the ad revenue.

Here’s an example of passing your Carbon zone key as the fallback:

```
<div class="native-js> // Required
    Write the HTML structure inside the targetClass element.
</div>

<script src="path/to/native.js"></script>
<script>
  _native.init("CKYIT2QJ", {
    carbonZoneKey: 'CKYICK7J'
    ignore: "true",
    targetClass: "native-js",
    placement: "yoursitecom"
  });
</script>
```

### Available Placeholders
The placeholder must be enclosed with hashtag for the framework to detect. For example, if you wish to make the ad looks better by displaying ad background color, you can enter `#native_bg_color#` inside `.native-ad` class for the placeholders to be replaced with correct value.

Here are the required value for each ad:
- native_desc: the description of the ad
- native_company: the company that runs the ads
- native_link: the required URL to track the impressions and earning

Here are optionals value that should be used along to optimize the ad performance.
- native_bg_color: the ad background color
- native_bg_color_hover: the ad background color on hover
- native_color: the description text color
- native_color_hover: the description text color on hover
- native_cta: the call to action
- native_cta_bg_color: the call to action background color
- native_cta_bg_color_hover: the call to action background color
- native_cta_color: call to action text color
- native_cta_color_hover: call to action text color on hover
- native_img: the ad small image URL that includes `src` tag to avoid double request.
- native_index: the index of returned ads, useful if you wish to display more than one ad on a single page
- native_logo: the ad medium-size image URL that includes `src` tag to avoid double request.
- native_title: the ad title

### Available Functions
`_native.hide()` — you may pass this function into `onclick` event handler to hide the ad for 24 hours. For example, check out Flooating Footer Bar demo at https://codepen.io/sayzlim/pen/KxbVoq