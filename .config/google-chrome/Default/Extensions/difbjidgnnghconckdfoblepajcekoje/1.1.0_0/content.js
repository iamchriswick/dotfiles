var homerun_content_mappings = {
    "version": "1.0.3",
    "sites": {
        "behance.net": {
            "activator": ".profile-page",
            "button": {
                "container": "#profile-info",
                "insertBefore": "#profile-info #profile-display-name",
                "css": {
                    "top": "-3px"
                }
            },
            "mappings": {
                "photo": {
                    "selector": "#profile-image",
                    "attr": "src"
                },
                "full_name": "#profile-display-name",
                "city": ".profile-location-link",
                "website": "#profile-website",
                "instagram": {
                    "selector": ".ss-social[title=\"Instagram\"]",
                    "attr": "href"
                },
                "facebook": {
                    "selector": ".ss-social[title=\"Facebook\"]",
                    "attr": "href"
                },
                "linkedin": {
                    "selector": ".ss-social[title=\"LinkedIn\"]",
                    "attr": "href"
                },
                "twitter": {
                    "selector": ".ss-social[title=\"Twitter\"]",
                    "attr": "href"
                },
                "behance": "_self"
            }
        },
        "dribbble.com": {
            "activator": "body#profile",
            "button": {
                "container": ".profile-essentials",
                "insertBefore": ".profile-essentials h2",
                "css": {
                    "display": "inline-block",
                    "float": "none",
                    "top": "8px"
                }
            },
            "mappings": {
                "photo": {
                    "selector": "img.photo",
                    "attr": "src"
                },
                "full_name": ".profile-info h2 > a",
                "city": ".profile-info .location",
                "dribbble": "_self"
            }
        },
        "facebook.com": {
            "activator": "#fbProfileCover h1 span a",
            "button": {
                "container": "#fbProfileCover h1 span",
                "insertBefore": "#fbProfileCover h1 span a",
                "css": {
                    "top": "-3px"
                }
            },
            "mappings": {
                "photo": {
                    "selector": ".profilePic",
                    "attr": "src"
                },
                "full_name": "#fb-timeline-cover-name",
                "facebook": "_self"
            }
        },
        "github.com": {
            "activator": ".page-profile",
            "button": {
                "container": ".vcard-names",
                "insertBefore": ".vcard-names .vcard-fullname"
            },
            "mappings": {
                "photo": {
                    "selector": ".vcard-avatar img",
                    "attr": "src"
                },
                "full_name": ".vcard-fullname",
                "email": ".vcard-detail .email",
                "city": "[itemprop=\"homeLocation\"]",
                "website": "[itemprop=\"url\"]",
                "github": "_self"
            },
            "test_url": "https://github.com/bobkreefft",
            "expected_test_results": {
                "photo": "https://avatars0.githubusercontent.com/u/951550?v=3&s=460",
                "full_name": "Bob"
            }
        },
        "linkedin.com-oldest": {
            "activator": "#profile",
            "button": {
                "container": "#name h1"
            },
            "mappings": {
                "photo": {
                    "selector": ".profile-picture img",
                    "attr": "src"
                },
                "full_name": ".full-name",
                "email": "#email li",
                "phone_number": "#phone li",
                "city": "#location .locality a",
                "linkedin": ".view-public-profile",
                "twitter": "#twitter li"
            }
        },
        "linkedin.com-old": {
            "activator": ".boot-complete #profile-content .contact-see-more-less",
            "alt_activator": ".boot-complete #profile-content",
            "button": {
                "container": ".pv-top-card-section__name",
                "css": {
                    "display": "inline-block",
                    "float": "none",
                    "left": "7px",
                    "top": "7px"
                }
            },
            "mappings": {
                "photo": [
                    {
                        "selector": ".profile-photo-edit img",
                        "attr": "src"
                    },
                    {
                        "selector": ".pv-top-card-section__image .presence-entity__image:not(.ghost-person)",
                        "attr": "background-image"
                    }
                ],
                "full_name": ".pv-top-card-section__name",
                "email": ".ci-email .pv-contact-info__contact-item",
                "phone_number": ".ci-phone .pv-contact-info__contact-item",
                "website": {
                    "selector": ".ci-websites .pv-contact-info__contact-link",
                    "attr": "href"
                },
                "city": ".pv-top-card-section__location",
                "linkedin": "_self",
                "twitter": ".ci-twitter .pv-contact-info__action"
            }
        },
        "linkedin.com": {
            "activator": ".boot-complete #profile-content .t-24",
            "button": {
                "container": ".t-24",
                "css": {
                    "display": "inline-block",
                    "float": "none",
                    "left": "7px",
                    "top": "7px"
                }
            },
            "mappings": {
                "photo": [
                    {
                        "selector": ".profile-photo-edit img",
                        "attr": "src"
                    },
                    {
                        "selector": ".pv-top-card-section__image .presence-entity__image:not(.ghost-person)",
                        "attr": "src"
                    }
                ],
                "full_name": ".t-24",
                "city": ".t-16.inline-block:not(.t-black--light)",
                "linkedin": "_self"
            }
        },
        "twitter.com": {
            "activator": ".ProfilePage",
            "button": {
                "container": ".ProfileHeaderCard",
                "insertBefore": ".ProfileHeaderCard .ProfileHeaderCard-name"
            },
            "mappings": {
                "photo": {
                    "selector": ".ProfileAvatar-image",
                    "attr": "src"
                },
                "full_name": ".ProfileHeaderCard-nameLink",
                "city": ".ProfileHeaderCard-locationText",
                "website": ".ProfileHeaderCard-urlText",
                "twitter": "_self"
            },
            "test_url": "https://twitter.com/bobkreefft",
            "expected_test_results": {
                "photo": "https://pbs.twimg.com/profile_images/568777523819839488/LhGqN30g_400x400.png",
                "full_name": "Bob Kreefft",
                "city": "Rotterdam, The Netherlands",
                "website": "homerun.co"
            }
        }
    }
};


