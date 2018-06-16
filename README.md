# vue-overlays

Vue Overlays (Portal, Modal, Popover) based on React-Overlays and React Material-UI 1.X

Work in progress


## TODO:

* Two installation types: 1) automatic Vue.use() that installs all components 2) manual installation of every component on user side
* Good transitions support
* Fix hackish Portal beforeDestroy cleanup
* Refactor/improve sitauation around zIndex/'mui-fixed'/scrollbars/hidden overflow
* Make ModalManager scoped the same way as in MUI version
* Good SRR support
* Good way to customize styling/classes of VO components
* Passing DOM attributes like aria-* to VO components
* Sinking props into lower level components (e.g. Popover props => Modal props)
* Modal: keepMounted
* Modal: BackdropComponent
* Modal: children props role
* Modal: tabIndex prop make it work similar as in React version render
* Backdrop: custom backdrop rendering (slot?)
