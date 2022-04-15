<?php

namespace common\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "{{%question}}".
 *
 * @property int $id
 * @property string|null $question_title
 * @property string|null $body_question
 * @property string|null $tag
 * @property int $created_at
 * @property int|null $updated_at
 * @property int|null $created_by
 *
 * @property Answer[] $answers
 * @property User $createdBy
 */
class Question extends \yii\db\ActiveRecord
{

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%question}}';
    }
    public function behaviors()
    {
        return [
            TimestampBehavior::class,
            [
                'class' => BlameableBehavior::class,
                'updatedByAttribute' => false
            ]
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['question_title','body_question'], 'required'],
            [['body_question'], 'string'],
            [['created_at', 'updated_at', 'created_by'], 'integer'],
            [['question_title', 'tag'], 'string', 'max' => 512],
            [['created_by'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['created_by' => 'id']],
        ];
    }



    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'question_title' => 'Question Title',
            'body_question' => 'Body Question',
            'tag' => 'Tag',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'created_by' => 'Created By',
        ];
    }


    /**
     * Gets query for [[CreatedBy]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCreatedBy()
    {
        return $this->hasOne(User::className(), ['id' => 'created_by']);
    }

    /**
     * {@inheritdoc}
     * @return \common\models\query\QuestionQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new \common\models\query\QuestionQuery(get_called_class());
    }
}
