<?php

namespace frontend\resource;

class Answer extends \common\models\Answer
{

    public function fields()
    {
        return ['id',
            'body_answer',
            'correctness_answer_count',
            'question_id',
            'created_at',
            'created_by',
            'createdBy'
        ];
    }

}