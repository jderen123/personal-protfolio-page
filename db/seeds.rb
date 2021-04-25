omniauth = Skill.create(name: "OmniAuth")
google_calander_api = Skill.create(name: "Google API")
awsS3 = Skill.create(name: "AWS S3")
stripeAPI = Skill.create(name: "Stripe API")
jquery = Skill.create(name: "Jquery")
sendgrid = Skill.create(name: "Sendgrid")
rapidAPI = Skill.create(name: "RapidAPI")
javascript = Skill.create(name: "JavaScript")
bootstrap = Skill.create(name: "Bootstrap")
milia = Skill.create(name: "Milia")
ruby = Skill.create(name: "RubyonRails")

nomadconnect = Project.create(name: "NomadConnect", description: "Web application that helps better connect digital nomads. Users can make posts and comments in their cities forum, see local events, and checkout local weather and news headlines. I was responsible for API, Omniauth and JS implementation.", github_link: "https://github.com/gforgione/nomad_connect", live_link: "https://nomadconnect.herokuapp.com/", photo_key: "https://i.ibb.co/ZBdySxq/Screen-Shot-2021-04-07-at-4-38-34-PM.png" )
nomadconnect.skills << omniauth
nomadconnect.skills << google_calander_api
nomadconnect.skills << bootstrap
nomadconnect.skills << rapidAPI
nomadconnect.skills << javascript

rails_saas_project = Project.create(name: "Rails Project Manager", description: "Multifaceted project management application implementing multiple high level gems and APIs. Uses Sendgrid for email conformation and Stripe for premium package payments. Allows for users to better manage theirs project in a secure, closed off environment.", github_link: "https://github.com/jderen123/rails-saas-project", live_link: "https://rails-saas-project-jderen.herokuapp.com/", photo_key: "https://i.ibb.co/KV0wfs6/Screen-Shot-2021-04-07-at-12-25-43-PM.png")
rails_saas_project.skills << awsS3
rails_saas_project.skills << stripeAPI
rails_saas_project.skills << jquery
rails_saas_project.skills << sendgrid
rails_saas_project.skills << milia
rails_saas_project.skills << bootstrap

personal_page_project = Project.create(name: "Personal Profile Page", photo_key: "https://i.ibb.co/tPcyCWR/Screen-Shot-2021-04-07-at-5-22-29-PM.png", description: "Personal Portfolio page containing my skill set and project list. Built entire page from scratch with RubyOnRails simple MVC for my back-end. The front-end uses mainly vanilla JavaScript, SCSS and a bit of Jquery.", github_link: "https://github.com/jderen123/personal-page", live_link: "https://jordan-deren-portfolio.herokuapp.com/")
personal_page_project.skills << jquery
personal_page_project.skills << javascript
personal_page_project.skills << ruby


