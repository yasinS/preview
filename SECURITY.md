# 🔒 Reporting security issues
*Note (9th Feb 2018): you may receive a first response and/or follow-up comments via email, as this program is currently under review.*

* If you believe you've found a security issue, you are encouraged to file a report.
* Please send the report in an email to **security@ysx-contact.com**.
* You will receive an invitation to my private HackerOne program where you can file your report.
* Thank you for contributing towards the security of this project.

# Policy
_The following information is a partial copy of that in my HackerOne program policy, and is supplied below for your reference._
 
## Disclosure policy
I will investigate submitted reports and make every effort to quickly resolve vulnerabilities in my "In Scope" projects. Please make a good-faith effort to avoid privacy violations, destruction of data, and interruption or degradation of any asset.
 
## Service-level agreement (reasonable effort)
* Time to first response: 3 working days
* Time to triage: 4 working days

### 📝 Preview (this project)
[**Preview**](https://github.com/yasinS/preview) is a simple web-based Markdown editor with a selection of helpful features. This app can be used both locally and offline, so it may be useful to clone the repo and open `index.html` on your system. No information is transmitted nor account functionality offered – this is not a server-side project.

This project contains some custom-written code and extensions, so I'm particularly interested in whether you can achieve XSS via a **Markdown payload**, or otherwise, in the context of `yasins.github.io` (e.g. DOM or reflected XSS).

## Exclusions
The following conditions, issues, and test types are **not** in scope for this disclosure program.
 
 * Physical testing and social engineering attacks
 * Issues concerning projects not listed in the "In Scope" section
 * Issues concerning third-party products and services
 * Issues affecting only outdated browsers (e.g. IE < 9, Chrome < 40, Firefox < 35)
 * Reports only containing attachment or video PoCs
 * Reports directly transferred from an automated scanner
 * Generic hardening issues (e.g. those concerning browser headers)
 * Issues related to email service (e.g. "spoofing" or "SPF/DKIM records")
 * Denial of service vulnerabilities
 * Content injection and error page injection
 * Reflected file download
 * Mixed content
 * CSV injection
 * 401 injection
 * Broken links
 * Spamming
 * Host header vulnerabilities
 * Tabnabbing and `window.opener` attacks
 * Best practice and speculative reports
 * Infrastructure issues (e.g. SSL, DNS, other server configuration)
 * CSRF with no security implications
 * Clickjacking and `X-Frame-Options` vulnerabilities
 * Cookie-related vulnerabilities (e.g. "missing HTTP Only flag")
 * Any user interface, user experience, functional, and design issues
 * Banner grabbing, stack trace, and server information disclosure
 
## Additional information
Swag or monetary rewards are not provided at this time, as all "In Scope" projects are published under the MIT License as free and open-source software on GitHub.

## Acknowledgements
