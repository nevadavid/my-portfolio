import PropTypes from 'prop-types';

import styles from './Badge.module.scss';

function Badge(
	{
		label,
	},
) {
	return (
		<span
			className={styles.badge}
		>
			{label}
		</span>
	);
}

Badge.propTypes = {
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

export default Badge;
