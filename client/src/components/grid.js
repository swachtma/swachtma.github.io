import React from 'react'
import PropTypes from 'prop-types'

import Card from './card'
import styles from '../styles/grid.module.scss'

const Grid = ({ gridPattern, cards }) => {
  const renderCards = (pattern, cards) =>
    cards.map(card => {
      if (card.node.id) {
        let p = pattern[0]
        pattern.push(pattern.shift())
        return (
          <Card
            key={card.node.id}
            card={card.node}
            horizontal={p.horizontal}
            className={`col l${p.l} m${p.m} s${p.s}`}
          />
        )
      } else {
        return null
      }
    })

  return (
    <div id={styles.grid}>
      <div className="row">
        <div id="cardPanel">{renderCards([...gridPattern], cards)}</div>
      </div>
    </div>
  )
}

Grid.defaultProps = {
  gridPattern: [
    { l: 12, m: 12, s: 12, horizontal: true },
    { l: 4, m: 6, s: 12 },
    { l: 4, m: 6, s: 12 },
    { l: 4, m: 6, s: 12 },
    { l: 6, m: 6, s: 12 },
    { l: 6, m: 6, s: 12 },
  ],
}

Grid.propTypes = {
  gridPattern: PropTypes.arrayOf(PropTypes.object),
  cards: PropTypes.array,
}

export default Grid
