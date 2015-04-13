Bit6 Cordova Plugin
-------------------
[![GitHub version](https://badge.fury.io/gh/bit6%2Fbit6-cordova.svg)](https://github.com/bit6/bit6-cordova)

Bit6 is a real-time, cloud-based communications-as-a-service platform that allows mobile and web application developers to quickly and easily add voice/video calling, texting, and multimedia messaging capabilities into their apps.


### Installation

```
  cordova plugin add  https://github.com/bit6/bit6-cordova
```

### Usage
There is a global object Bit6 which returns initialized bit6 object based on the provided options.
Make sure to instantiate bit6 object  after deviceReady event

```javascript

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  var opts = {'apikey': 'yourApiKey'};
  var b6 = Bit6.init(opts);

  //Add app specific bindings to b6 object:
  //Some examples
  //Login into an existing account using an Identity and a password.
  $('#loginButton').click(function() {
      // Convert username to an identity URI
      var ident = 'usr:' + 'john';
      b6.session.login({identity: ident, password: 'secret'}, function(err) {
          if (err) {
             console.log('login error', err);
           }
           else {
             console.log('login successful');
           }
      });
  });

  //incoming call from another user
  b6.on('incomingCall', function(c) {
     console.log('Incoming call', c);
  });
}
```


For more details on how to use bit6 refer to 'Samples' section of this document.


### Get Bit6 API Key

Go to [Dashboard](https://dashboard.bit6.com) and get the API Key for your app.



### Documentation
The plugin exposes the same API as Bit6 JS SDK. So for detailed API reference please refer to [Bit6-JS-SDK](http://bit6.github.io/bit6-js-sdk/) page.



### Samples
The source code for the demo app is available in the [demo](https://github.com/bit6/bit6-cordova-demo) repository.


### Additional plugin

  * PushNotidication

    For complete functionality Bit6 requires [PushNotification](https://github.com/Telerik-Verified-Plugins/PushNotification) plugin to be able to receive push notifications for incoming calls and messages.

    Push plugin will be installed automatically with Bit6 plugin.

    If it is missing Bit6 still functions properly just without push notification support.


### Third-party libraries
Bit6 plugin leverages code from the excellent [WebRTC](http://www.webrtc.org/), [PhoneRTC](https://github.com/alongubkin/phonertc) and [phonegap-websocket](https://github.com/mkuklis/phonegap-websocket/) projects.


### Platforms
Bit6 plugin supports iOS, Android and Browser platforms in Cordova.


### Native SDKs
Native Bit6 SDKs are available for: [iOS](https://github.com/bit6/bit6-ios-sdk), [Android](https://github.com/bit6/bit6-android-sdk) and [JavaScript](https://github.com/bit6/bit6-js-sdk).