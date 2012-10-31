// Generated by CoffeeScript 1.3.3
(function() {
  var Rgb, Rgba, circleCollides, keyName, maxEnemySize, rectCollides,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  rectCollides = function(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  };

  circleCollides = function(c1, c2) {
    var a, b, c;
    if (rectCollides(c1, c2)) {
      a = c2.cx - c1.cx;
      b = c2.cy - c1.cy;
      c = Math.sqrt(a * a + b * b);
      if ((c - c1.radius - c2.radius) < 0) {
        return true;
      }
    }
    return false;
  };

  maxEnemySize = function(player) {
    return Math.floor(Math.sqrt(player.radius) * PROPORTION_MAX_NEW_ENEMY_SIZE);
  };

  window.keydown = {};

  keyName = function(event) {
    return $.hotkeys.specialKeys[event.which] || String.fromCharCode(event.which).toLowerCase();
  };

  $(document).bind("keydown", (function(event) {
    return keydown[keyName(event)] = true;
  }));

  $(document).bind("keyup", (function(event) {
    return keydown[keyName(event)] = false;
  }));

  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };

  CanvasRenderingContext2D.prototype.fillCircle = function(x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI);
    return this.fill();
  };

  CanvasRenderingContext2D.prototype.strokeCircle = function(x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI);
    return this.stroke();
  };

  CanvasRenderingContext2D.prototype.drawCircle = function(x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI);
    this.fill();
    return this.stroke();
  };

  Rgb = (function() {

    function Rgb(r, g, b) {
      this.r = r != null ? r : 0;
      this.g = g != null ? g : 0;
      this.b = b != null ? b : 0;
    }

    Rgb.prototype.toString = function() {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ')';
    };

    return Rgb;

  })();

  Rgba = (function(_super) {

    __extends(Rgba, _super);

    function Rgba(r, g, b, a) {
      if (r == null) {
        r = 0;
      }
      if (g == null) {
        g = 0;
      }
      if (b == null) {
        b = 0;
      }
      this.a = a != null ? a : 1;
      Rgba.__super__.constructor.call(this, r, g, b);
    }

    Rgba.prototype.toString = function() {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
    };

    return Rgba;

  })(Rgb);

  window.requestAnimFrame = (function() {}, window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  });

}).call(this);
