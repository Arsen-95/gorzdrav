const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "uz"],
    localePath: path.resolve("src/shared/config/i18n"),
  },
};
