/* exported config */

var config = {
  // Show help text for images
  showHelp: true,

  // Image overview file or path to the ASU API
  versions: {
    "18.06.8": "../misc/18.06.8/",
    "19.07.4": "../misc/19.07.4/",
    SNAPSHOT: "../misc/SNAPSHOT/",
  },

  // Pre-selected version
  default_version: "19.07.4",

  // Image download URL
  //image_url: "https://downloads.openwrt.org/releases/{version}/{target}",

  // Info link URL
  //info_url: "https://openwrt.org/start?do=search&id=toh&q={title}",

  // Build custom images
  // See https://github.com/aparcar/asu
  //asu_url: 'https://chef.libremesh.org'
};
