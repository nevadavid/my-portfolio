import Badge from '../Badge/Badge';

import styles from './ListItem.module.scss';

function ListItem(
	{
		label,
		url,
		badges,
	},
) {
	return (
		<li
			className={styles.listItem}
		>
			<a
				className={styles.listItemLink}
				href={url}
				target="_blank"
				rel="noreferrer"
			>
				{label}
			</a>

			<div
				className={styles.listItemBadges}
			>
				{badges && badges.map(
					(badge) => (
						<Badge
							key={badge}
							label={badge}
						></Badge>
					)
				)}
			</div>
		</li>
	);
}

export default ListItem;
