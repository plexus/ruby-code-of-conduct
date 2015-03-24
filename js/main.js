// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// unfortunately this breaks links from pages other then /,
// e.g. links on /conferences, so I'm commenting it out for now
//
// $(function() {
//   $('.header a:not(.external)').on('click', function(e) {
//     e.preventDefault();
//     var to = $(this).attr('href');
//     $('html, body').animate({scrollTop: $(to).offset().top }, '5000');
//   });
// });

var Confs = function(selector, urls) {
  this.conferences = $(selector + ' tbody');
  this.footnotes = $(selector + ' tfoot ol');
  this.fetch(urls, $.proxy(this.render, this));
};

Confs.data = [
  {
    name: "Ruby Conf Australia",
    policies: [
      { text: "CoC", url: "http://ruby.org.au/code-of-conduct.html" },
      { text: "Policies", url: "http://rubyconf.org.au/policies" }
    ]
  }, {
    name: "Rubyfuza",
    policies: [{ text: "CoC", url: "http://rubyfuza.org/coc" }]
  }, {
    name: "MountainWest RubyConf",
    policies: [{ text: "CoC", url: "http://mtnwestrubyconf.org" }]
  }, {
    name: "Los Angeles Ruby Conference",
    policies: [{ text: "CoC", url: "http://larubyconf.com/code-of-conduct" }]
  }, {
    name: "Big Ruby",
    policies: [{ text: "CoC", url: "http://www.bigrubyconf.com/code-of-conduct.html" }]
  }, {
    name: "RubySauna",
    policies: [{ text: "CoC", url: "http://www.rubysauna.org/conduct" }]
  }, {
    name: "Ruby on Ales",
    policies: [{ text: "CoC", url: "http://onales.com/code-of-conduct" }]
  }, {
    name: "RubyConf India",
    policies: [{ text: "CoC", url: "http://rubyconfindia.org/2014/code.html" }]
  }, {
    name: "RubyConf Philippines",
    policies: [{ text: "CoC", url: "http://rubyconf.ph/#codeofconduct" }]
  }, {
    name: "RailsConf",
    policies: [{ text: "Policies", url: "http://www.railsconf.com/policies" }]
  }, {
    name: "Abril Pro Ruby",
    policies: [{ text: "CoC", url: "http://abrilproruby.com/en/code-of-conduct" }]
  }, {
    name: "Scottish Ruby Conf",
    policies: [{ text: "CoC", url: "http://2014.scottishrubyconference.com/conduct" }]
  }, {
    name: "RubyConf Uruguay",
    policies: [{ text: "CoC", url: "http://www.rubyconfuruguay.org/en/conference_editions/8/pages/1" }]
  }, {
    name: "EuRuKo",
    policies: [{ text: "CoC", url: "http://euruko2013.org/codeofconduct" }]
  }, {
    name: "Burlington Ruby Conference",
    policies: [
      { text: "CoC", url: "http://burlingtonrubyconference.com/conduct.html" },
      { text: "Diversity", url: "http://burlingtonrubyconference.com/diversity.html" }
    ]
  }, {
    name: "Steel City Ruby",
    policies: [{ text: "Policies", url: "http://steelcityruby.org/policies.html" }]
  }, {
    name: "Madison Ruby Conference",
    policies: [{ text: "Planned" }]
  }, {
    name: "Frozen Rails",
    policies: [{ text: "CoC", url: "http://2014.frozenrails.eu/code" }]
  }, {
    name: "Barcelona Ruby Conf",
    policies: [{ text: "CoC", url: "http://www.baruco.org/code_of_conduct" }]
  }, {
    name: "Golden Gate Ruby Conference",
    policies: [{ text: "CoC", url: "http://gogaruco.com/#conduct-heading" }]
  }, {
    name: "Ruby DCamp",
    policies: [{ text: "CoC", url: "http://rubydcamp.org/coc" }]
  }, {
    name: "RubyConf",
    policies: [{ text: "Policies", url: "http://rubyconf.org/policies" }]
  }, {
    name: "LoneStarRuby",
    policies: [{ text: "Policies", url: "http://www.lonestarruby.org/2013/lsrc#legal-information" }]
  }, {
    name: "GoRuCo",
    policies: [{ text: "CoC", url: "http://goruco.com/code-of-conduct" }]
  }, {
    name: "Nickel City Ruby Conference",
    policies: [{ text: "CoC", url: "https://github.com/nickelcityruby/code-of-conduct/blob/master/code_of_conduct.md" }]
  }, {
    name: "Cascadia Ruby",
    policies: [{ text: "Policies", url: "http://cascadiaruby.com/policies" }]
  }, {
    name: "RubyNation",
    policies: [{ text: "CoC", url: "http://www.rubynation.org/code_of_conduct" }]
  }, {
    name: "Ruby Lugdunum",
    policies: [{ text: "Policies", url: "http://2013.rulu.eu/policies" }]
  }, {
    name: "WindyCityRails",
    policies: [{ text: "CoC", url: "http://www.windycityrails.org/code-of-conduct" }]
  }, {
    name: "Garden City RubyConf",
    policies: [{ text: "CoC", url: "http://www.gardencityruby.org/code-of-conduct" }]
  }, {
    name: "RubyConf Taiwan",
    policies: [{ text: "CoC", url: "http://rubyconf.tw/2014/#coc" }]
  }, {
    name: "RailsIsrael",
    policies: [{ text: "Planned", url: "http://railsisrael2014.events.co.il/pages/coc" }]
  }, {
    name: "RailsClub",
    policies: [{ text: "CoC", url: "http://railsclub.ru/code_of_conduct?locale=en" }]
  }, {
    name: "RubyConf Argentina",
    policies: [{
      text: "Other",
      url: "http://rubyconfargentina.org/code_of_conduct.html"
    }]
  }, {
    name: "eurucamp",
    policies: [{ text: "CoC", url: "http://2014.eurucamp.org/policies" }]
  }, {
    name: "Tropical Ruby",
    policies: [{ text: "CoC", url: "http://tropicalrb.com/en/code-of-conduct/"}]
  }, {
    name: "Bath Ruby Conference",
    policies: [{ text: "CoC", url: "http://2015.bathruby.org/code-of-conduct.html"}]
  }, {
    name: "RubyConfLT",
    policies: [{ text: "CoC", url: "http://confcodeofconduct.com/"}]
  }, {
    name: "Ancient City Ruby",
    policies: [{ text: "Conference Policy", url: "http://www.ancientcityruby.com/conference_policy/"}]
  }, {
    name: "RubyConf Kenya",
    policies: [{ text: "CoC", url: "http://ruby-conf-ke.nairuby.org/2015#conduct"}]
  }, {
    name: "RedDotRubyConf",
    policies: [{ text: "CoC", url: "http://www.reddotrubyconf.com/#code-of-conduct"}]
  }, {
    name: "Brighton Ruby",
    policies: [{ text: "CoC", url: "http://brightonruby.com/misc/code-of-conduct"}]
  }, {
    name: "Rocky Mountain Ruby Conference",
    policies: [{ text: "CoC", url: "http://www.rockymtnruby.com/#conduct"}]
  }, {
    name: "JRubyConf EU",
    policies: [{ text: "CoC", url: "http://2015.eurucamp.org/policies"}]
  }, {
    name: "RubyKaigi",
    policies: [{ text: "Anti-Harassment Policy", url: "http://rubykaigi.org/2014/anti-harassment-policy"}]
  }, {
    name: "ArrrrCamp",
    policies: [{ text: "CoC", url: "http://2014.arrrrcamp.be/coc/"}]
  }, {
    name: "RubyConf Portugal",
    policies: [{ text: "CoC", url: "https://github.com/groupbuddies/rubyconf-pt/blob/master/_includes/code-of-conduct.md"}]
  }, {
    name: "Keep Ruby Weird",
    policies: [{ text: "CoC", url: "http://keeprubyweird.com/code-of-conduct.html"}]
  }, {
    name: "Ruby devroom at FOSDEM",
    policies: [{ text: "CoC", url: "http://rubyberlin.github.io/code-of-conduct/"}]
  }, {
    name: "ROSSConf Vienna",
    policies: [{ text: "CoC", url: "http://www.rossconf.io/#coc"}]
  }
];
Confs.find = function(conf) {
  return $.grep(Confs.data, function(c) { if(conf.name == c.name || conf.twitter == c.twitter) return c; })[0];
}

