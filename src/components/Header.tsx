import React from "react";
import styles from "../styles/components/Header.module.css";

export function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Olá, <span>Jonatas</span>
					</h2>
					<p>Bem-vindo</p>
				</div>
				<div className={styles.profile}>
					<img src="images/man.png" alt="profile" className={styles.profileImage} />
				</div>
			</div>
		</div>
	);
}
