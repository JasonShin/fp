const Task  = require('data.task')
const spotify = require('./spotify.js')
const argv = new Task((rej, res) => res(process.argv))
const names = argv.map(args => args.slice(2))

const related = name =>
  spotify.findArtist(name)
    .map(artist => artist.id)
    .chain(spotify.relatedArists)
    .map(artists => artists.map(artist => artist.name))

const main = ([name1, name2]) =>
  Task.of(rels1 => rels2 => [rels1, rels2])
    .ap(related(name1))
    .ap(related(name2))

names.chain(main).fork(console.error, console.log)
