import { useMemo } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { IoMdBook } from 'react-icons/io'
import { MdDoneOutline, MdPeople } from 'react-icons/md'
import { useAppSelector } from '../../hooks/redux'
import { HistoryItemI } from '../../model/state'
import HistoryPair from '../history-pair/history-pair'
import styles from './history-list.module.css'

export default function HistoryList() {
  const style = {
    fill: '#d62020',
    minWidth: '40px',
    minHeight: '40px'
  }

  const content = useAppSelector(({ content }) => content?.history)?.map(
    (historyItem, index) => {
      switch (true) {
        case index === 0:
          return { ...historyItem, ico: <IoMdBook style={style} /> }
          break
        case index === 1:
          return { ...historyItem, ico: <AiFillSetting style={style} /> }
          break
        case index === 2:
          return { ...historyItem, ico: <MdPeople style={style} /> }
          break
        case index === 3:
          return { ...historyItem, ico: <MdDoneOutline style={style} /> }
          break
      }
    }
  )
  const id = useAppSelector((state) => state.content?.header[1].link)?.replace(
    '#',
    ''
  )

  const historyList = useMemo(() => {
    return content
      ?.map((historyItem, index) => [historyItem, content[index + 1]])
      .filter((elem, index) => (++index % 2 ? elem : undefined))
  }, [content])

  return (
    <>
      <div className={styles.container} id={id}>
        {historyList?.map((historyPair, index) => {
          return (
            <>
              <HistoryPair
                pair={historyPair as HistoryItemI[]}
                print={!(++index % 2)}
                key={index}
              />
            </>
          )
        })}
      </div>
    </>
  )
}
