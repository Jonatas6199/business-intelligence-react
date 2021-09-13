module.exports = {
    reactStrictMode: true,
    env: {
        APP_USERNAME: process.env.APP_USERNAME,
        APP_PASSWORD: process.env.APP_PASSWORD,
        AUTHENTICATE: process.env.AUTHENTICATE,
        USER_ROUTE: process.env.USER_ROUTE,
        TAGS_ROUTE: process.env.TAGS_ROUTE,
        SENSOR_ROUTE: process.env.SENSOR_ROUTE,
        NOTIFICATION_ROUTE: process.env.NOTIFICATION_ROUTE,
        IMAGE_ROUTE: process.env.IMAGE_ROUTE
    }
  }