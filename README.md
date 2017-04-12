# Landing Page Framework

## !Important!
Uses Flexbox. Currently does ***not*** have media queries.

## Usage

### Clone or Fork Repository
`git clone https://github.com/matthiaskjordan/sa_lp_framework.git`

### Editing
- Navigate to project directory `cd sa_la_framework`
- Open two terminal windows and run `gulp` and `hugo -w server`
- Edit theme files in `./themes/framework` to change layout and/or appearance
- Colors/ Fonts are defined as SCSS variables in `themes/framework/src/css/_var.scss`

---
###### Please check [Hugo docs](https://gohugo.io/overview/introduction/) for more information on working with Hugo.
---

### Build & Deploy
` gulp build && hugo && gulp domain && surge -p ./public && rm -rf ./public`

It is recommended that you set an alias for this.

> alias sup='gulp build && hugo && gulp domain && surge -p ./public && rm -rf ./public'


#### Built Using:
- [Hugo](https://gohugo.io)
- [Flexbox Grid](http://flexboxgrid.com)

#### Hosted With:
- [Surge](https://surge.sh)
