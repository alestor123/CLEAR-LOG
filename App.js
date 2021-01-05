var rimraf = require('rimraf'),
ncron = require('node-cron');

module.exports = cron => {
err(cron)
ncron.schedule(cron, () => {
rimraf.sync('./*.log')
rimraf.sync('./.log')
})
}
module.exports.console = cron => {
err(cron)
ncron.schedule(cron, () => {
    console.clear()
    console.warn('Cleared Log')
})
}
function err(cron){
if(!cron) throw Error('Cron Not Found')
}