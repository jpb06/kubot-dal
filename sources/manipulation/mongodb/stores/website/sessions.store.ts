import * as moment from 'moment';

import { GenericStore } from './../dal.generic.store';
import { Session } from './../../../../types/persisted.types';

import * as cryptoUtil from './../../../../util/crypto.util';

export abstract class SessionStore {
    public static storeName = 'sessions';

    public static async create(
        guildId: string
    ): Promise<string> {
        let password: string = [...Array(8)].map(i => (~~(Math.random() * 36)).toString(36)).join('');

        let hash = await cryptoUtil.hash(password);

        await GenericStore.createOrUpdate(
            this.storeName,
            { login: guildId },
            { login: guildId, password: hash, dateGenerated: moment().toString() }
        );

        return password;
    }

    public static async get(
        guildId: string
    ): Promise<Session | null> {
        let result = await GenericStore.getBy(
            this.storeName,
            { login: guildId },
            {}
        ) as Array<Session>;

        if (result.length !== 1) return null;

        return result[0];
    }

    public static async getPermissions(
        login: string
    ): Promise<string[] | null> {
        let result = await GenericStore.getBy(
            this.storeName,
            { login: login },
            {}
        ) as Array<Session>;

        if (result.length !== 1) return null;

        return result[0].roles;
    }
}