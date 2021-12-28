import { useEffect, useCallback } from "react";


function useUserInterfaceHook() {
	
	const sendCommandToEngine = useCallback((pressedKey: string): void => {
		console.log(pressedKey);
	}, []);

	useEffect(() => {
		window.addEventListener('keydown', (ev: KeyboardEvent) => {
			sendCommandToEngine(ev.key);
		});
	}, []);
}

export default useUserInterfaceHook;