<?php

namespace frontend\controllers;

use frontend\resource\User;

class UserController extends BaseApiController
{
    public $modelClass = User::class;
}