import { GenericStore } from './../dal.generic.store';
import { Session } from './../../../../types/persisted.types';

export abstract class SessionStore {
    public static storeName = 'sessions';

    public static async create(
        guildId: string
    ): Promise<string> {
        let password: string = [...Array(8)].map(i => (~~(Math.random() * 36)).toString(36)).join('');
        let token: string = [...Array(20)].map(i => (~~(Math.random() * 36)).toString(36)).join('');

        await GenericStore.createOrUpdate(
            this.storeName,
            { login: guildId },
            { login: guildId, password: password, token: token }
        );

        return password;
    }

    public static async get(
        guildId: string
    ): Promise<Array<Session>> {
        let result = await GenericStore.getBy(
            this.storeName,
            { guildId: guildId },
            {}
        ) as Array<Session>;

        return result;
    }

}