### Native JS
Native.js is the unofficial standalone framework to display ads from BuySellAds Monetization Framework. You can sign up as a publisher by [visting the Native page](https://www.buysellads.com/publishers/native).

The framework allows publishers to insert placeholders in their HTML which will get replaced with the correct value upon initialization. The main idea is the publishers can decide their ad structure and use the color value in their styles.

### Examples and Demos
- Grid Based Demo: https://codepen.io/sayzlim/pen/OvJPJR
- Inline Sponsor Demo: https://codepen.io/sayzlim/pen/GxRgYE


### How to Use
Download the script and insert in the before </head> of your site. Replace https://codepen.io/sayzlim/pen/geOONP.js with the path to your 

```
<div class="native-ad> // Required
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
  targetClass: "native-ad",
  display: "block",
  visibleClass: "native-show",
  placement: "",
  prefix: "native"
};
```

**targetClass**
The target class accept the class name of the HTML element you’ll be targeting. Only the content of the HTML inside the target will be replaced with the values returned from the Native API. The default value is `native-ad`.

**display**
The framework will insert inline style according to the value set here. By default, the framework will set the target class to `display: block`. You can change it to `grid` or `flex` according to the layout you want to create.

**visibleClass**
The name of the class that will be inserted when the ad successfully replace the placeholder with the returned value. It’s used when you want to use CSS to create transition effect for when the ads are visible.

**prefix**
The prefix you’re inserting for the placeholder. The default is `native` for placehoder like `#native_link#`. If you change the value to `bsa`, you must use `#bsa_link#` as the placeholder.

### Available Placeholders
The placeholder must be enclosed with hashtag for the framework to detect. For example, if you wish to make the ad looks better by displaying ad background color, you can enter `#native_bg_color#` inside `.native-ad` class for the placeholders to be replaced with correct value.

- native_bg_color: the ad background color
- native_bg_color_hover: the ad background color on hover
- native_company: the company that runs the ads
- native_cta: the call to action
- native_cta_bg_color: the call to action background color
- native_cta_bg_color_hover: the call to action background color
- native_cta_color: call to action text color
- native_cta_color_hover: call to action text color on hover
- native_desc: the description of the ad
- native_index: the index of returned ads, useful if you wish to display more than one ad on a single page
- native_img: the ad small image URL
- native_link: the required URL to track the impressions and earning
- native_logo: the ad medium image URL
- native_color: the description text color
- native_color_hover: the description text color on hover
- native_title: the ad title