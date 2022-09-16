export async function createWilder(firstName, lastName, isTrainer) {
	let httpStatusError = false;
	try {
		const response = await fetch('/wilders', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstName, lastName, isTrainer })
		});
		const message = await response.json();
		if (!response.ok) {
			httpStatusError = true;
			throw Error(message.error);
		}
		return message;
	} catch (error) {
		if (httpStatusError) {
			throw Error(error.message);
		}
		throw Error('Impossible de joindre le serveur. Vérifiez votre connexion à Internet.');
	}
}
