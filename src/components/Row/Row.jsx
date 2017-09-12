import React from 'react'
import './Row.css'

export default function Row({rowClass, children}) {
  return (
		<div className={"Row " + rowClass}>
			{children}
		</div>
  )
}