var homerunBaseUrl = 'https://talentclipper.homerun.co';
var injected = false;


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.cmd === 'toggleSidebar') {
        if (injected) {
            toggleHomerunSidebar();
        }
        else {
            init(true);
        }
    }

    if (msg.cmd === 'urlChange' && msg.change.status === 'complete') {
        var scraped = document.querySelector('.hr-scraped');
        if (scraped !== null) {
            scraped.classList.remove('hr-scraped');
        }
        initScraper();
    }
});


function init(open) {
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);

    // Insert Homerun HTML into page
    chrome.runtime.sendMessage({cmd: 'getHTML'}, function(response) {
        var div = document.createElement('div');
        div.id = 'hr-homerun-container';
        div.innerHTML = response;
        document.body.appendChild(div);

        document.querySelector('.hr-homerun-logo').style.backgroundImage = 'url(' + chrome.extension.getURL('hr-logo.png') + ')';

        document.querySelector('#hr-arrow-toggle').addEventListener('click', closeHomerunSidebar);
        document.querySelector('#hr-company').addEventListener('change', setVacancies);
        document.querySelector('#hr-person-form .submit-button').addEventListener('click', submitHomerunForm);
        document.querySelector('#hr-person-form .connect-button').addEventListener('click', showLoginForm);
        document.querySelector('#hr-login-form .hr-form__button').addEventListener('click', login);
        document.querySelector('#hr-sign-out').addEventListener('click', logout);

        initScraper();

        if (open) {
            setTimeout(toggleHomerunSidebar);
        }

        injected = true;
    });
}


if (getHostname() in homerun_content_mappings.sites) {
    init(false);
}


