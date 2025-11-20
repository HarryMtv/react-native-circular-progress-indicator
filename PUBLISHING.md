# How to Build and Publish

This document provides instructions on how to build the project and publish it to npm.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (which includes npm)
*   An [npm](https://www.npmjs.com/) account

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/nithinpp69/react-native-circular-progress-indicator.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd react-native-circular-progress-indicator
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

## Building

To build the project, run the following command:

```bash
npm run build
```

This will create a `lib` directory with the compiled code.

## Publishing

1.  Log in to your npm account:

    ```bash
    npm login
    ```

2.  Publish the package:

    ```bash
    npm publish
    ```

    **Note:** Make sure you have the correct permissions to publish this package. You may need to be added as a collaborator on npm.
