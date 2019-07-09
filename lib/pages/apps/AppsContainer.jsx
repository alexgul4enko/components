import { PureComponent } from 'react'
import App from './App'

const data = [
  {
    to: '/',
    title: 'Taxonomy',
    icon: 'settings_applications',
    disabled: false,
  },
  {
    to: 'auth',
    title: 'QA Induction',
    icon: 'apps',
    disabled: true,
  },
  {
    to: 'auth',
    title: 'Development Manual and FAQs',
    icon: 'apps',
    disabled: true,
  },
  {
    to: 'auth',
    title: 'WDIO coding standards and best practice',
    icon: 'apps',
    disabled: true,

  },
  {
    to: 'auth',
    title: 'Architecture Meeting Notes',
    icon: 'apps',
    disabled: true,
  },
  {
    to: 'auth',
    title: 'Brand Manual',
    icon: 'apps',
    disabled: true,
  },
  {
    to: 'auth',
    title: 'Tender Responses',
    icon: 'apps',
    disabled: true,
  },
  {
    to: 'auth',
    title: 'Architecture',
    icon: 'apps',
    disabled: true,
  },
]
export default class AppsContainer extends PureComponent {
  render() {
    return <App {...this.props} data={data}/>
  }
}
