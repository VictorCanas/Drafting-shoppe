# The Drafting Shoppe

The project focused on rebuilding a website for a business that sells monumental drawings by using the latest technologies in e-commerce for efficient use of the network. The new Drafting Shoppe website fetches a smaller amount of data for images, is mobile friendly, and a truly enjoyable experience for an end-user.

Built with:

* Node.js v8.9
* React v16
* Redux
* Express
* Babel
* WebPack 4
* MongoDB

## Before & After

Before
![Before](https://s7.postimg.cc/ycmtcweaz/2018-04-18_18-24-38.png)

## Mobile Friendly

Single-Page Application with React server-side rendering.

![The Drafting Shoppe](https://image.ibb.co/eV9f47/Screen_Shot_2018_04_18_at_7_01_55_PM.png)

## Search

Ability to search for a specific image by title, description, and category.

![The Drafting Shoppe](https://s7.postimg.cc/p4ukwdmq3/2018-04-18_18-22-53.png)

## Categorization

Powerful categorzation with subcategories, filter by attributes, and price.

![The Drafting Shoppe](https://s7.postimg.cc/i1mpgqmff/2018-04-18_18-24-00.png)

## Checkout

Checkout page with PayPal integration.

![The Drafting Shoppe](https://s7.postimg.cc/bzf2q1vcr/2018-04-18_18-22-32.png)

## Dashboard

Client-side dashboard use JSON Web Token (JWT) to access REST API.

![Dashboard](https://s7.postimg.cc/7qacnzup7/2018-04-18_18-32-31.png)

### Requirements

* Node.js >= 8
* MongoDB >= 3.2

### Challenges

The biggest challenge was migrating data from one site to another since the old website had over 1,000 cliparts and we had to programmatically do this.

## Application Structure

```
.
├── config                   # Project and build configurations
├── dist                     # Distribution folder
├── locales                  # Text files
├── logs                     # Log files
├── public                   # Static public assets and uploads
│   ├── admin                # Dashboard index.html
│   ├── admin-assets         # Dashboard assets
│   └── content              # Store root folder
|
├── scripts                  # Shell scripts for theme install/export
├── src                      # Application source code
│   ├── admin                # Dashboard application
│   │   └── client           # Client side code
│   ├── api                  # REST API
│   │   └── server           # Server side code
│   ├── store                # Store application
│   |   ├── client             # Client side code
│   |   ├── server             # Server side code
│   |   └── shared             # Universal code
│   └── index.js             # Server application start point
├── theme                    # Theme as a local package
└── process.json             # pm2 process file
```

## Licence

This software is provided free of charge and without restriction under the MIT License
