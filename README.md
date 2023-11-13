# cosmo-icons [![npm version](https://badge.fury.io/js/@pixel-forge%2Fcosmo-icons.svg)](https://badge.fury.io/js/@pixel-forge%2Fcosmo-icons) 
Cosmo Icons is a tool that provides common icons in animatable SVG format as react components.

## Why?
The point is to provide commonly used icons in a logically structured way inside your project without downloading svg files from other sources. cosmo-icons provides a focused group
of icons including classed elements for ease of element targeting and predefined animations for your use.

## Installation
via npm:
```
npm i @pixel-forge/cosmo-icons
```

## Icon Types

There are 3 types of icons:

| Regular                                                                   | Solid                                                         | Outline                                                         |
|---------------------------------------------------------------------------|---------------------------------------------------------------|-----------------------------------------------------------------|
| <img src="./public/gears-solid.svg" style="background:white;width:200px"> | <img src="./public/gears-solid.svg" style="background:white;width:200px"> | <img src="./public/gears-outline.svg" style="background:white;width:200px"> |

Using the icon is done in this manner:
```tsx
//Call Structure
<CosmoIcons.icon-name.icon-type {props}/>

//Example
<CosmoIcons.gears.solid className={'custom-class'}/>
```

## Structure
icons are wrapped by a "div" element with a class "cosmo-icon" combined with the optional class passed by the user:
```tsx
const className = `cosmo-icon ${props.className ?? ''}`.trim();
return <div className={className}>
  // SVG element here
</div>
```
This makes it easier to position icons inside other flows (mainly flex) without affecting the sizing of the icon itself and without adding unnecessary paddings or margins.

SVG elements are prefixed by ci (Cosmo Icons) and follow the double underscore rule, e.g.(gears icon):

```tsx
return <div className={'cosmo-icon'}>
  //Outer svg element with the encompasing class
  <svg className={'ci__gears'}>
    //Inner path elements following the class rules
    <path d={'...'} className={'ci__gears__gear'}/>
    <path d={'...'} className={'ci__gears__gear'}/>
  </svg>
</div>
```
Cosmo-icons uses this naming convention for 2 reasons:
* Consistent structuring makes it easy for the user to target parts of the icon for styling and animating.
* Cosmo-icons uses these classes to provide pre-made animations.

## SVG Custom Attributes

Cosmo-icons uses SASS functions to target specific parts of svg elements and decides whether to apply certain css attributes by the attribute values on the element,
in order to apply color more easily.
e.g: </br> A path element that looks like this: 
```svg
<path data-ci-fill="false"/>
```
Will not be targeted by Cosmo-icons created sass functions that set the css "fill" attribute. 

| Attribute      | values         | description                                                                   |
|----------------|----------------|-------------------------------------------------------------------------------|
| data-ci-type   | solid, outline | Flags the type of the icon                                                    |
| data-ci-fill   | true, false    | Flags whether an SVG element should be affected by the css "fill" attribute   |
| data-ci-stroke | true, false    | Flags whether an SVG element should be affected by the css "stroke" attribute |

## License and Copyright
This package is released under the terms of the [Apache-2.0 license](https://www.apache.org/licenses/LICENSE-2.0)<br>
All the icons in this package are created by us. 