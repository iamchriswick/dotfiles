this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["mtAcceptDeclineModal.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"modal__icon\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":10,"column":37},"end":{"line":10,"column":47}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <button class=\"mt-btn mt-decline-button\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"declineButtonText") || (depth0 != null ? lookupProperty(depth0,"declineButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"declineButtonText","hash":{},"data":data,"loc":{"start":{"line":20,"column":87},"end":{"line":20,"column":110}}}) : helper))) != null ? stack1 : "")
    + "</button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <button\n                class=\"modal__close\"\n                aria-label=\"Close modal\"\n                data-micromodal-close\n            ></button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"modal mt-micro-modal mt-micro-modal--accept-decline-modal\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\">\n        <div\n            class=\"modal__container\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":37}}}) : helper))) != null ? stack1 : "")
    + "-title\"\n        >\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "\n            <div class=\"modal__content\">\n                <header>\n                    <h2 id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":28},"end":{"line":15,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":15,"column":44},"end":{"line":15,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n                </header>\n                <div class=\"modal__text\" id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":45},"end":{"line":17,"column":53}}}) : helper))) != null ? stack1 : "")
    + "-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":17,"column":63},"end":{"line":17,"column":73}}}) : helper))) != null ? stack1 : "")
    + "</div>\n                <footer id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-footer\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"declineButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":21,"column":27}}})) != null ? stack1 : "")
    + "                    <button class=\"mt-btn mt-btn--primary mt-accept-button\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"acceptButtonText") || (depth0 != null ? lookupProperty(depth0,"acceptButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"acceptButtonText","hash":{},"data":data,"loc":{"start":{"line":22,"column":98},"end":{"line":22,"column":120}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                </footer>\n            </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"closeArrow") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["mtAcceptDeclineTextModal.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"modal__text\" id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":45},"end":{"line":14,"column":53}}}) : helper))) != null ? stack1 : "")
    + "-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":14,"column":63},"end":{"line":14,"column":73}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"modal mt-micro-modal mt-micro-modal--accept-decline-text-modal\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\">\n        <div\n            class=\"modal__container\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":37}}}) : helper))) != null ? stack1 : "")
    + "-title\"\n        >\n            <div class=\"modal__content\">\n                <header>\n                    <h2 id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":11,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":44},"end":{"line":11,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n                </header>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "                <footer id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-footer\" class=\"mt-no-btn-bar\">\n                    <button class=\"mt-btn mt-no-btn mt-btn--gray mt-decline-button\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"declineButtonText") || (depth0 != null ? lookupProperty(depth0,"declineButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"declineButtonText","hash":{},"data":data,"loc":{"start":{"line":17,"column":106},"end":{"line":17,"column":129}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                    <button class=\"mt-btn mt-no-btn mt-btn--primary mt-accept-button\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"acceptButtonText") || (depth0 != null ? lookupProperty(depth0,"acceptButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"acceptButtonText","hash":{},"data":data,"loc":{"start":{"line":18,"column":108},"end":{"line":18,"column":130}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                </footer>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["mtModalActivation.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-activation\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <img src=\"https://s3-eu-west-1.amazonaws.com/mailtrack-crx/mailtrack-preview-image_2x.png\" alt=\"\" width=\"400\">\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <h2><span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":34},"end":{"line":10,"column":42}}}) : helper)))
    + "</span></h2>\n\n                        <p class=\"\">\n                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"activateUrl") || (depth0 != null ? lookupProperty(depth0,"activateUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activateUrl","hash":{},"data":data,"loc":{"start":{"line":13,"column":37},"end":{"line":13,"column":52}}}) : helper)))
    + "\" class=\"btn btn-lg btn-primary purple mt-ga-event\" data-activate data-mt-ga-category=\"Activation-Popup\" data-mt-ga-action=\"Activate\" target=\"_blank\">\n                                "
    + alias4(((helper = (helper = lookupProperty(helpers,"activate") || (depth0 != null ? lookupProperty(depth0,"activate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activate","hash":{},"data":data,"loc":{"start":{"line":14,"column":32},"end":{"line":14,"column":44}}}) : helper)))
    + "\n                            </a>\n                            <a href=\"#\" class=\"btn btn-lg btn-text mt-ga-event\" data-mt-cancel data-mt-ga-category=\"Activation-Popup\" data-mt-ga-action=\"Cancel\">\n                                "
    + alias4(((helper = (helper = lookupProperty(helpers,"cancel") || (depth0 != null ? lookupProperty(depth0,"cancel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancel","hash":{},"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":17,"column":42}}}) : helper)))
    + "\n                            </a>\n                        </p>\n\n                        <p class=\"terms\">\n                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"disclaimer") || (depth0 != null ? lookupProperty(depth0,"disclaimer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":22,"column":28},"end":{"line":22,"column":42}}}) : helper)))
    + "\n                            <a target=\"_blank\" class=\"terms mt-ga-event\" data-mt-ga-category=\"Activation-Popup\" data-mt-ga-action=\"See Terms\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"termsUrl") || (depth0 != null ? lookupProperty(depth0,"termsUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"termsUrl","hash":{},"data":data,"loc":{"start":{"line":23,"column":148},"end":{"line":23,"column":160}}}) : helper)))
    + "\">\n                                "
    + alias4(((helper = (helper = lookupProperty(helpers,"terms") || (depth0 != null ? lookupProperty(depth0,"terms") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"terms","hash":{},"data":data,"loc":{"start":{"line":24,"column":32},"end":{"line":24,"column":41}}}) : helper)))
    + "\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalFallback.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-fallback\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <span class=\"mt-sprite mt-logo-icon\"></span>\n                    <h4 class=\"modal-title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"fallbackTitle") || (depth0 != null ? lookupProperty(depth0,"fallbackTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fallbackTitle","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":61}}}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"fallbackText") || (depth0 != null ? lookupProperty(depth0,"fallbackText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fallbackText","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":41}}}) : helper))) != null ? stack1 : "")
    + "</p>\n                </div>\n                <div class=\"modal-footer\"></div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalIframe.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-iframe\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <iframe frameBorder=\"0\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":11,"column":51},"end":{"line":11,"column":60}}}) : helper)))
    + "\" height=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":11,"column":70},"end":{"line":11,"column":80}}}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":11,"column":87},"end":{"line":11,"column":94}}}) : helper)))
    + "\"></iframe>\n                </div>\n                <div class=\"modal-footer\"></div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalIncompatibleExtension.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                                    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-incompatible-extension\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <span class=\"mt-sprite mt-logo-icon\"></span>\n                    <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":53}}}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                      <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"explanation") || (depth0 != null ? lookupProperty(depth0,"explanation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"explanation","hash":{},"data":data,"loc":{"start":{"line":14,"column":25},"end":{"line":14,"column":42}}}) : helper))) != null ? stack1 : "")
    + "</p>\n                    </div>\n                    <div class=\"panel panel-info\">\n                      <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">Instructions</h3>\n                      </div>\n                      <div class=\"panel-body\">\n                        <ol class=\"steps\">\n                            <li>\n                                <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"step1Title") || (depth0 != null ? lookupProperty(depth0,"step1Title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1Title","hash":{},"data":data,"loc":{"start":{"line":23,"column":36},"end":{"line":23,"column":50}}}) : helper)))
    + "</h4>\n                                <h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"step1ListTitle") || (depth0 != null ? lookupProperty(depth0,"step1ListTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1ListTitle","hash":{},"data":data,"loc":{"start":{"line":24,"column":36},"end":{"line":24,"column":54}}}) : helper)))
    + "</h5>\n                                <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"extensions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":34},"end":{"line":28,"column":43}}})) != null ? stack1 : "")
    + "                                </ul>\n                                <p>\n                                  <a\n                                      href=\"chrome://extensions\"\n                                      aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"step1CallToAction") || (depth0 != null ? lookupProperty(depth0,"step1CallToAction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1CallToAction","hash":{},"data":data,"loc":{"start":{"line":33,"column":50},"end":{"line":33,"column":71}}}) : helper)))
    + "\"\n                                      target=\"_blank\"\n                                      class=\"btn btn-primary btn-sm  mt-modal-incompatible-extension-open-chrome-extensions mt-ga-event\"\n                                      data-mt-ga-category=\"Incompatible-Extension-Popup\"\n                                      data-mt-ga-action=\"Go to Extensions settings\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"step1CallToAction") || (depth0 != null ? lookupProperty(depth0,"step1CallToAction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1CallToAction","hash":{},"data":data,"loc":{"start":{"line":37,"column":84},"end":{"line":37,"column":105}}}) : helper)))
    + "</a>\n                                </p>\n                            </li>\n                            <li>\n                                <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"step2Title") || (depth0 != null ? lookupProperty(depth0,"step2Title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step2Title","hash":{},"data":data,"loc":{"start":{"line":41,"column":36},"end":{"line":41,"column":50}}}) : helper)))
    + "</h4>\n                                <p>\n                                  <a href=\"#\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"step2CallToAction") || (depth0 != null ? lookupProperty(depth0,"step2CallToAction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step2CallToAction","hash":{},"data":data,"loc":{"start":{"line":43,"column":58},"end":{"line":43,"column":79}}}) : helper)))
    + "\" class=\"btn btn-primary btn-sm  mt-modal-incompatible-extension-refresh-gmail mt-ga-event\" data-mt-ga-category=\"Incompatible-Extension-Popup\" data-mt-ga-action=\"Refresh Gmail\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"step2CallToAction") || (depth0 != null ? lookupProperty(depth0,"step2CallToAction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step2CallToAction","hash":{},"data":data,"loc":{"start":{"line":43,"column":256},"end":{"line":43,"column":277}}}) : helper)))
    + "</a>\n                                </p>\n                            </li>\n                        </ol>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <p class=\"do-not-show\">\n                        <a href=\"#\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"doNotUse") || (depth0 != null ? lookupProperty(depth0,"doNotUse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"doNotUse","hash":{},"data":data,"loc":{"start":{"line":52,"column":69},"end":{"line":52,"column":81}}}) : helper)))
    + "\" class=\"dismiss-link mt-modal-incompatible-extension-disable mt-ga-event\" data-mt-ga-category=\"Incompatible-Extension-Popup\" data-mt-ga-action=\"Do not show me again\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"doNotShow") || (depth0 != null ? lookupProperty(depth0,"doNotShow") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"doNotShow","hash":{},"data":data,"loc":{"start":{"line":52,"column":248},"end":{"line":52,"column":261}}}) : helper)))
    + "</a>\n                    </p>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalIncompatibleLabs.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                                    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-incompatible-labs\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <span class=\"mt-sprite mt-logo-icon\"></span>\n                    <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":53}}}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                      <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"explanation") || (depth0 != null ? lookupProperty(depth0,"explanation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"explanation","hash":{},"data":data,"loc":{"start":{"line":14,"column":25},"end":{"line":14,"column":42}}}) : helper))) != null ? stack1 : "")
    + "</p>\n                    </div>\n\n\n                    <div class=\"panel panel-info\">\n                      <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">Instructions</h3>\n                      </div>\n                      <div class=\"panel-body\">\n                        <ol class=\"steps\">\n                            <li>\n                                <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"step1Title") || (depth0 != null ? lookupProperty(depth0,"step1Title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1Title","hash":{},"data":data,"loc":{"start":{"line":25,"column":36},"end":{"line":25,"column":50}}}) : helper)))
    + "</h4>\n                                <h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"step1ListTitle") || (depth0 != null ? lookupProperty(depth0,"step1ListTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1ListTitle","hash":{},"data":data,"loc":{"start":{"line":26,"column":36},"end":{"line":26,"column":54}}}) : helper)))
    + "</h5>\n                                <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"labs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":34},"end":{"line":30,"column":43}}})) != null ? stack1 : "")
    + "                                </ul>\n                                <p>\n                                  <a href=\"https://mail.google.com/mail/#settings/general\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"step1CallToAction") || (depth0 != null ? lookupProperty(depth0,"step1CallToAction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1CallToAction","hash":{},"data":data,"loc":{"start":{"line":33,"column":103},"end":{"line":33,"column":124}}}) : helper)))
    + "\" target=\"_blank\" class=\"btn btn-primary mt-ga-event\" data-mt-ga-category=\"Incompatible-Labs-Popup\" data-mt-ga-action=\"Go to Extensions settings\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"step1CallToAction") || (depth0 != null ? lookupProperty(depth0,"step1CallToAction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"step1CallToAction","hash":{},"data":data,"loc":{"start":{"line":33,"column":270},"end":{"line":33,"column":291}}}) : helper)))
    + "</a>\n                                </p>\n                            </li>\n                        </ol>\n                      </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <p class=\"do-not-show\">\n                        <a href=\"#\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"doNotUse") || (depth0 != null ? lookupProperty(depth0,"doNotUse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"doNotUse","hash":{},"data":data,"loc":{"start":{"line":43,"column":69},"end":{"line":43,"column":81}}}) : helper)))
    + "\" class=\"dismiss-link mt-modal-incompatible-labs-disable mt-ga-event\" data-mt-ga-category=\"Incompatible-Labs-Popup\" data-mt-ga-action=\"Do not show me again\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"doNotShow") || (depth0 != null ? lookupProperty(depth0,"doNotShow") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"doNotShow","hash":{},"data":data,"loc":{"start":{"line":43,"column":238},"end":{"line":43,"column":251}}}) : helper)))
    + "</a>\n                    </p>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalLogin.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"modal mt-micro-modal mt-micro-modal--login-modal\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\">\n        <div\n            class=\"modal__container\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":37}}}) : helper))) != null ? stack1 : "")
    + "-title\"\n        >\n            <div class=\"modal__content\">\n                <div class=\"modal__text\" id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":53}}}) : helper))) != null ? stack1 : "")
    + "-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":63},"end":{"line":10,"column":73}}}) : helper))) != null ? stack1 : "")
    + "</div>\n                <footer id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":11,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-footer\">\n                    <button class=\"mt-btn mt-accept-button\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":12,"column":60},"end":{"line":12,"column":72}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                </footer>\n            </div>\n            <button\n                class=\"modal__close\"\n                aria-label=\"Close modal\"\n                data-micromodal-close\n            ></button>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["mtModalReact.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"modal mt-micro-modal "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"modalClass") || (depth0 != null ? lookupProperty(depth0,"modalClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modalClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":63}}}) : helper))) != null ? stack1 : "")
    + "\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\">\n        <div\n            class=\"modal__container\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":37}}}) : helper))) != null ? stack1 : "")
    + "-title\"\n        >\n            <div class=\"modal__content\"></div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalRequestListsPermissions.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"modal__icon\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":12,"column":41},"end":{"line":12,"column":51}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <button\n                class=\"modal__close\"\n                aria-label=\"Close modal\"\n                data-micromodal-close\n            ></button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"modal mt-micro-modal mt-micro-modal--lists-permissions\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\">\n        <div\n            class=\"modal__container\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":37}}}) : helper))) != null ? stack1 : "")
    + "-title\"\n        >          \n            <div class=\"mt-micro-modal--lists-permissions__background\"></div>\n            <div class=\"modal__content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":13,"column":23}}})) != null ? stack1 : "")
    + "\n                <header>\n                    <h2 id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n                </header>\n                <div class=\"modal__text\" id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":45},"end":{"line":18,"column":53}}}) : helper))) != null ? stack1 : "")
    + "-content\">\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"subtitle") || (depth0 != null ? lookupProperty(depth0,"subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n                <div class=\"modal__permissions-text\" id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":21,"column":57},"end":{"line":21,"column":65}}}) : helper))) != null ? stack1 : "")
    + "-text\">\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n\n                <footer id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":25,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-footer\">\n                    <button class=\"mt-btn mt-decline-button\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"cancel") || (depth0 != null ? lookupProperty(depth0,"cancel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancel","hash":{},"data":data,"loc":{"start":{"line":26,"column":83},"end":{"line":26,"column":95}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                    <button class=\"mt-btn mt-btn--primary mt-accept-button\" name=\"openAuthWindow\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"enable") || (depth0 != null ? lookupProperty(depth0,"enable") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"enable","hash":{},"data":data,"loc":{"start":{"line":27,"column":120},"end":{"line":27,"column":132}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                </footer>\n            </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"closeArrow") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":37,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalTitleBodyButton.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <button type=\"button\" name=\"modalCancelButton\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cancelButtonText") || (depth0 != null ? lookupProperty(depth0,"cancelButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelButtonText","hash":{},"data":data,"loc":{"start":{"line":18,"column":104},"end":{"line":18,"column":124}}}) : helper)))
    + "\" class=\"btn mt-button\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cancelButtonText") || (depth0 != null ? lookupProperty(depth0,"cancelButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelButtonText","hash":{},"data":data,"loc":{"start":{"line":18,"column":169},"end":{"line":18,"column":189}}}) : helper)))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-title-body-button "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"modalClass") || (depth0 != null ? lookupProperty(depth0,"modalClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modalClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":70}}}) : helper))) != null ? stack1 : "")
    + "\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content text-center\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" name=\"modalDismissButton\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <span class=\"mt-sprite mt-logo-icon\"></span>\n                    <h4 class=\"modal-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":33}}}) : helper))) != null ? stack1 : "")
    + "</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" name=\"modalMainButton\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":16,"column":98},"end":{"line":16,"column":108}}}) : helper)))
    + "\" class=\"btn btn-primary mt-button mt-accept-button\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":16,"column":182},"end":{"line":16,"column":192}}}) : helper)))
    + "</button>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"cancelButtonText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":19,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalTitleBodyButtonLink.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-title-body-button-link\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content text-center\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <span class=\"mt-sprite mt-logo-icon\"></span>\n                    <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":53}}}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":33}}}) : helper))) != null ? stack1 : "")
    + "</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":16,"column":75},"end":{"line":16,"column":85}}}) : helper)))
    + "\" class=\"btn btn-primary mt-button\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":16,"column":121},"end":{"line":16,"column":131}}}) : helper)))
    + "</button>\n                    <a href=\"#\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":17,"column":65},"end":{"line":17,"column":73}}}) : helper)))
    + "\" class=\"mt-link dismiss-link\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":17,"column":104},"end":{"line":17,"column":112}}}) : helper)))
    + "</a>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalTitleBodyListButton.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                            <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <button type=\"button\" name=\"modalCancelButton\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cancelButtonText") || (depth0 != null ? lookupProperty(depth0,"cancelButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelButtonText","hash":{},"data":data,"loc":{"start":{"line":23,"column":104},"end":{"line":23,"column":124}}}) : helper)))
    + "\" class=\"btn mt-button\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cancelButtonText") || (depth0 != null ? lookupProperty(depth0,"cancelButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelButtonText","hash":{},"data":data,"loc":{"start":{"line":23,"column":169},"end":{"line":23,"column":189}}}) : helper)))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal mt-modal-title-body-list-button\">\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content text-center\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" name=\"modalDismissButton\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <span class=\"mt-sprite mt-logo-icon\"></span>\n                    <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":53}}}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":33}}}) : helper))) != null ? stack1 : "")
    + "</p>\n                    <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"bullets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":24},"end":{"line":17,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" name=\"modalMainButton\" data-dismiss=\"modal\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":21,"column":98},"end":{"line":21,"column":108}}}) : helper)))
    + "\" class=\"btn btn-primary mt-button\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":21,"column":165},"end":{"line":21,"column":175}}}) : helper)))
    + "</button>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"cancelButtonText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":24,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtModalUpgradeNeeded.tmpl"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tw-bs mt-modal\">\n    <div class=\"modal mt-modal-upgrade-needed\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <div class=\"mt-modal-header-icon\">\n                        <svg class=\"mt-svg-icon\">\n                            <use xlink:href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":55}}}) : helper)))
    + "\" />\n                        </svg>\n                    </div>\n                </div>\n                <div class=\"modal-body\">\n                    <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":55}}}) : helper)))
    + "</h4>\n                    <div class=\"modal-text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":17,"column":44},"end":{"line":17,"column":56}}}) : helper))) != null ? stack1 : "")
    + "</div>\n                    <div>\n                        <a\n                                href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"upgradeUrl") || (depth0 != null ? lookupProperty(depth0,"upgradeUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upgradeUrl","hash":{},"data":data,"loc":{"start":{"line":20,"column":38},"end":{"line":20,"column":54}}}) : helper)))
    + "\"\n                                target=\"_blank\"\n                                class=\"btn btn-upgrade btn-sm mt-ga-event\"\n                                data-mt-ga-category=\"Upgrade-Popup\"\n                                data-mt-ga-action=\"Go to Upgrade\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"upgradeText") || (depth0 != null ? lookupProperty(depth0,"upgradeText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upgradeText","hash":{},"data":data,"loc":{"start":{"line":24,"column":66},"end":{"line":24,"column":83}}}) : helper)))
    + "</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mtSimpleModal.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"modal__icon\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <button\n                class=\"modal__close\"\n                aria-label=\"Close modal\"\n                data-micromodal-close\n            ></button>\n            \n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"modal mt-micro-modal mt-micro-modal--simple-modal\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\">\n        <div\n            class=\"modal__container\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":37}}}) : helper))) != null ? stack1 : "")
    + "-title\"\n        >\n            <div class=\"modal__content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":12,"column":23}}})) != null ? stack1 : "")
    + "                <header>\n                    <h2 id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":28},"end":{"line":14,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":44},"end":{"line":14,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n                </header>\n                <div class=\"modal__text\" id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":45},"end":{"line":16,"column":53}}}) : helper))) != null ? stack1 : "")
    + "-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":16,"column":63},"end":{"line":16,"column":73}}}) : helper))) != null ? stack1 : "")
    + "</div>\n                <footer id=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":36}}}) : helper))) != null ? stack1 : "")
    + "-footer\">\n                    <button class=\"mt-btn mt-btn--primary mt-accept-button\" data-micromodal-close>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":18,"column":98},"end":{"line":18,"column":110}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                </footer>\n            </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"closeArrow") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":29,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});