Confs.prototype = {
  fetch: function(urls, callback) {
    var requests = $.map(urls, function(url) { return $.get(url); });
    var confs = [];

    $.when.apply(this, requests).then(function() {
      $.each(arguments, function() {
        var yaml=window.atob(this[0].content.replace(/\s/g, ''));
        yaml=yaml.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uD800-\uDFFF\uFFFE\uFFFF]/g, ''); //Remove any "non printable characters" which jsyaml would choke on
        confs = confs.concat(jsyaml.safeLoad(yaml));
      });

      $.each(confs, function() {
        var conf = Confs.find(this);
        if(conf) {
          this.policies = conf.policies;
        }
      });

      callback.call(this, confs);
    });
  },
  render: function(data, state) {
    $.each(data, $.proxy(function(ix, row) { new Conf(this, row).render(); }, this));
  }
};

var Conf = function(list, data) {
  this.list = list;
  this.data = data;
  return this;
}
Conf.prototype = {
  render: function() {
    if(!this.data.policies) {
      console.log('skipping ' + this.data.name, this.data);
      return;
    }

    var row = $('<tr></tr>');
    row.append('<td>' + this.name() + '</td>');
    row.append('<td>' + this.data.dates + '</td>');
    row.append('<td>' + this.twitter() + '</td>');
    row.append('<td>' + this.policies() + '</td>');
    this.list.conferences.append(row);

    $.each(this.data.policies, $.proxy(function(ix, policy) {
      if(policy.note) {
        this.list.footnotes.append($('<li>' + policy.note + '</li>'));
      }
    }, this));
  },
  name: function() {
    return '<a href="' + this.data.url + '">' + this.data.name + '</a>';
  },
  twitter: function() {
    return '<a href="http://twitter.com/' + this.data.twitter + '">@' + this.data.twitter + '</a>';
  },
  policies: function() {
    return $.map(this.data.policies, $.proxy(function(data) {
      return this.policy(data);
    }, this)).join(', ');
  },
  policy: function(data) {
    var policy;
    if(data.url) {
      policy = '<a href="' + data.url + '">' + this.text(data) + '</a>';
    } else {
      policy = this.text(data);
    }
    if(data.note) {
      var num = $('li', this.list.footnotes).length + 1;
      policy = policy + ' <a href="#fn-' + num + '" class="fn">' + num + '</a>';
    }
    return policy;
  },
  text: function(data) {
    var text;
    if(data.text) {
      text = data.text;
    } else if(data.url) {
      text = 'Yes';
    }
    return text;
  }
}

$(function() {
  var selector = '#conferences';
  if($(selector).length > 0) {
    var urls = [
      'https://api.github.com/repos/ruby-conferences/ruby-conferences-site/contents/data/current.yml',
      'https://api.github.com/repos/ruby-conferences/ruby-conferences-site/contents/data/past.yml'
    ];
    new Confs('#conferences', urls);
  }
});
