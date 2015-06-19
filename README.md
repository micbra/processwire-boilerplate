# Welcome to ProcessWire Boilerplate

This repsoitory delivers you with the latest ProcessWire development version bundeled with some useful modules and a couple of other nice extras. It's strictly aimed at developers who develop on their local machines instead on a remote server.

## What is included?

* Processwire 2.6.3-dev
* Modules: TemplateTwigReplace, TemplateDataproviders, ProcesswireUpgrade, HelperFieldLinks
* [Bourbon](http://bourbon.io)
* [pureCSS](http://purecss.io)
* Grunt (with contrib-sass, contrib-unglify, contrib-jshint and contrib-watch)
* jQuery


## Installation

### Requirements

* A LAMP (or WAMP, XAMPP ...) Envoironment. 
* Installed Node.js.


### Installation in your Development Envoironment

1. Unzip the downloaded file to your desired location. 

2. Create a new Database (in phpMyAdmin for example) and import the ``database.sql`` file.

3. Open the file ``site/config.php`` with your Editor and configure the variables in lines 49-53 and line 74.

### Troubleshooting Installation

Please see the [Processwire Readme](https://github.com/ryancramerdesign/ProcessWire/blob/dev/README.md) about this topic before asking questions here.

## Usage

1. First of all you should run ``npm install`` in your directory. This will install grunt and it's dependancies.

2. Would you like grunt to watch your .scss-files while developing, run ``grunt watch``

3. Are you ready to depoly? Run ``grunt deploy`` and set ``$config->debug = false`` in your config.php

4. The login for the backend (yoursite.com/processwire) is *admin* : *password*.

## Paths

### Configuration

`/site/config.php`

### Templates

`/site/templates/*.twig`

### (S)CSS, JavaScript, Images

`/site/templates/assets/css/main.scss` and `/site/templates/assets/css/project/*`
`/site/templates/assets/js/app/*.js` and `/site/templates/assets/js/main.js`
`/site/templates/assets/img`

### Dataproviders

`/site/templates/dataproviders/TemplatenamePage.php`