# Django-React Art Website

This website is built using Django, PostgreSQL for the back-end, React, Redux and SASS for the front-end and deployed via DigitalOcean. Authentication is implemented using JSON Web Tokens with the Django Rest Framework Simple JWT package. Django-Admin is used for site admins to update / maintain the site easily.

You can visit the website here: http://178.62.198.136/
Example user account credentials:
Email: olivia@gmail.com
Password: password

- This website has the following features implemented:
- Sign up / login for users.
- Allow visitors of the site to search through items using different criteria.
- Pagination of search results.
- Protected routes - only allow users with accounts to view item details.
- Contact page - allow visitors to send emails via a form. To show this feature any emails sent via the form will also be sent to the email of the form sender.
