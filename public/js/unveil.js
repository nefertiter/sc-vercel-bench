/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

(function ($) {
  $.fn.unveil = function (threshold, callback) {
    var $w = $(window),
      th = threshold || 0,
      retina = window.devicePixelRatio > 1,
      attrib = retina ? "data-src-retina" : "data-src",
      images = this,
      loaded;

    function loadJS(src, onLoad) {
      var script = document.createElement("script");
      script.src = src;
      if (onLoad) script.onload = onLoad;
      document.head.appendChild(script);
    }
    this.one("unveil", function () {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      var wistia = this.getAttribute("data-id");
      var $this = $(this);
      if (source) {
        if (this.nodeName === "IMG") {
          this.setAttribute("src", source);
        } else {
          $("<img/>")
            .attr("src", source)
            .one("load", function () {
              $(this).remove();
              $this
                .css("backgroundImage", "url(" + source + ")")
                .trigger("load");
            });
        }
        if (typeof callback === "function") callback.call(this);
      } else if (wistia) {
        var container = $this;
        var button = $("button", container);
        var holder = $(".holder-" + wistia);

        button.on("click", function (ev) {
          ev.preventDefault();
          onceLoaded = function () {
            window._wq = window._wq || [];
            container.addClass("hidden");
            holder.removeClass("hidden");
            loadJS("https://fast.wistia.com/embed/medias/" + wistia + ".jsonp");
            _wq.push({
              id: wistia,
              onReady: function (video) {
                video.play();
              },
            });
          };
          if (typeof window._wq === "undefined") {
            loadJS(
              "https://fast.wistia.com/assets/external/E-v1.js",
              onceLoaded
            );
          } else {
            onceLoaded();
          }
        });
      }
    });
    function unveil() {
      var inview = images.filter(function () {
        var $e = $(this);
        if ($e.is(":hidden")) return;
        var wt = $w.scrollTop(),
          wb = wt + $w.height(),
          et = $e.offset().top,
          eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }
    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);
    unveil();
    return this;
  };
})(window.jQuery || window.Zepto);
