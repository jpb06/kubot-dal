import { GenericStore } from './../dal.generic.store';
import { StarSystem } from './../../../../types/persisted.types';

export abstract class StarSystemsStore {
    public static storeName = "starsystems";

    public static async set(
        systems: Array<StarSystem>
    ): Promise<boolean> {
        let result = await GenericStore.clearAllAndCreateMany(this.storeName, systems);

        return result;
    }

    public static async getAll(): Promise<Array<StarSystem>> {
        let result = await GenericStore.getAll(this.storeName) as Array<StarSystem>;

        return result;
    }

}