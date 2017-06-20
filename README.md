# Landing Page Framework

Uses [Flexbox Grid](http://flexboxgrid.com/).

## Usage

### Clone or Fork Repository
git clone https://github.com/matthiaskjordan/sa_lp_framework.git framework

### Set Up
- cd framework
- If needed, brew install yarn -or- [method of your choice](https://yarnpkg.com/en/docs/install)
- yarn

### Usage
- Open two tabs in your terminal and run 'gulp' and 'hugo -w server' side-by-side.
- Open 'http://localhost:1313/' in the browser of your choice.
- Hugo supports auto-reload, all changes will be reflected in your browser.

### Tree
```.
├── content
├── node_modules
└── themes
    └── framework
        ├── archetypes
        ├── data
        │   ├── assets
        │   ├── css
        │   └── js
        ├── layouts
        │   ├── _default
        │   ├── partials
        │   └── shortcodes
        ├── src
        │   ├── assets
        │   ├── css
        │   └── js
        └── static
            ├── assets
            ├── css
            └── js```

### Editing
- Edit theme files in `./themes/framework` to change layout and/or appearance
- Colors/ Fonts are defined as SCSS variables in `themes/framework/src/css/_var.scss`
- All content is defined through metadata in `./content/framework.md`

---
###### Please check [Hugo docs](https://gohugo.io/overview/introduction/) for more information on working with Hugo.
---

### Build & Deploy
` gulp build && hugo && gulp domain && surge -p ./public && rm -rf ./public`

It is recommended that you set an alias for this.

I use:
> alias publish='gulp build && hugo && gulp domain && surge -p ./public && rm -rf ./public'


#### Built Using:
- [Hugo](https://gohugo.io)
- [Flexbox Grid](http://flexboxgrid.com)

#### Hosted With:
- [Surge](https://surge.sh)
