let ticking = false;
let isFirefox = /Firefox/i.test(navigator.userAgent);
let isIe =
  /MSIE/i.test(navigator.userAgent) ||
  /Trident.*rv\:11\./i.test(navigator.userAgent);
let scrollSensitivitySetting = 100; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
let slideDurationSetting = 2500; //Amount of time for which slide is "locked"
let currentSlideNumber = 0;
let totalSlideNumber = $(".background").length;
let headingPrimary = $(".heading-primary");
let headingSecondary = $(".heading-secondary");
let headingTertiary = $(".heading-tertiary");
let slide = $(".background");
let arrowUp = $(".up");
let arrowDown = $(".down");
let iconIds = [
  "#1-icon-css",
  "#1-icon-express",
  "#1-icon-git",
  "#1-icon-heroku",
  "#1-icon-html",
  "#1-icon-illustrator",
  "#1-icon-javascript",
  "#1-icon-jquery",
  "#1-icon-mongodb",
  "#1-icon-nodejs",
  "#1-icon-photoshop",
  "#1-icon-react",
  "#1-icon-sass",
  "#1-icon-sequelize",
  "#1-icon-bootstrap"
];
let tooltipTexts =[
    'CSS3',
    'Express/Node.js',
    'Git and Git CLI',
    'Heroku CLI and Deployment',
    'Current Semantic HTML5',
    'Adobe Illustrator',
    'Javascript (plus ES6)',
    'jQuery and jQuery Mobile',
    'MongoDB and Mongoose as an ORM',
    'Node.Js',
    'Adobe Photoshop',
    'React.js and Redux/Redux Thunk for Async HTTP Requests.',
    'SASS, SCSS, and CSS Pre-compilers',
    'mySQL and Sequelize as an ORM',
    'Up to date with Bootstrap and Materialize Frameworks',
];
//15 classes
let animationDelayTimesDown = [
  ".1s",
  ".2s",
  ".3s",
  ".3s",
  ".3s",
  ".3s",
  ".3s",
  ".2s",
  ".1s",
  ".1s",
  ".2s",
  ".3s",
  ".3s",
  ".2s",
  ".1s"
];
let animationDelayTimesUp = [
  ".3s",
  ".25s",
  ".2s",
  ".15s",
  ".1s",
  ".15s",
  ".2s",
  ".25s",
  ".3s",
  ".3s",
  ".2s",
  ".1s",
  ".1s",
  ".2s",
  ".3s"
];