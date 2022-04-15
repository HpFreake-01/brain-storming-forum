<?php

namespace frontend\resource;


use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

class Question extends \common\models\Question
{

    public function fields()
    {
        return [
            'id','body_question',
            'question_title',
            'tag',
            'answers',
            'created_at',
            'created_by',
            'createdBy'
        ];
    }

    public function extraFields()
    {
        return ['updated_at','updated_by','created_by','created_at'];
    }

    public function getAnswers()
    {
        return $this->hasMany(Answer::class, ['question_id' => 'id']);
    }


}