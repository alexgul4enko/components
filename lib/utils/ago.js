import moment from 'moment'

export default function difference(timestamp) {
  const diff = moment.duration(new Date() - timestamp * 1000)

  return Math.floor(diff.asYears()) && (`${Math.floor(diff.asYears())}y`) ||
        Math.floor(diff.asMonths()) && (`${Math.floor(diff.asMonths())}mon`) ||
        Math.floor(diff.asWeeks()) && (`${Math.floor(diff.asWeeks())}w`) ||
        Math.floor(diff.asDays()) && (`${Math.floor(diff.asDays())}d`) ||
        Math.floor(diff.asHours()) && (`${Math.floor(diff.asHours())}h`) ||
        Math.floor(diff.asMinutes()) && (`${Math.floor(diff.asMinutes())}min`) ||
        Math.floor(diff.asSeconds()) && (`${Math.floor(diff.asSeconds())}s`) ||
        'now'
}
