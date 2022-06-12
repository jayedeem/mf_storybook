How to use module federation with storybook and react example

# Installation

- Must Have Docker Installed
- docker-compose up --build

# Purpose

- Share a common design system through out multiple codebases using the module federation webpack plugin

# Front

- Bring in component from storybook
- add to components folder (makes it one line for now)
- add the types of the component in @types/components/

# Storybook/DesignSystem

- webpack for sb is in .storybook/main.js
- create a component
- expose component in .storybook/main.js

## TODO

- Figure out if both need to be restarted in order to receive new components/updated remoteEntry file
