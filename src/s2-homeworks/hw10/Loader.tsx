import loader from '../../../public/Loading.png'
import s from './Loader.module.css'

export const Loader = () => (
	<div className={s.loader}>
		<img src={loader} alt='loader' />
	</div>
)
