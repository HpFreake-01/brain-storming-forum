<?php

use yii\db\Migration;

/**
 * Class m220115_042815_add_access_token_to_user
 */
class m220115_042815_add_access_token_to_user extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%user}}', 'access_token', $this->string(512)->after('auth_key'));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
       $this->dropColumn('{{%user}}','access_token');

        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m220115_042815_add_access_token_to_user cannot be reverted.\n";

        return false;
    }
    */
}
