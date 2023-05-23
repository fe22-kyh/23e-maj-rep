export default function HistoryButton({content}) {

  return (
    <button className={content === undefined ? 'hidden' : undefined}>{content}</button>
  )
}