var ref = '';
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // Fix for iOS status bar overlap
        if (typeof StatusBar != "undefined") {
             StatusBar.overlaysWebView(false);
             StatusBar.styleDefault();
            
        }
       // window.open = cordova.InAppBrowser.open("http://cordova.apache.org/","_blank");
      // window.open = cordova.InAppBrowser.open; 
        //ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
        setTimeout(function(){ 
           // window.open();
           // cordova.InAppBrowser.open();
           // ref.show();
           // navigator.app.loadUrl("http://cordova.apache.org/", {wait:2000, loadingDialog:"Wait,Loading App", loadUrlTimeoutValue: 60000});
           // alert("Hello");
        }, 3000);
       // cordova.InAppBrowser.open("http://cordova.apache.org/","_blank","location=no");
        
        // Init Bit6 SDK
        var opts = {'apikey': '3rx8h-3P0KnZwder6K'}; // TODO: insert your API key here
        var b6 = Bit6.init(opts);
        // Prepare the app
        initApp(b6, true);
    }
};

app.initialize();
