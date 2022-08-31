# webpack-starter-config
A simple no config webpack and typescript developer environment.<br>
This is intended as a Vanilla TS starter files template.<br>
While this template is merely default configuration stitched together, it is opinionated and might evolve over time.<br>

## Getting started

    npm i

## To run the application

    npx webpack-dev-server


## To run the tests
    
    npx mocha

## To run the test coverage (Istanbul) 

    npx nyc mocha

Alternatively, there are useful extensions for VS Code:
    
- <a href="https://marketplace.visualstudio.com/items?itemName=hindlemail.cover">*Mocha Test Explorer*</a> by *Holger Benl*
    Enables us to run the tests in a test explorer or directly from the file that defines them.
- <a href="https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter">*Cover*</a> by *Tom Hindle*
    to check the code coverage by looking at *.nyc_output* after running **npx nyc mocha**.