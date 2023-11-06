import { Sequelize } from "sequelize";
import db from "../config/DataBase.js";

const { DataTypes } = Sequelize;

const Etudiant = db.define("Etudiants", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
  },
  prenom: {
    type: DataTypes.STRING,
  },
  date_naiss: {
    type: DataTypes.DATE,
  },
  cin: {
    type: DataTypes.INTEGER,
  },
  photo_identite: {
    type: DataTypes.BLOB,
  },
  type_mime: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, 
  },
}, {
  freezeTableName: true,
});

export default Etudiant;
