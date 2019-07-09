import isEmpty from 'lodash/isEmpty'
import ExpansionComponent from './ExpansionComponent'


export default function Tree({ data, checkActive, handleChange, renderItem, level = 0 }) {
  if(isEmpty(data) || !Array.isArray(data)) { return null }

  return data.map(({ title, uuid, children, ...rest }) => (
    <ExpansionComponent
      key={uuid}
      uuid={uuid}
      title={title}
      active={checkActive(uuid)}
      handleChange={handleChange}
      level={level}
      renderItem={renderItem}
      canBeToggled={Array.isArray(children)}
      {...rest }
    >
      {!isEmpty(children) && (
        <Tree
          data={children}
          checkActive={checkActive}
          handleChange={handleChange}
          level={level + 1}
          renderItem={renderItem}
        />
      )}
    </ExpansionComponent>
  ))
}
