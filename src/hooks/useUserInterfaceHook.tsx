import { Vehicle, World } from "duel-arena-engine";
import { useEffect, useCallback } from "react";

function useUserInterfaceHook(world: World, vehicle_id: string): void {
	const sendCommandToEngine = useCallback((pressedKey: string): void => {
		switch (pressedKey) {
			case 'w':
			case 'ArrowUp':
				world.getVehicle(vehicle_id).setSpeed(10);
				world.getVehicle(vehicle_id).move();
				break;
			case 's':
			case 'ArrowDown':
				world.getVehicle(vehicle_id).setSpeed(10);
				world.getVehicle(vehicle_id).move(Vehicle.DIRECTIONS.BACKWARD);
				break;
			case 'a':
				world.getVehicle(vehicle_id).setAngleSpeed(30);
				world.getVehicle(vehicle_id).rotate(Vehicle.DIRECTIONS.ANTICLOCKWISE);
				break;
			case 'd':
				world.getVehicle(vehicle_id).setAngleSpeed(30);
				world.getVehicle(vehicle_id).rotate();
				break;
			case 'ArrowLeft':
				world.getVehicle(vehicle_id).setGunAngleSpeed(30);
				world.getVehicle(vehicle_id).rotateGun(Vehicle.DIRECTIONS.ANTICLOCKWISE);
				break;
			case 'ArrowRight':
				world.getVehicle(vehicle_id).setGunAngleSpeed(30);
				world.getVehicle(vehicle_id).rotateGun();
				break;
			default:
		}
	}, [vehicle_id, world]);

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