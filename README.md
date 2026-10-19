# ☁️ AWS Master Notes --- Beginner to Hands-On

> A structured, beginner-friendly collection of **AWS, Cloud Computing,
> and DevOps learning notes**, with practical labs, commands,
> configuration examples, troubleshooting guidance, and interview
> preparation.

![AWS](https://img.shields.io/badge/AWS-Cloud%20Learning-FF9900?logo=amazonaws&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-Notes-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interactive-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Project-Learning%20Resource-blue)

------------------------------------------------------------------------

## 📌 About This Project

**AWS Master Notes** is a static website designed to help learners study
AWS concepts in a clear, organized, and practical way. Topics are
separated into folders so that each concept can be studied
independently, revised quickly, and expanded over time.

The notes aim to explain each topic from **fundamentals → architecture →
setup → hands-on practice → security → troubleshooting → interview
preparation**.

### 🎯 Learning goals

-   Understand cloud computing and core AWS services.
-   Practise AWS Console workflows and AWS CLI commands.
-   Learn how to deploy websites and applications on AWS.
-   Understand IAM permissions, security practices, and cost awareness.
-   Build a useful revision resource for projects and technical
    interviews.

## 🧭 Topics Covered

  -----------------------------------------------------------------------
  \#                      Topic                   What you'll learn
  ----------------------- ----------------------- -----------------------
  01                      Introduction to Cloud   Cloud computing basics,
                          Computing               traditional vs. cloud
                                                  infrastructure,
                                                  benefits, and
                                                  public/private/hybrid
                                                  cloud

  02                      AWS Fundamentals        AWS features, common
                                                  services, and important
                                                  cloud terminology

  03                      Create an AWS Free Tier Account setup basics
                          Account                 and cost-awareness
                                                  considerations

  04                      Install AWS CLI on      AWS CLI installation
                          Windows                 and initial
                                                  verification

  05                      AWS IAM User & CLI      IAM concepts,
                          Configuration           user/permission setup,
                                                  and CLI configuration

  06                      Amazon EC2              SSH connection, Apache,
                                                  Nginx, static website
                                                  hosting, and Node.js
                                                  deployment

  07                      Amazon S3               Buckets, file uploads,
                                                  access settings, and
                                                  Next.js-to-S3
                                                  integration

  08                      AWS Lambda              Creating/testing
                                                  functions, API Gateway
                                                  integration, and CORS

  09                      Amazon DynamoDB         NoSQL fundamentals and
                                                  integration concepts
                                                  for Next.js

  10                      Amazon ECS              Container orchestration
                                                  fundamentals with
                                                  Amazon Elastic
                                                  Container Service
  -----------------------------------------------------------------------

> The project is designed to grow: add new services and labs as you
> learn them.

## ✨ Website Features

-   **Organized learning structure:** Main topics and subtopics have
    dedicated folders.
-   **Individual topic pages:** Pages use their own `index.html`,
    `style.css`, and `script.js` files.
-   **Search and navigation:** Find topics and move between learning
    pages.
-   **Responsive layout:** Designed to work on desktop and mobile
    screens.
-   **Practical learning format:** Topic pages follow a consistent
    learning framework.
-   **Revision support:** Quick notes, checklists, and
    interview-practice sections where included.
-   **Print / Save as PDF:** Use the browser's print dialog on supported
    pages to save notes as a PDF.
-   **No build step required:** This is a static HTML, CSS, and
    JavaScript project.

## 📂 Project Structure

``` text
AWS/
├── index.html
├── style.css
├── script.js
├── README.md
├── 01-Introduction-Cloud-Computing/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── [subtopic folders]/
├── 02-AWS-Fundamentals/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── [subtopic folders]/
├── 03-Create-AWS-Free-Tier-Account/
├── 04-Install-AWS-CLI-Windows/
├── 05-IAM-User-and-AWS-CLI-Configuration/
├── 06-Amazon-EC2/
├── 07-Amazon-S3/
├── 08-AWS-Lambda/
├── 09-Amazon-DynamoDB/
└── 10-Amazon-ECS/
```

Each main topic and subtopic follows the same basic page-file pattern.
Exact subfolder names may vary as the notes evolve.

## 🚀 Run the Website Locally

### Option 1 --- Python HTTP server (recommended)

**Prerequisite:** Python 3.

1.  Download or clone this repository.
2.  Open a terminal in the project root---the folder containing the main
    `index.html`.
3.  Run:

``` bash
python3 -m http.server 8000
```

4.  Open this address in your browser:

``` text
http://localhost:8000
```

Stop the server with `Ctrl + C`.

### Option 2 --- VS Code Live Server

1.  Open the `AWS` folder in Visual Studio Code.
2.  Install the **Live Server** extension if it is not already
    installed.
3.  Right-click the root `index.html`.
4.  Select **Open with Live Server**.

> Use the root `index.html`, not an individual subtopic page, to start
> from the main navigation.

## 🛠️ Technologies Used

-   **HTML5** --- page structure and content
-   **CSS3** --- layout, responsive styling, and presentation
-   **Vanilla JavaScript** --- search, navigation helpers, and page
    interactions
-   **AWS** --- the cloud platform covered by the learning material
-   **Python HTTP server / VS Code Live Server** --- optional local
    preview tools

No package installation or framework build command is required for the
static website.

## 📚 Suggested Study Method

For every topic, try to follow this sequence:

1.  **Understand the concept:** What is it, and why is it used?
2.  **Learn the terminology:** Identify important terms and components.
3.  **Understand the workflow:** Follow the request/data flow step by
    step.
4.  **Practise in the Console:** Repeat the configuration in your own
    AWS environment.
5.  **Practise with the CLI:** Run commands and understand each
    argument.
6.  **Verify the result:** Compare expected behaviour with what you
    observe.
7.  **Study security and cost:** Review permissions, exposure, cleanup,
    and billing.
8.  **Troubleshoot:** Record errors, root causes, and fixes.
9.  **Revise:** Answer interview questions without looking at the notes.
10. **Build a mini-project:** Apply the service in a practical scenario.

### A useful note-taking template

When adding a new topic, include as many of these sections as are
relevant:

-   Definition and full form
-   What it is and why it is used
-   Real-world analogy
-   Key terminology and components
-   Types and architecture
-   How it works --- step by step
-   Architecture diagram or workflow
-   Prerequisites
-   AWS Console steps
-   AWS CLI commands with explanations
-   Practical lab and expected result
-   Real-world use cases
-   Related AWS services
-   IAM permissions and security
-   Pricing and cost optimization
-   Monitoring and logging
-   Best practices and common mistakes
-   Errors and troubleshooting
-   Limitations and alternatives
-   Interview questions and answers
-   MCQs, revision notes, assignment, and knowledge check

Not every section applies to every service; keep the content accurate
and relevant rather than filling sections with generic text.

## 🔐 Security & Cost-Safety Notes

AWS services can create billable resources. Before performing a lab:

-   Check current AWS pricing and account-specific Free Tier
    eligibility.
-   Create only the resources required for the exercise.
-   Use least-privilege IAM permissions; avoid broad permissions when
    narrower ones work.
-   **Never commit AWS access keys, secret keys, passwords, private SSH
    keys, tokens, or `.env` files** to GitHub.
-   Do not make an S3 bucket or other resource public unless the lab
    specifically requires it and you understand the exposure.
-   After testing, delete resources you no longer need and verify that
    related resources have also been removed.
-   Use official AWS documentation to confirm console screens, service
    limits, and commands because they can change.

> **Important:** "Free Tier" does not mean every service or every usage
> level is free. Review billing and usage regularly.

## 🌐 Publish the Static Website

Because this project uses static HTML, CSS, and JavaScript, it can be
hosted on a static hosting platform, for example:

-   **GitHub Pages** --- useful for a public learning-notes website.
-   **AWS Amplify Hosting** --- an AWS-based option for static web
    hosting.
-   **Amazon S3 static website hosting** --- useful for learning S3
    website hosting; review public-access and HTTPS requirements before
    choosing this route.
-   **Cloudflare Pages** or **Netlify** --- alternative static hosting
    options.

Follow the current official documentation for the platform you choose.
If deploying to a subpath, verify that internal links and asset paths
work from that path.

## 🧑‍💻 Git & GitHub Workflow

If you are using Git, run these commands from the project root:

``` bash
git status
git add README.md
git commit -m "Add project README"
git push
```

If you want to publish the entire website, review `git status` and your
`.gitignore` before staging files. Do not accidentally ignore required
HTML, CSS, or JavaScript files.

### If only one folder should be tracked

Git ignore rules can be tricky when you ignore everything except one
directory. Test the result with:

``` bash
git check-ignore -v path/to/file
git status --short
```

Remember: `.gitignore` does not stop tracking files that Git already
tracks. To untrack files while keeping them on your computer, use
`git rm --cached` carefully and review the staged changes before
committing.

## 🤝 How to Contribute / Improve These Notes

You can improve the project by:

1.  Correcting an error or unclear explanation.
2.  Adding verified console steps and CLI commands.
3.  Including diagrams, practical labs, and expected outputs.
4.  Adding troubleshooting cases based on real errors.
5.  Improving accessibility, mobile layout, and navigation.
6.  Checking links and ensuring examples do not expose secrets.

When adding commands, explain what they do and identify any required
permissions, region settings, placeholders, and potential costs.

## 🗺️ Future Improvements

-   Add more AWS services and advanced scenarios.
-   Add verified architecture diagrams for key workflows.
-   Add lab completion tracking and progress indicators.
-   Add more service-specific quizzes and interview questions.
-   Add deployment instructions tailored to the chosen hosting platform.
-   Add a changelog and links to official AWS documentation for each
    topic.

## 📖 Official Learning Resources

-   [AWS Documentation](https://docs.aws.amazon.com/)
-   [AWS Getting Started Resource
    Center](https://aws.amazon.com/getting-started/)
-   [AWS CLI User
    Guide](https://docs.aws.amazon.com/cli/latest/userguide/)
-   [AWS Well-Architected
    Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
-   [AWS Pricing](https://aws.amazon.com/pricing/)
-   [AWS Free Tier](https://aws.amazon.com/free/)

Use official documentation to validate service behaviour, permissions,
and pricing before using examples in production.

## ⚠️ Disclaimer

This is an educational learning project, not official AWS documentation
or production security guidance. AWS console interfaces, service
features, pricing, and Free Tier terms can change. Always verify
important details against current official AWS documentation before
applying them to real workloads.

## ⭐ Support the Project

If these notes help you learn AWS, consider starring the repository on
GitHub and sharing suggestions that would make the material more useful
to other learners.

------------------------------------------------------------------------

**Built for continuous learning: Learn the concept → practise it →
verify it → document it → revise it.**
