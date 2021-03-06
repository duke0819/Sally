"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Qna extends Model {
    static associate(models) {}
  }
  Qna.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      qna_sex: DataTypes.STRING,
      qna_age: DataTypes.STRING,
      qna_blood: DataTypes.STRING,
      qna_digest: DataTypes.STRING,
      qna_skin: DataTypes.STRING,
      qna_eye: DataTypes.STRING,
      qna_brain: DataTypes.STRING,
      qna_stemina: DataTypes.STRING,
      qna_bone: DataTypes.STRING,
      qna_immune: DataTypes.STRING,
      qna_hair: DataTypes.STRING,
      qna_diet: DataTypes.STRING,
      qna_stress: DataTypes.STRING,
      qna_sleep: DataTypes.STRING,
      qna_symptom: DataTypes.STRING,
      qna_height: DataTypes.STRING,
      qna_weight: DataTypes.STRING,
      qna_workout: DataTypes.STRING,
      qna_afterworkout: DataTypes.STRING,
      qna_outdoor: DataTypes.STRING,
      qna_eathabit: DataTypes.STRING,
      qna_symbolfood: DataTypes.STRING,
      qna_etc: DataTypes.STRING,
      qna_familydisease: DataTypes.STRING,
      qna_femaledisease: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Qna",
    }
  );
  return Qna;
};
