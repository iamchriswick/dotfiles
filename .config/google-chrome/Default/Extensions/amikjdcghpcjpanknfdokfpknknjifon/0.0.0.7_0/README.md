# Unbias

A Chrome extension to remove faces and names in LinkedIn profiles and searches, to reduce the effects of unconscious bias.

## Why?

Unconscious (or implicit) bias is bias we are unaware of, and which affects our decisions and actions, outside of our control. 

Studies show we have unconscious bias toward or against certain genders, ethnicities or visual traits. You can test your own unconscious biases with [Harvard's Implicit Association Test](https://implicit.harvard.edu/implicit/education.html "Project Implicit"). [Goldin & Rouse](https://www.nber.org/papers/w5903 "Orchestrating impartiality") found blind auditions in orchestras increased the likelihood that a woman is selected by 30% to 60% - how about blind applicant finding and filtering?

In addition, studies have shown that we have biases based in names. [Moss-Racusin et al.](http://www.pnas.org/content/109/41/16474.abstract?ijkey=2729d4cd2121eb87cc3eb5791a6926d53f9fa766&keytype2=tf_ipsecsha "Science faculty’s subtle gender biases favor male students") found, in a double-blind study of the the same application with typically male and female names, like James and Jane, that assessors rated James as significantly more competent and hireable than the (identical) Jane. The assessors also selected a higher starting salary and offered more career mentoring to James. And it didn't matter whether the assessor was a man or a woman - we are all affected by unconscious bias. Equally, [Bertrand and Mullainathan](https://www.nber.org/papers/w9873 "Are Emily and Greg More Employable than Lakisha and Jamal? A Field Experiment on Labor Market Discrimination") found significant discrimination against African-American sounding names: White sounding names received 50 percent more callbacks for interviews. And this affected the benefits of a better resume too - a higher quality resume elicits 30 percent more callbacks for a Whie-sounding name, whereas for African American sounding names, it elicits a far smaller increase.

Recruiters use LinkedIn to find, shortlist and contact candidates. As LinkedIn displays both names and profile photos, recruiters are susceptible to this bias. It may affect whether or not they choose to shortlist or contact a candidate, and their overall perception of a candidate's ability, outside of the relevant facts about that candidate.

Unbias removes names and photos in both standard and recruiter account searches and profile views to help reduce the effects of unconscious bias.

## How does it work?

Once you've activated the Chrome Extension, Unbias will automatically replace names and profile pictures from profiles, searches, recruiter searches and recruiter projects.

The blue Unbias icon will appear to the right in your address bar (by the favourites star icon). Clicking this icon gives a popup with a button to manage your Chrome Extensions (so you can enable/disable Unbias) and a link to find out more. 

[It's on the Chrome Store](https://chrome.google.com/webstore/detail/unbias-linkedin-anonymise/amikjdcghpcjpanknfdokfpknknjifon "Unbias Anonymise LinkedIn Chrome Extension").

## Features/improvements on the horizon

- Hiding details of connections on /in profiles
- Ability to toggle features on/off in popup
- Optional hiding of educational institution (as [Deloitte are doing in applications](http://www.bbc.co.uk/news/education-34384668 "Deloitte removes university names to reduce unconscious bias"))
- Optional replacement of profile pictures with professional-looking cats

## Contributing

### Setup

1. Click 'fork' at the top of this repository
2. Clone down your fork using `git clone https://github.com/YOUR-USERNAME/unbias-chrome-extension`
3. Go to chrome://extensions and check the 'Developer mode' checkbox in the top right hand corner
4. Click 'Load an unpacked extension...' and select the folder you've cloned onto your computer
5. You can now test out your fork of Unbias. When you save edits to your files, simply hit 'Cmd-R' or the 'Reload' button for your Unbias copy on chrome://extensions and your changes will come into effect (disable the actual Unbias plugin at this point, or it might get messy to see!). 

### Questions?

Email [hello@unbias.io](mailto:hello@unbias.io).

## Updates

### 29th November 2019 - Version 0.0.0.6

This version ensures Unbias works fully for LinkedIn Recruiter Lite searches, profile views and project views. 

Since the extension was first made in 2016, LinkedIn has instigated major UI changes. However, much of the UI in the Recruiter view is the same as the 2016 UI, with some slight changes. This update does not attempt to fix Unbias to work for all LinkedIn users, but instead ensures complete functionality for Recruiter users.