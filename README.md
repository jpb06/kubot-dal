Data access layer for kubot

# Purpose

Just an experiment to toy a bit with packaging and tooling.
This is a library containing types to be persisted on a mongodb database and their related manipulation components. 

# Environment

- Targeted for node.js.
- Typescript superset for coding.

# Version history

*  1.0.0 : Naive implementation relying on gulp for project tasking (concat / build / package.json moving).
*  1.1.0 : Using Webpack to do proper bundling for server side code (node.js).
*  1.1.1 : Changing persisted types to typescript interfaces.
*  1.1.2 : Readme issues.
*  1.1.3 : Unordered list for versions history (readme).
*  1.1.4 : Replacing interfaces by classes: was causing issues while consuming the package (interfaces somehow not recognized despite being in typescript declaration files).
*  1.1.41 : Typo in readme.
*  1.1.5 : Using basic deploy - one file per module.
*  1.1.6 : Adding a configuration component to manage mongodb instance url and targeted database.
*  1.1.7 : Namespace PersistedTypes renamed to Types.
*  1.1.42 : Derped version; Will have to make it expand from v1.1.42 from now on.
*  1.1.43 : Adding command prefix to guild configuration type.
*  1.1.44 : Updating mongodb and using new parser for connect.
*  1.1.45 : Fixing GenericStore.createOrUpdate (behavior change for findOneAndUpdate).
*  1.1.46 : Adding activityNoticeMessages property to the GuildConfiguration type.
*  1.1.47: Adding showPlayers to the WatchedRegion type.
*  1.1.48: Adding storate related with configuration website (Sessions).
*  1.1.49: Adding sessions manipulation class to Manipulation exports.
*  1.1.50: Publish error.
*  1.1.51: Sessions store get should return only one session.
*  1.1.52: Fixing issue in sessions store (login, not guildId).
*  1.1.53: Fixing some functions in the generic store not returning the operation result.
*  1.1.54: Adding a store for star systems.
*  1.1.55: Adding the nickname, posx and posy properties to the star systems model.
*  1.1.56: Adding roles to users sessions.
*  1.1.57: Using bcrypt to hash passwords before storing them. Removing the token property from the session type (useless).
*  1.1.58: Adding a generation date property to the session type.
*  1.1.59: Setting generation date on session creation.