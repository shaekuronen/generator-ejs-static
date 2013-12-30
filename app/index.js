'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var EjsStaticGenerator = module.exports = function EjsStaticGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(EjsStaticGenerator, yeoman.generators.Base);

EjsStaticGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'author_name',
    message: 'Project author name:',
    default: ""
  }, {
    type: 'input',
    name: 'author_email',
    message: 'Project author email:',
    default: ""
  }, {
    type: 'input',
    name: 'author_url',
    message: 'Author URL:',
    default: ""
  }, {
    type: 'input',
    name: 'github_username',
    message: 'Github username:',
    default: ""
  }, {
    type: 'input',
    name: 'project_name',
    message: 'Project name:',
    default: ""
  }, {
    type: 'input',
    name: 'project_description',
    message: 'Project description:',
    default: ""
  }, {
    type: 'input',
    name: 'project_version',
    message: 'Project version',
    default: '0.0.0'
  }];

  this.prompt(prompts, function (props) {

    this.author_name = props.author_name;
    this.author_email = props.author_email;
    this.author_url = props.author_url;
    this.github_username = props.github_username;
    this.project_name = props.project_name;
    this.project_description = props.project_description;
    this.project_version = props.project_version;

    cb();
  }.bind(this));
};

EjsStaticGenerator.prototype.app = function app() {
  // this.mkdir('app');
  // this.mkdir('app/templates');

  // this.copy('_package.json', 'package.json');
  // this.copy('_bower.json', 'bower.json');

  this.copy('_jshintrc', '.jshintrc');
  this.copy('_gitignore', '.gitignore');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('Gruntfile.js', 'Gruntfile.js');

  this.directory('dev','dev');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');

};

EjsStaticGenerator.prototype.projectfiles = function projectfiles() {
  // this.copy('editorconfig', '.editorconfig');
  // this.copy('jshintrc', '.jshintrc');
};
