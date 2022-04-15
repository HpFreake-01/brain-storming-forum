<?php

namespace frontend\controllers;

use common\models\Answer;
use common\models\Question;
use common\models\User;
use yii\filters\AccessControl;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\ForbiddenHttpException;

class Bearer extends HttpBearerAuth{
    public function handleFailure($response)
    {
        Yii::$app->response->setStatusCode(403);
        return \Yii::$app->response->data = [
            'message' => 'You need auth'
        ];
    }
}

class BaseApiController extends ActiveController
{
    public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'items',
    ];
    public function checkAccess($action, $model=null, $params=[]) {
        if (in_array($action, ['update', 'delete']) && $model->created_by !== \Yii::$app->user->id) {
            throw new ForbiddenHttpException("You do not have permission to change this record");
        }
    }
    public static function allowedDomains()
    {
        return [
            'http://localhost:3000'
        ];
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator'] = [
            'class' => \yii\filters\ContentNegotiator::className(),
            'formatParam' => '_format',
            'formats' => [
                'application/json' => \yii\web\Response::FORMAT_JSON,
                'xml' => \yii\web\Response::FORMAT_XML
            ]
        ];
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin'                           => static::allowedDomains(),
                'Access-Control-Request-Method'    => ['GET', 'POST', 'DELETE'],
                'Access-Control-Request-Headers'    => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age'           => 3600,
            ],
        ];

        $behaviors['authenticator']['except'] = [
            'login','signup','create','update','delete'
        ];
        $behaviors['authenticator']['only'] = [
            'create','update','delete','login','signup',
        ];
        $behaviors['authenticator']['authMethods'] = [
            Bearer::className()
        ];


        return $behaviors;
    }

}