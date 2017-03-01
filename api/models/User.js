/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      firstName:{
        type: 'string'
      },

      lastName:{
        type: 'string'
      },

      email:{
          type: 'string',
          required: true,
          email: true,
          unique: true
      },

      gender:{
        type: 'string'
      },

      gpa:{
          type: 'float',
          required: true
      },

      level:{
          type: 'string'
      },

      major:{
          type: 'string'
      },

      needormerit:{
          type: 'string'
      },

      phone:{
          type: 'string',
          required: true,
          defaultsTo: '0'
      }


  }
};

