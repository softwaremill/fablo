'use strict';

const Generator = require('yeoman-generator');

const defaultPeerPrefix = 'peer';
const defaultNumberOfInstances = 3;

module.exports = class extends Generator {

  async prompting() {
    const questions = [{
      type: 'input',
      name: 'prefix',
      message: 'Peer hostname prefix',
      default: defaultPeerPrefix,
    }, {
      type: 'number',
      name: 'instances',
      message: 'Number of instances',
      default: defaultNumberOfInstances,
    }];
    const answers = await this.prompt(questions);
    this.config.set('peers', answers);
  }

};
