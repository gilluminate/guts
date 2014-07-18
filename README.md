# Guts.css

A set of gutter classes you can use to add padding or margins to any element. This can be especially helpful using gutterless grid systems such as Pure.

## Features

Uses em based measurements which makes it easy to use in responsive environments. By chaging the font size of the element in use, the ems respond. So to change gutter sizes, all you need to do is change the font size in your breakpoints.

Includes options for either *padding* or *margin* or both, depending on your layout needs.

Easily determine where the gutter will appear (top, left, etc.) and how big using an intuitive namind system.

## Usage

Classnames are set up in 3 parts to determine type, position, and size of the gutter:

`guts-[type]-[position]-[size]`

**padding vs. margin**  
Guts consist of two types of class prefixes, padding (`guts-p-`) and margin (`guts-m-`).

**position**  
Positions can easily be determined using shorthand parts of the classes. For example `guts-p-t-` sets the padding to only occur at the top (`-t`).

**units**  
Each class requires a unit suffix to determine how large the gutter will be. For example `guts-p-t-2` will set a 2em sized padding at the top of the element.

Keep in mind, you can use multiple classes on the same element if so desired to add padding and margins to your block element. You can also use multiple classes on the same element to give a mixture different sizes.

## Options

There are various options for each part of the classname, providing a convenient and powerful gutter system for customizing your layout.

### Types

**-p**  
using `-p` in your classname will add **padding**

**-m**  
using `-m` in your classname will add **margins**

### Positions

**-full**  
using `-full` in your classname will add padding or margin **all the way around**

**-v**  
using `-v` in your classname will add padding or margin to the **top and bottom**

**-h**  
using `-h` in your classname will add padding or margin to the **left and right**

**-t**  
using `-t` in your classname will add padding or margin to the **top**

**-b**  
using `-b` in your classname will add padding or margin to the **bottom**

**-r**  
using `-r` in your classname will add padding or margin to the **right**

**-l**  
using `-l` in your classname will add padding or margin to the **left**

### Sizes

**-quart**  
using the `-quart` suffix is the equivelant of *0.25em*

**-half**  
using the `-half` suffix is the equivelant of *0.5em*

**-1-half**  
using the `-1-half` suffix is the equivelant of *1.5em*

**Any number between 1 and 15**  
using any number between 1 and 15 will result in the size of that number in em. For example, using `-2` is the equivelant of 2em;

## Examples

`class="guts-p-t-3"`  
is the equivelant of adding the following styles to your css:
> padding-top: 3em;

`class="guts-m-h-2"`  
is the equivelant of adding the following styles to your css:
> margin-left: 2em;<br>margin-right: 2em;

`class="guts-p-full-half"`  
is the equivelant of adding the following styles to your css:
> padding: 0.5em;

`class="guts-p-v-2 guts-m-h-1"`
is the equivelant of adding the following styles to your css:
> padding-top: 2em;<br>padding-bottom: 2em;<br>margin-left: 1em;<br>margin-right: 1em;