const {
  withStorybookModuleFederation,
} = require("storybook-module-federation");

const storiesDir = "../src/stories/";

module.exports = withStorybookModuleFederation({
  name: "components",
  filename: "remoteEntry.js",
  exposes: {
    // "./Button": require.resolve(`${storiesDir}Button.tsx`),
    "./Page": require.resolve("../src/stories/Page.tsx"),
    "./CTA": require.resolve("../src/stories/Cta.tsx"),
    "./Heading": require.resolve("../src/stories/Heading.tsx"),
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false,
    },
  },
})({
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
});
