Bit6 Cordova Demo App
---------------------
[![GitHub version](https://badge.fury.io/gh/bit6%2Fbit6-cordova.svg)](https://github.com/bit6/bit6-cordova-demo)

This project demonstrates the full functionality of [Bit6 Cordova Plugin](https://github.com/bit6/bit6-cordova).

### Usage
* Get the API Key at [Bit6 Dashboard](https://dashboard.bit6.com).
* Create a new telerik project by cloning  this repo.

* Edit `config.xml` to set your app id - replace `com.bit6.samples.DemoApp` with your app id
  (note: iOS APN requires unique bundle id).
* Set your Bit6 API Key in `js/index.js`
  ```js
  {'apikey': 'yourApiKey'}
  ```

* Enable push plugin in the plugins list.

* Build, download and deploy to your device.