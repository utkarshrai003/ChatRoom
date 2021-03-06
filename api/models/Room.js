/**
 * Room.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    Id: {
      type: "integer",
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: "string",
      required: true,
      unique: true
    },
    user: {
      model: 'user'
    },
    messages: {
      collection: 'message',
      via: 'room'
    }

  }
};
