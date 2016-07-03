"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("dummy/components/simple-chart",["exports","ember","ember-highcharts-mixin"],function(e,t,a){e["default"]=t["default"].Component.extend(a["default"],{series:[{name:"Jane",data:[1,0,4]},{name:"John",data:[5,7,3]}],options:{chart:{type:"bar"},title:{text:"Fruit Consumption"},xAxis:{categories:["Apples","Bananas","Oranges"]},yAxis:{title:{text:"Fruit eaten"}}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/mixins/highcharts-mixin",["exports","ember-highcharts-mixin/mixins/highcharts-mixin"],function(e,t){e["default"]=t["default"]}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("about")}),e["default"]=n}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({title:"Highcharts Mixin"})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/about",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/about.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/simple-chart",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/simple-chart.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:46,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("header");e.setAttribute(a,"class","navigation"),e.setAttribute(a,"role","banner");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","navigation-wrapper");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"class","logo"),e.setAttribute(r,"href","/");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"alt","ember-highcharts-mixin"),e.setAttribute(i,"src","images/logo.svg"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("span"),d=e.createTextNode("Ember Highcharts Mixin");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("nav");e.setAttribute(r,"role","navigation");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("ul");e.setAttribute(i,"class","navigation-menu show"),e.setAttribute(i,"id","js-navigation-menu");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.setAttribute(d,"class","nav-link");var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"class","navigation-link"),e.setAttribute(l,"href","#features"),e.setAttribute(l,"id","feature-link");var o=e.createTextNode("Examples");e.appendChild(l,o),e.appendChild(d,l);var l=e.createTextNode("\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li");e.setAttribute(d,"class","nav-link login-li");var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"href","http://github.com/seansellek/ember-highcharts-mixin");var o=e.createTextNode("View on GitHub");e.appendChild(l,o),e.appendChild(d,l);var l=e.createTextNode("\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","intro");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","tagline-container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1");e.setAttribute(r,"class","tagline");var i=e.createTextNode("Easily build Highcharts components for your Ember app.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","outer-container");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"alt","ember-highcharts-mixin"),e.setAttribute(i,"src","images/screenshot-f90b9772865286349943d9ab6f5d7231.png"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","content-container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","outer-container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","for-left");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("h2");e.setAttribute(i,"class","perfect-for"),e.setAttribute(i,"id","features");var d=e.createTextNode("See some examples:");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","features-container");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h3");e.setAttribute(r,"class","feature-heading");var i=e.createTextNode("Your First Chart");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("iframe");e.setAttribute(r,"width","100%"),e.setAttribute(r,"height","500"),e.setAttribute(r,"src","//jsfiddle.net/yajvrext/embedded/js,html,result/dark/"),e.setAttribute(r,"allowfullscreen","allowfullscreen"),e.setAttribute(r,"frameborder","0"),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","features-container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h3");e.setAttribute(r,"class","feature-heading");var i=e.createTextNode("Dynamic Redrawing");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("iframe");e.setAttribute(r,"width","100%"),e.setAttribute(r,"height","500"),e.setAttribute(r,"src","//jsfiddle.net/flipandtwist/4704ezuv/2/embedded/js,html,result/dark/"),e.setAttribute(r,"allowfullscreen","allowfullscreen"),e.setAttribute(r,"frameborder","0"),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("footer");e.setAttribute(n,"class","footer"),e.setAttribute(n,"role","contentinfo");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1");e.setAttribute(r,"class","tagline");var i=e.createTextNode("Made with ♡ by ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","http://seansellek.com");var d=e.createTextNode("Sean Sellek");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(" \n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-highcharts-mixin",version:"0.0.2+c8245368"});