import React from "react";
import styles from "../styles/components/Header.module.css";

export function Header() {
	function openGooglePlay() {
		window.open("https://play.google.com/store/apps/details?id=com.companyname.smartmovingmobileapp").focus();
	   }
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Olá, <span>WallMartson</span>
					</h2>
					<p>Bem-vindo</p>
				</div>
				<div className={styles.profile}>
					<img src="images/google_play.png" onClick={openGooglePlay} alt="app" className={styles.profileImage} />
				</div>
			</div>
		</div>
	);
}
//ao clicar na imagem ali, ir pra endereço do app na loja do google play