function initScraper(retry) {
    if (typeof retry === 'undefined') {
        retry = 0;
    }

    // Reset the form
    fillHomerunForm({});

    var hostname = getHostname();

    if (hostname === 'linkedin.com-old') {
        var linkedin_ext = document.querySelector('.pv-contact-info__card-sub-heading + .contact-see-more-less');
        if (linkedin_ext !== null) {
            linkedin_ext.click();
        }
    }

    if (hostname in homerun_content_mappings.sites) {
        var scraper = homerun_content_mappings.sites[hostname];

        // Show warning if scraping is forbidden (LinkedIn etc.)
        if (scraper.disallowed) {
            var el = document.getElementById('hr-disallowed-reason');
            el.innerText = scraper.disallowed_reason;
            el.classList.add('visible');
        }

        if (retry === 5 && typeof scraper.alt_activator !== 'undefined') {
            scraper.activator = scraper.alt_activator;
        }

        // Check if the page can be scraped (and set a retry timeout for slow Facebook loading)
        if (document.querySelector(scraper.activator) === null || document.querySelector(scraper.activator + '.hr-scraped') !== null) {
            if (retry < 5) {
                setTimeout(function(){
                    initScraper(retry + 1);
                }, 1000);
            }
            return;
        }

        // Scrape the page
        scrapeProfile(scraper.mappings);

        // Mark the page as scraped
        document.querySelector(scraper.activator).classList.add('hr-scraped');

        // Remove existing Homerun button
        var homerunButton = document.getElementById('hr-homerun-button');
        if (homerunButton !== null) {
            homerunButton.parentNode.removeChild(homerunButton);
        }

        // Insert Homerun button into page
        if ('button' in scraper && document.querySelector(scraper.button.container) !== null) {
            var div = document.createElement('div');
            div.id = 'hr-homerun-button';
            div.title = 'Add to Homerun';
            div.style.backgroundImage = 'url(' + chrome.extension.getURL('button.png') + ')';

            if ('css' in scraper.button) {
                var property;

                for (property in scraper.button.css) {
                    div.style[property] = scraper.button.css[property];
                }
            }

            if ('insertBefore' in scraper.button) {
                document.querySelector(scraper.button.container).insertBefore(
                    div,
                    document.querySelector(scraper.button.insertBefore)
                );
            }
            else {
                document.querySelector(scraper.button.container).appendChild(div);
            }

            div.addEventListener('click', toggleHomerunSidebar);
        }
    }
}


function getHostname() {
    var hostname = window.location.hostname.split('.');

    hostname = hostname.slice(hostname.length - 2);

    if (hostname[0] === 'linkedin') {
      if (document.querySelector('#profile') !== null) {
        return 'linkedin.com-oldest';
      }
      if (document.querySelector('.t-24') === null) {
        return 'linkedin.com-old';
      }
    }

    return hostname.join('.');
}


function scrapeProfile(mappings) {
    var profile = {};

    if ('full_name' in mappings) {
        var nameEl = document.querySelector(mappings.full_name);
        if (nameEl && nameEl.innerText) {
            var full_name = nameEl.innerText.trim();
            var full_name_parts = full_name.split(' ');

            profile.last_name = full_name_parts.pop();
            profile.first_name = full_name_parts.join(' ');
        }
    }

    var x;

    for (x in mappings) {
        if (x === 'full_name') {
            continue;
        }

        if (mappings[x] === '_self') {
            profile[x] = window.location.href;
            continue;
        }

        var toScrape = [mappings[x]];

        if (Array.isArray(mappings[x])) {
            toScrape = mappings[x];
        }

        for (var i = 0; i < toScrape.length; i++) {
            var element = scrapeElement(toScrape[i]);

            if (element !== null) {
                profile[x] = element;
            }
        }
    }

    fillHomerunForm(profile);
}


function scrapeElement(what) {
    var el = document.querySelector(what.selector || what);

    if (el !== null) {
        if (typeof what === 'string') {
            return el.innerText.trim();
        }
        else if (what.attr === 'background-image') {
            return document
                    .defaultView
                    .getComputedStyle(el,null)
                    .getPropertyValue('background-image')
                    .slice(4, -1)
                    .split('"').join('')
                    .split("'").join('');
        }
        else {
            return el.getAttribute(what.attr);
        }
    }

    return null;
}


