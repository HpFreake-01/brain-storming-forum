<?php

namespace common\models;

use Yii;
use yii\base\Model;

/**
 * Login form
 */
class LoginForm extends Model
{
    public $email;
    public $username;
    public $password;
    public $rememberMe = true;

    private $_user;


    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            // username and password are both required
            [['email', 'password'], 'required'],
            [['email', 'password','username'], 'string'],
            // rememberMe must be a boolean value,
            // password is validated by validatePassword()
            ['password', 'validatePassword'],
        ];
    }

}
