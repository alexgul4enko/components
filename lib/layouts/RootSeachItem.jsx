export default function RootSeachItem({ item: { title, to, search, ...rest } }) {
  return (
    <p className="root_search_item">
      "<b>{search}</b>" {title}
    </p>
  )
}