function fillHomerunForm(profile) {
    var homerunForm = document.getElementById('hr-person-form');
    if (homerunForm !== null) {
        var currentCompany = document.getElementById('hr-company');
        if (currentCompany !== null) {
            currentCompanyValue = currentCompany.value;
        }

        var currentVacancy = document.getElementById('hr-vacancy');
        if (currentVacancy !== null) {
            currentVacancyValue = currentVacancy.value;
        }

        homerunForm.reset();

        // Hidden input fields don't respond to reset() so we remove them from the DOM
        document.querySelectorAll('#hr-person-form input[type="hidden"]').forEach(function(el) {
            el.remove();
        });

        if (currentCompany !== null) {
            currentCompany.value = currentCompanyValue;
        }

        if (currentVacancy !== null) {
            currentVacancy.value = currentVacancyValue;
        }
    }

    var photoEl = document.getElementById('hr-person-photo');
    if (photoEl !== null) {
        photoEl.classList.remove('visible');
    }

    var property;

    for (property in profile) {
        var form_field = document.getElementById('hr_candidate_' + property);

        if (form_field !== null) {
            form_field.value = profile[property];
        }
        else {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.id = 'hr_candidate_' + property;
            input.name = property;
            input.value = profile[property];

            document.getElementById('hr-person-form').appendChild(input);
        }

        if (property === 'photo' && photoEl !== null) {
            photoEl.style.backgroundImage = 'url(' + profile[property] + ')';
            photoEl.classList.add('visible');
        }
    }

    var submitButton = document.querySelector('#hr-homerun-container .submit-button');
    if (submitButton !== null) {
        submitButton.classList.remove('show-homerun');
    }
}

function checkForUpdatedMappings() {
  chrome.runtime.sendMessage({
    cmd: 'getContentMappings',
    baseUrl: homerunBaseUrl,
    contentMappings: homerun_content_mappings
  }, function(response) {
    setLoginStatus(response.authenticated);
    setCompaniesAndVacancies(response.companies);

    if (response.content_mappings.version !== homerun_content_mappings.version) {
      homerun_content_mappings = response.content_mappings;
      initScraper();
    }
  });
}

var activated = false;

function toggleHomerunSidebar() {
    if (!activated) {
        checkForUpdatedMappings();
        activated = true;
    }

    if (document.querySelector('.hr-scraped') !== null) {
        document.querySelector('.hr-scraped').classList.remove('hr-scraped');
    }

    initScraper();

    document.getElementById('hr-homerun-container').classList.add('active');
}

function closeHomerunSidebar() {
    document.getElementById('hr-homerun-container').classList.remove('active');
}

function setLoginStatus(logged_in) {
    document
        .getElementById('hr-homerun-container')
        .classList[logged_in ? 'remove' : 'add']('not-logged-in');

    if (logged_in) {
        hideLoginForm();
    }
}

var companies = [];

function setCompaniesAndVacancies(data) {
    companies = data;

    var select = document.getElementById('hr-company');

    if (!companies.length) {
        // TODO: show some kind of error
    }
    else if (companies.length === 1) {
        select.parentNode.parentNode.removeChild(select.parentNode);
        setVacancies(companies[0].id);
    }
    else {
        for (var i = 0; i < companies.length; i++) {
            var option = document.createElement('option');
            option.value = companies[i].id;
            option.innerText = companies[i].name;
            select.appendChild(option);
        }

        setVacancies(companies[0].id);
    }
}

function setVacancies(companyId) {
    if (typeof companyId === 'object') {
        companyId = parseInt(companyId.target.value, 10);
    }

    var select = document.getElementById('hr-vacancy');

    while (select.childNodes.length > 1) {
        select.removeChild(select.lastChild);
    }

    for (var i = 0; i < companies.length; i++) {
        if (companies[i].id !== companyId) {
            continue;
        }

        var option = document.createElement('option');
        option.value = 'c' + companies[i].id;
        option.innerText = 'Add to talent pool';
        select.appendChild(option);

        var departments = [];
        var hasOther = false;

        for (var ii = 0; ii < companies[i].current_vacancies.length; ii++) {
            var v = companies[i].current_vacancies[ii];

            if (v.department === null) {
                hasOther = true;
            }
            else if (departments.indexOf(v.department) === -1) {
                departments.push(v.department);
            }
        }

        if (hasOther) {
            departments.push(null);
        }

        var parent = select;

        for (var ii = 0; ii < departments.length; ii++) {
            if (departments.length > 1) {
                var optgroup = document.createElement('optgroup');
                optgroup.label = departments[ii] || 'Other';
                select.appendChild(optgroup);
                parent = optgroup;
            }

            for (var iii = 0; iii < companies[i].current_vacancies.length; iii++) {
                var v = companies[i].current_vacancies[iii];

                if (v.department !== departments[ii]) {
                    continue;
                }

                var option = document.createElement('option');
                option.value = 'v' + v.id;
                option.innerText = _makeVacancyTitle(v);
                parent.appendChild(option);
            }
        }
    }
}

