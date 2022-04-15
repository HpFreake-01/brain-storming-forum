<?php

namespace frontend\controllers;

use frontend\resource\Question;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;

class QuestionController extends BaseApiController
{
    public $modelClass = Question::class;

}