module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // max:75
        len: [0,75]
      }
    },
    position_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // max:75
        len: [0,75]
      }
    },
    date_added: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // max:75
        len: [0,75]
      }
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // max:2000,
        len: [0,2000]
        // isUrl: true
      }
    },
    hiring_manager_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // max:160
        len: [0,160]
      }
    },
    hiring_manager_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0,75]
        // max:75,
        // is: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i

      }
    },
    hiring_manager_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // max:75,
        len: [0,75]
        // isEmail: true
      }
    },
    company_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      // max:65535
      len: [0,65535]
    },
    board_position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // max:75
        len: [0,75]
    }
  }

  });

  return Company;
};
