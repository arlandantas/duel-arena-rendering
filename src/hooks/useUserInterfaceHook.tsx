import { VehicleController } from "duel-arena-engine";
import { useEffect, useCallback } from "react";

function useUserInterfaceHook(vehicle_controller: VehicleController): void {
	const sendCommandToEngine = useCallback((pressedKey: string): void => {
		switch (pressedKey) {
			case 'w':
			case 'ArrowUp':
				vehicle_controller.moveForward();
				break;
			case 's':
			case 'ArrowDown':
				vehicle_controller.moveBackward();
				break;
			case 'a':
				vehicle_controller.rotateAnticlockwise();
				break;
			case 'd':
				vehicle_controller.rotateClockwise();
				break;
			case 'ArrowLeft':
				vehicle_controller.rotateGunAnticlockwise();
				break;
			case 'ArrowRight':
				vehicle_controller.rotateGunClockwise();
				break;
			default:
		}
	}, [vehicle_controller]);

	useEffect(() => {
		const listenKeyDown = (ev: KeyboardEvent) => {
			sendCommandToEngine(ev.key);
		};
		window.addEventListener('keydown', listenKeyDown);

		return () => {
			window.removeEventListener('keydown', listenKeyDown);
		};
	}, [sendCommandToEngine]);
}

export default useUserInterfaceHook;