const MED_PLAZFM = require('./../_config/atoms/getAtomName')(__filename)
const ATOM_CONFIG = require('./../_config/atoms/getConfigPath')(MED_PLAZFM)
const CONFIG = require(ATOM_CONFIG)

const Atom = require('./../_factories/atom')(CONFIG)
// console.log('Atom', Atom)
module.exports = Atom
