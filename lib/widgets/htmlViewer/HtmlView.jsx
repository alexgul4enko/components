import { Fragment } from 'react'

export default function HtmlView({ body, elements, activeIndex, scrollTo }) {
  return (
    <Fragment>
      <div className="manual_body" dangerouslySetInnerHTML={{ __html: body }}/>
      <aside className="navigation">
        <h4>Contents</h4>
        <ul>
          {elements.map(({ top, text, item }, index) => (
            <li
              onClick={scrollTo(item)}
              className={activeIndex === index ? 'active' : ''}
              key={`${text}${index}`}
            >
              {text}
            </li>
          ))}
        </ul>
      </aside>
    </Fragment>
  )
}
