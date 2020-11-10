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

export default Badge;
