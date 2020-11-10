import icons from './icons';

import styles from './Icon.module.scss';

function Icon(
	{
		name,
	},
) {
	return (
		<svg
			className={styles.icon}
			viewBox="0 0 24 24"
		>
			<path
				d={icons[name]}
			></path>
		</svg>
	);
}

export default Icon;
