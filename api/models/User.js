/**
 * User.js
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
    user_name: {
      type: 'string',
      required: true,
      unique: true
    },
    rooms: {
      collection: 'room',
      via: 'user'
    }
  }
};
