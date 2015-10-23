// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.bit6 || (window.bit6 = {});

  bit6.Rtc2 = (function(superClass) {
    extend(Rtc2, superClass);

    function Rtc2(phonertc) {
      this.phonertc = phonertc;
      Rtc2.__super__.constructor.apply(this, arguments);
    }

    Rtc2.prototype.init = function(media, outgoing, iceServers, options) {
      this.media = media;
      this.outgoing = outgoing;
      this.options = options;
      return Rtc2.__super__.init.apply(this, arguments);
    };

    Rtc2.prototype.start = function() {
      var cfg, s;
      console.log('Rtc2 start', this.options);
      cfg = {
        isInitiator: this.outgoing,
        streams: {
          audio: this.options.audio,
          video: this.options.video
        }
      };
      if (this.pcConfig.iceServers.length > 1) {
        s = this.pcConfig.iceServers[1];
        cfg.turn = {
          host: s.url,
          username: s.username,
          password: s.credential
        };
      }
      this.session = new this.phonertc.Session(cfg);
      this.session.on('sendMessage', (function(_this) {
        return function(data) {
          console.log('Rtc2.sess.send: ' + JSON.stringify(data));
          switch (data.type) {
            case 'offer':
            case 'answer':
              _this.bufferedOfferAnswer = {
                type: data.type,
                sdp: data.sdp
              };
              return _this._maybeSendOfferAnswer();
            case 'candidate':
              data.sdpMLineIndex = data.label;
              return _this._handleIceCandidate({
                candidate: data
              });
            case 'IceGatheringChange':
              if (data.state === 'COMPLETE') {
                return _this._handleIceCandidate({});
              }
              break;
            case 'bye':
              return console.log(' - bye');
            case '__set_session_key':
              return console.log('Rtc2 - session key set');
          }
        };
      })(this));
      this.session.on('answer', (function(_this) {
        return function() {
          return console.log('Rtc2.sess.answer');
        };
      })(this));
      this.session.on('disconnect', (function(_this) {
        return function() {
          return console.log('Rtc2.sess.disconnect');
        };
      })(this));
      this.session.call();
      return this.isStarted = true;
    };

    Rtc2.prototype.stop = function() {
      this.isStarted = false;
      if (this.session) {
        this.session.close();
      }
      return this.session = null;
    };

    Rtc2.prototype.gotRemoteOfferAnswer = function(msg) {
      console.log("Rtc2.gotRemoteOfferAnswer: " + msg.type + ' data=' + JSON.stringify(msg));
      switch (msg.type) {
        case 'offer':
        case 'answer':
          if (this.session) {
            return this.session.receiveMessage(msg);
          }
      }
    };

    Rtc2.prototype.gotHangup = function(msg) {
      return this.stop();
    };

    return Rtc2;

  })(bit6.Rtc);

}).call(this);