function _makeVacancyTitle(vacancy) {
    var title = vacancy.title;

    var meta = [];

    if (vacancy.type !== '') {
        meta.push(vacancy.type);
    }

    if (vacancy.location !== null) {
        meta.push(vacancy.location.name);
    }

    if (meta.length) {
        title += ' (' + meta.join(', ') + ')';
    }

    return title;
}

function showLoginForm() {
    event.preventDefault();

    document.getElementById('hr-homerun-container').classList.add('show-login-form');
}

function hideLoginForm() {
    document.getElementById('hr-homerun-container').classList.remove('show-login-form');
}

function login() {
    event.preventDefault();

    hideError();

    var formData = new FormData(document.getElementById('hr-login-form'));

    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

    chrome.runtime.sendMessage({
      cmd: 'signIn',
      baseUrl: homerunBaseUrl,
      formData: json
    }, function(response) {
      switch (response) {
        case 200:
          checkForUpdatedMappings();
          break;
        case 400:
          showError(
              'That doesn\'t seem right',
              'Please check your username/ password combination.'
          );
          break;
        case 500:
        default:
          showError(
              'Whoops, something went wrong!',
              'Please try again in a minute.'
          );
          break;
      }
    });
}

function logout() {
  hideError();

  chrome.runtime.sendMessage({
    cmd: 'signOut',
    baseUrl: homerunBaseUrl
  }, function(response) {
    switch (response) {
      case 200:
        setLoginStatus(false);
        break;
      default:
        showError(
            'Whoops, something went wrong!',
            'Please try again in a minute.'
        );
        break;
    }
  });
}

function submitHomerunForm() {
    event.preventDefault();

    var button = event.target;

    hideError();

    var formData = new FormData(document.getElementById('hr-person-form'));

    formData.append('sourced_via', 'chrome-extension');
    formData.append('sourced_from', window.location.href);

    var to_vacancy = document.getElementById('hr-vacancy').value.charAt(0) === 'v';
    var to_id = document.getElementById('hr-vacancy').value.substring(1);

    if (to_id === '') {
        showError('Please select a job');
        return;
    }

    button.classList.add('saving');

    if (to_vacancy) {
        formData.append('vacancy_id', to_id);
    }
    else {
        formData.append('company_id', to_id);
    }

    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

    chrome.runtime.sendMessage({
      cmd: 'storeData',
      url: homerunBaseUrl + "/source-to-" + (to_vacancy ? "vacancy" : "company"),
      formData: json
    }, function(response) {
      var xhr = JSON.parse(response);
      var res = JSON.parse(xhr.responseText);

      switch (xhr.status) {
        case 200:
        case 201:
          button.classList.add('done');

          var url = 'https://app.homerun.co';

          if (to_vacancy) {
            url += '/job/' + res.data.job_applications[0].vacancy_id + '/candidate/' + res.data.job_applications[0].id;
          }
          else {
            url += '/candidates/' + res.data.id;
          }

          document.querySelector('#hr-homerun-container .view-button').href = url;

          setTimeout(function(){
            button.classList.add('show-homerun');
            button.classList.remove('done');
          }, 500);
          break;
        case 400:
          var missing = [];
          var x;

          for (x in res.message) {
            missing.push(res.message[x][0]);
          }

          showError(
            'Please add:',
            missing.join(', ')
          );
          break;
        default:
          showError(
            'Whoops, something went wrong!',
            'Please try again in a minute.'
          );
          break;
      }

      button.classList.remove('saving');
    });
}

function showError(title, body) {
    document.querySelector('#hr-errors em').innerText = title;
    document.querySelector('#hr-errors span').innerText = body || '';
    document.getElementById('hr-errors').classList.add('show');
    document.getElementById('hr-homerun-container').classList.add('has-error');
}

function hideError() {
    document.getElementById('hr-errors').classList.remove('show');
    document.getElementById('hr-homerun-container').classList.remove('has-error');
}
