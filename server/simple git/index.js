const simpleGit = require('simple-git');
const git = simpleGit(__dirname + '/../../');

const USER = 'nightsailor';
const PASS = process.env.PASS;
const REPO = 'github.com/nightsailor/Apprature';

const remote = `https://${USER}:${PASS}@${REPO}`;

const gitInitial = () => {
  git
    .checkIsRepo()
    .then(isRepo => !isRepo && initialiseRepo())
    .then(() => git.fetch());
initialiseRepo()
git.fetch('--all')
  git.raw(
    [
      'config',
      '--global',
      'user.email',
      'sulemanshah432@gmail.com',
    ], (err, result) => {
      console.error(err)
    });

  git.raw(
    [
      'config',
      '--global',
      'user.name',
      'Suleman Shah'
    ], (err, result) => {
      console.error(err)
    });
}

const initialiseRepo = () => {
  return git.init()
    .then(() => git.addRemote('origin', `https://${REPO}`))
}

const gitCommit = () => {
  git
    .pull('origin', 'master')
    .add('./')
    .commit("auto push!")
    .push([remote, '--all'], () => console.log('done'))
    .catch((err) => console.error('failed: ', err))
}

module.exports = {
  initialiseRepo,
  gitInitial,
  gitCommit
}