﻿import * as PersistedTypes from './persisted.types';

export abstract class PersistedTypesValidation {

    /* ---------------------------------------------------------------------------------------------------------------
       Activity Cache
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsActivityCacheItem(obj: any): obj is PersistedTypes.ActivityCacheItem {
        return (
            typeof obj.name === "string" &&
            typeof obj.playersCount === "number"
        );
    }

    public static IsGuildActivityCache(obj: any): obj is PersistedTypes.GuildActivityCache {
        if (typeof obj.GuildId !== "string" || !Array.isArray(obj.Cache)) {
            return false;
        }

        for (let i = 0; i < obj.Cache.length; i++) {
            if (!this.IsActivityCacheItem(obj.Cache[i])) return false;
        }

        return true;
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Guild Configuration
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsGuildConfiguration(obj: any): obj is PersistedTypes.GuildConfiguration {
        if (
            typeof obj.guildId !== "string" ||
            typeof obj.messagesImage !== "string" ||
            typeof obj.messagesFooterName !== "string" ||
            typeof obj.scanMainRegionName !== "string" ||
            typeof obj.mainChannelName !== "string" ||
            typeof obj.adminChannelName !== "string" ||
            typeof obj.emergencyChannelName !== "string" ||
            typeof obj.acknowledged !== "string" ||
            typeof obj.activityNoticeMinPlayers !== "number" ||
            typeof obj.commandsPrefix !== "string" ||
            !Array.isArray(obj.activityNoticeMessages)
        ) {
            return false;
        }

        for (let i = 0; i < obj.activityNoticeMessages.length; i++) {
            if (typeof obj.activityNoticeMessages[i] !== "string") return false;
        }

        return true;
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Last Fetch
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsLastFetch(obj: any): obj is PersistedTypes.LastFetch {
        return (
            typeof obj.target === "string" &&
            typeof obj.date === "string"
        );
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Online Player
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsOnlinePlayer(obj: any): obj is PersistedTypes.OnlinePlayer {
        return (
            typeof obj.Time === "string" &&
            typeof obj.Name === "string" &&
            typeof obj.System === "string" &&
            typeof obj.Region === "string" &&
            typeof obj.Ping === "number"
        );
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Watched Faction
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsWatchedFaction(obj: any): obj is PersistedTypes.WatchedFaction {
        if (typeof obj.guildId !== "string" ||
            typeof obj.name !== "string" ||
            typeof obj.alwaysDisplay !== "boolean" ||
            !Array.isArray(obj.tags)) {
            return false;
        }

        for (let i = 0; i < obj.tags.length; i++) {
            if (typeof obj.tags[i] !== "string") return false;
        }

        return true;
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Watched Player
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsWatchedPlayer(obj: any): obj is PersistedTypes.WatchedPlayer {
        if (typeof obj.guildId !== "string" ||
            typeof obj.name !== "string" ||
            typeof obj.comment !== "string")
            return false;

        return true;
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Watched Region
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsWatchedRegion(obj: any): obj is PersistedTypes.WatchedRegion {
        if (typeof obj.guildId !== "string" ||
            typeof obj.name !== "string" ||
            typeof obj.alwaysDisplay !== "boolean" ||
            !Array.isArray(obj.systems) ||
            typeof obj.showPlayers !== "boolean") {
            return false;
        }

        for (let i = 0; i < obj.systems.length; i++) {
            if (typeof obj.systems[i] !== "string") return false;
        }

        return true;
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Session (Configuration Website)
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsSession(obj: any): obj is PersistedTypes.Session {
        if (typeof obj.login !== "string" ||
            typeof obj.password !== "string" ||
            typeof obj.dateGenerated !== "string" ||
            !Array.isArray(obj.roles))
            return false;

        for (let i = 0; i < obj.roles.length; i++) {
            if (typeof obj.roles[i] !== "string") return false;
        }

        return true;
    }

    /* ---------------------------------------------------------------------------------------------------------------
       Star system
       ---------------------------------------------------------------------------------------------------------------*/

    public static IsStarSystem(obj: any): obj is PersistedTypes.StarSystem {
        if (typeof obj.nickName !== "string" ||
            typeof obj.name !== "string" ||
            typeof obj.posX !== "number" ||
            typeof obj.posY !== "number")
            return false;

        return true;
    }
}