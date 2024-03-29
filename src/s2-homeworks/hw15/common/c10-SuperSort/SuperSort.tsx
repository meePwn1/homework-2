import React from 'react'
import downSvg from '../assets/down.svg'
import upDownSvg from '../assets/up-down.svg'
import upSvg from '../assets/up.svg'

// добавить в проект иконки и импортировать
const downIcon = downSvg
const upIcon = upSvg
const noneIcon = upDownSvg

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
	switch (sort) {
		case '':
			return down
		case down:
			return up
		case up:
			return ''
		default:
			return down
	}
}

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))
	}

	const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

	return (
		<span id={id + '-sort-' + value} onClick={onChangeCallback}>
			<img id={id + '-icon-' + sort} src={icon} />
		</span>
	)
}

export default SuperSort
