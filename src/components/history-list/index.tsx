import { useMemo } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { IoMdBook } from 'react-icons/io'
import { MdDoneOutline, MdPeople } from 'react-icons/md'
import type { HistoryItem } from '../../@types'
import { history } from '../../data/content'
import { HistoryPair } from '../history-pair'
import styles from './history-list.module.css'

export function HistoryList() {
  const style = {
    fill: '#d62020',
    minWidth: '40px',
    minHeight: '40px'
  }

  const content = history.map((historyItem, index) => {
    switch (true) {
      case index === 0:
        return { ...historyItem, icoComponent: <IoMdBook style={style} /> }
        break
      case index === 1:
        return {
          ...historyItem,
          icoComponent: <AiFillSetting style={style} />
        }
        break
      case index === 2:
        return { ...historyItem, icoComponent: <MdPeople style={style} /> }
        break
      case index === 3:
        return {
          ...historyItem,
          icoComponent: <MdDoneOutline style={style} />
        }
        break
    }
  })
  const historyList = useMemo(() => {
    return content.reduce<[HistoryItem, HistoryItem][]>((acc, item, index) => {
      const firstElemOfPair = (index + 1) % 2
      const secondElem = content[index + 1]
      if (firstElemOfPair && item && secondElem) {
        acc.push([item, secondElem])
      }
      return acc
    }, [])
  }, [content])

  return (
    <>
      <div className={styles.container} id={'about'}>
        {historyList.map((historyPair, index) => {
          const print = !(++index % 2)
          return <HistoryPair pair={historyPair} print={print} key={index} />
        })}
      </div>
    </>
  )
}
