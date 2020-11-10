import PropTypes from 'prop-types';

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

Icon.propTypes = {
	name: PropTypes.string,
};

export default Icon;
