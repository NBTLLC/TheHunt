module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [75]
      }
    },
    position_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [75]
      }
    },
    date_added: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [75]
      }
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2000]
      }
    },
    hiring_manager_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [160]
      }
    },
    hiring_manager_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [75]
      }
    },
    hiring_manager_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [75]
      }
    },
    company_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [65,535]
    }
  });

  return Company;
};
