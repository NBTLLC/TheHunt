module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max:75
      }
    },
    position_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max:75
      }
    },
    date_added: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max:75
      }
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max:2000
      }
    },
    hiring_manager_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max:160
      }
    },
    hiring_manager_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max:75
      }
    },
    hiring_manager_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max:75
      }
    },
    company_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      max:65535
    },
    board_position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max:75
    }
  }

  });

  return Company;
};
